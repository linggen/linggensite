function VideoDemo() {
    const videoUrl = "https://pub-b35854246e8345fcb7ddb99cd02ebcae.r2.dev/linggensite/linggendemo.mp4";
    
    return (
        <section className="py-24 bg-white dark:bg-obsidian-900" id="demo">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-4">
                        See It in Action
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        A short walkthrough of how Linggen orchestrates context and knowledge.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-jade-500/20 to-jade-500/0 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
                    <div className="relative bg-slate-900 rounded-2xl border border-slate-200 dark:border-dev-border overflow-hidden shadow-2xl">
                        <video 
                            controls 
                            playsInline
                            src={videoUrl}
                            className="w-full aspect-video"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoDemo
