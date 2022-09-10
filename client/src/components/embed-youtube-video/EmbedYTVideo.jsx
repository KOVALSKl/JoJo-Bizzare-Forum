import './EmbedYTVideo.css'

function EmbedYTVideo({ videoID }) {
    return (
        <div className="embed-video-container">
            <iframe
                className="embed-video"
                src={`https://www.youtube.com/embed/${videoID}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            >
            </iframe>
        </div >
    );
}

export default EmbedYTVideo;