import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './gallery.css'
import '../portfolio/portfolio.css'
import imageData from '../../data/images'

const Gallery = () => {
  const { t } = useTranslation(),
    [fullWidth, SetFullWidth] = useState(null),
    [loaded, setLoaded] = useState(false);

    const onFullWidth = (index) => {
      SetFullWidth(index);
      document.documentElement.style.overflow = 'hidden';
      return
    } 

    const closeFullWidth = () => {
      SetFullWidth(null)
      document.documentElement.style.overflow = 'auto';
    }
  return (
    <>
      <h3>{t('titles.gallery')}</h3>
      <div className='masonry-container'>
        <div className="masonry">
          {
            imageData.map((img, i) => {
              const src = '/public/images/portfolio/' + img + '.webp';
              return (
                <div id={i} key={i} className={`item ${fullWidth === i ? 'item-fw' : ''} ${loaded ? '' : 'loading'}`}>
                      <img src={src}
                        alt={`imagen ${i}`}
                        loading='lazy'
                        className={`item-photo ${loaded ? '' : 'hidden'}${fullWidth === i ? 'photo-fw' : ''}`}
                        onClick={() => { 
                          const isTabletSize = window.matchMedia("(max-width: 768px)").matches
                          if(isTabletSize) return
                          onFullWidth(i)
                          return
                        }}
                        onLoad={() => { setLoaded(true) }}
                        />
                      <button onClick={() => { closeFullWidth() }} className={`close-image-icon ${fullWidth === i ? '' : 'invisible'}`} />
                </div>
              )
            })
          }
        </div>
        <button className='gallery-slider-btn prev-btn'>
          <img src="/icons/arrow-left-icon.svg" alt="Previous" /></button>
        <button className='gallery-slider-btn next-btn'>
        <img src="/icons/arrow-right-icon.svg" alt="Previous" />
        </button>
      </div>
    </>
  )
}

export default Gallery;