import { useState, useRef } from 'react'
import videoData from '../../data/videos.js';
import { useTranslation } from 'react-i18next';
import './videos.css';

const Videos = () => {
  const { t } = useTranslation(),
    [fullWidth, setFullWidth] = useState(null),
    videoRef = useRef([])

  const onOpenVideo = (index) => {
    setFullWidth(index)
    console.log(videoRef.current)
    document.documentElement.style.overflow = 'hidden';
    return
  }

  const onCloseVideo = (index) => {
    setFullWidth(null)
    videoRef.current[index].pause();
    document.documentElement.style.overflow = 'auto';
    return
  }

  return (
    <>
      <h3>Videos</h3>
      <div className="video-container">
        {videoData.map((video, i) => (
          <div key={i}
            className={`video-item-container ${fullWidth === i ? 'video-fw' : ''}`}
          >
            <video
              className={`video-item ${fullWidth === i ? 'video-item-fw' : ''}`}
              ref={ref => { videoRef.current[i] = ref }}
              controls={fullWidth === i}
              preload='metadata'
              onClick={() => {
                if (fullWidth === i) return
                onOpenVideo(i)
                return
              }}
            >
              <source src={'/videos/' + video.webm} type="video/webm" />
              <source src={'/videos/' + video.mp4} type="video/mp4" />
              {t('videos.notSupport')}
            </video>
            <button
              onClick={() => { onCloseVideo(i) }}
              className={`close-video-icon ${fullWidth === i ? '' : 'invisible'}`}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Videos;