import { useState } from 'react'
import './gallery.css'
import '../portfolio/portfolio.css'
import imageData from '../../data/images'

const Gallery = () => {
  const [fullWidth, SetFullWidth] = useState(null),
    [loaded, setLoaded] = useState(false);




  return (
    <>
      <h3>Gallery</h3>
      <div className="masonry">
        {
          imageData.map((img, i) => {
            const src = '/public/images/portfolio/' + img + '.webp';
            return (
              <div id={i} key={i} className={`item ${fullWidth === i ? 'item-fw' : ''} ${loaded ? '' : 'loading'}`}>
                    <img src={src}
                      alt='imagen'
                      loading='lazy'
                      className={`item-photo ${loaded ? '' : 'hidden'}${fullWidth === i ? 'photo-fw' : ''}`}
                      onClick={() => { SetFullWidth(i) }}
                      onLoad={() => { setLoaded(true) }}
                      />
                    <button onClick={() => { SetFullWidth(null) }} className={`close-image-icon ${fullWidth === i ? '' : 'invisible'}`} />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Gallery;