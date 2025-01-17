import Sliders from '../slider/Sliders'
import Gallery from '../gallery/Gallery'
import './portfolio.css'

const Portfolio = () => {

return(
<>
  <div id='portfolio' className="title-container-portfolio">
    <h2 className='title-portfolio'>Portfolio</h2>
  </div>
  <Sliders/>
  <Gallery/>
</>

)
}

export default Portfolio;