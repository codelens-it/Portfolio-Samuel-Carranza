import Photography from '../photography/Photography'
import Videos from '../videos/Videos'
import './portfolio.css'

const Portfolio = () => {

return(
<>
  <div id='portfolio' className="title-container-portfolio">
    <h2 className='title-portfolio'>Portfolio</h2>
  </div>
  <Photography/>
  <Videos/>
</>

)
}

export default Portfolio;