#!/usr/bin/env bash
set -euo pipefail

# Bash-only guard (avoid fish/zsh sourcing issues)
if [ -n "${FISH_VERSION:-}" ]; then
  echo "This script is bash-only. Run: bash install-cli.sh"
  exit 1
fi

MANIFEST_URL="${LINGGEN_MANIFEST_URL:-https://github.com/linggen/linggen-releases/releases/latest/download/manifest.json}"
INSTALL_DIR_DEFAULT="/usr/local/bin"
FALLBACK_DIR="$HOME/.local/bin"

detect_platform() {
  local os arch key
  os="$(uname -s | tr '[:upper:]' '[:lower:]')"
  arch="$(uname -m)"
  case "$os" in
    darwin)
      key="cli-macos-universal"
      ;;
    linux)
      case "$arch" in
        x86_64|amd64) key="cli-linux-x86_64" ;;
        aarch64|arm64) key="cli-linux-aarch64" ;;
        *) echo "Unsupported architecture: $arch" >&2; exit 1 ;;
      esac
      ;;
    *) echo "Unsupported OS: $os" >&2; exit 1 ;;
  esac
  echo "$key"
}

fetch_url_from_manifest() {
  local key="$1"
  local manifest_json url

  echo "➡️  Fetching manifest: $MANIFEST_URL"
  manifest_json="$(curl -fsSL "$MANIFEST_URL")" || { echo "Failed to download manifest" >&2; exit 1; }

  # Use python (commonly available) to extract the URL
  url="$(python - <<'PY' "$key" "$manifest_json"
import json, sys
key = sys.argv[1]
data = json.loads(sys.argv[2])
art = data.get("artifacts", {}).get(key)
if art and "url" in art:
    print(art["url"])
PY
)" || true

  if [ -z "$url" ]; then
    echo "Artifact not found in manifest for key: $key" >&2
    exit 1
  fi
  echo "$url"
}

ensure_dir() {
  local dir="$1"
  if [ ! -d "$dir" ]; then
    if mkdir -p "$dir" 2>/dev/null; then
      return 0
    elif command -v sudo >/dev/null 2>&1; then
      sudo mkdir -p "$dir"
    else
      return 1
    fi
  fi
  if [ -w "$dir" ]; then
    return 0
  elif command -v sudo >/dev/null 2>&1; then
    return 0  # will rely on sudo for copy
  else
    return 1
  fi
}

install_binary() {
  local tarball="$1" dest_dir="$2"
  local tmpdir binpath
  tmpdir="$(mktemp -d)"
  tar -xzf "$tarball" -C "$tmpdir"
  binpath="$tmpdir/linggen"
  if [ ! -f "$binpath" ]; then
    echo "linggen binary not found in tarball" >&2
    exit 1
  fi

  if [ -w "$dest_dir" ]; then
    cp "$binpath" "$dest_dir/"
  else
    sudo cp "$binpath" "$dest_dir/"
  fi
  chmod +x "$dest_dir/linggen"
}

main() {
  local key url tarball dest="$INSTALL_DIR_DEFAULT"

  key="$(detect_platform)"
  url="$(fetch_url_from_manifest "$key")"

  echo "➡️  Downloading $url"
  tarball="$(mktemp)"
  curl -fsSL "$url" -o "$tarball"

  if ! ensure_dir "$dest"; then
    echo "Using fallback install dir: $FALLBACK_DIR"
    dest="$FALLBACK_DIR"
    mkdir -p "$dest"
  fi

  install_binary "$tarball" "$dest"

  echo "✅ Installed linggen to $dest"
  echo "Version:"
  "$dest/linggen" --version || true
  if [[ ":$PATH:" != *":$dest:"* ]]; then
    echo "ℹ️  Add to PATH if needed:"
    echo "    export PATH=\"$dest:\$PATH\""
  fi
}

main "$@"
