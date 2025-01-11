import './gallery.css'
import '../portfolio/portfolio.css'
import imageData from '../../data/images'
const Gallery = () => {

  return(
    <>
    <h3>Gallery</h3>
    <div className="masonry">
      {
        imageData.map((img, i) => {
        const src = '/public/images/portfolio/' + img + '.webp'
        return <img src={src} alt='imagen' key={i} className='item' />
        })
      }
      
    </div>
    </>
  )
}

export default Gallery;