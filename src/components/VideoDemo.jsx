function VideoDemo() {
    const videoUrl = "https://pub-b35854246e8345fcb7ddb99cd02ebcae.r2.dev/linggensite/linggendemo.mp4";
    
    return (
        <section className="demo-section" id="demo">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-decoration">◆</span>
                    See It in Action
                    <span className="title-decoration">◆</span>
                </h2>
                <p className="section-description">
                    A short walkthrough of how Linggen helps you index and search your code and docs.
                </p>

                <div className="video-wrapper">
                    <video 
                        controls 
                        playsInline
                        src={videoUrl}
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '900px',
                            borderRadius: '12px',
                            background: '#000'
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default VideoDemo
