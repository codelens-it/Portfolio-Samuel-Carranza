import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './gallery.css'
import '../portfolio/portfolio.css'
import imageData from '../../data/images'

const Gallery = () => {
  const { t } = useTranslation(),
    [fullWidth, SetFullWidth] = useState(null),
    [loaded, setLoaded] = useState(false),
    [imgIndex, setImgIndex] = useState(0),
    [isTabletSize, setIsTabletSize] = useState(false);

    // Actualiza el boolean que comprueba si el tamaño de la pantalla es menor a 768px
    useEffect(() => {
      window.addEventListener('resize', () => {
        const isTablet = window.matchMedia("(max-width: 768px)").matches
        setIsTabletSize(isTablet)
      })

    })

    const onFullWidth = (index) => {
      SetFullWidth(index);
      document.documentElement.style.overflow = 'hidden';
      return
    } 

    const closeFullWidth = () => {
      SetFullWidth(null)
      document.documentElement.style.overflow = 'auto';
    }

    const prevImg = () => {
      setImgIndex(i => {
        if (i === 0) return imageData.length  - 1
        return i - 1
      }) 
    }

    const nextImg = () => {
      setImgIndex(i => {
        if (i === imageData.length  - 1) return 0
        return i + 1
      }) 
    }

  return (
    <>
      <h3>{t('titles.gallery')}</h3>
      <div className='masonry-container'>
        <div className="masonry">
          {
            imageData.map((img, i) => {
              const src = '/images/portfolio/' + img + '.webp';
              return (
                <div id={i} key={i} className={`item ${fullWidth === i ? 'item-fw' : ''} ${loaded ? '' : 'loading'}`}
                style={{transform: isTabletSize ? `translateX(${-100 * imgIndex}%)` : 'none'}}>
                      <img src={src}
                        alt={`imagen ${i}`}
                        loading='lazy'
                        className={`item-photo ${loaded ? '' : 'hidden'}${fullWidth === i ? 'photo-fw' : ''}`}
                        onClick={() => { 
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
        <button className='gallery-slider-btn prev-btn' onClick={() => { prevImg() }}>
          <img src="/icons/arrow-left-icon.svg" alt="Previous" /></button>
        <button className='gallery-slider-btn next-btn' onClick={() => { nextImg() }}>
        <img src="/icons/arrow-right-icon.svg" alt="Previous" />
        </button>
      </div>
    </>
  )
}

export default Gallery;
