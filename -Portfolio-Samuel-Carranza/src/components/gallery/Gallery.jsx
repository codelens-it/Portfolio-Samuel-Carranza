import { useState } from 'react'
import './gallery.css'
import '../portfolio/portfolio.css'
import imageData from '../../data/images'

const Gallery = () => {
  const [fullWidth, SetFullWidth] = useState(null)

  return (
    <>
      <h3>Gallery</h3>
      <div className="masonry">
        {
          imageData.map((img, i) => {
            const src = '/public/images/portfolio/' + img + '.webp'
            return <div key={i} className={`item ${fullWidth === i ? 'item-fw' : ''}`}>
              <img src={src} alt='imagen' className={`item-photo ${fullWidth === i ? 'photo-fw' : ''}`} onClick={() => { SetFullWidth(i) }} />
              <button onClick={() => {SetFullWidth(null)}} className={`close-image-icon ${fullWidth === i ? '' : 'invisible'}`} />
            </div>
          })
        }
      </div>
    </>
  )
}

export default Gallery;