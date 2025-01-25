import './videos.css';
import videoData from '../../data/videos.js';

const Videos = () => {

  return (
    <>
      <h3>Videos</h3>
      <div className="videoContainer">
        {videoData.map((video, i) => (
          
          <video key={i}
            width={200} 
            height={150} 
            controls={true} 
            autoPlay={false}
            muted
            preload='metadata'>
            <source src={'/videos/' + video.webm} type="video/webm" />
            <source src={'/videos/' + video.mp4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
    </>
  );
}

export default Videos;