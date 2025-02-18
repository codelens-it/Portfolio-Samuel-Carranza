import Sliders from '../slider/Sliders'
import Gallery from '../gallery/Gallery'
import { useTranslation } from 'react-i18next'
import './portfolio.css'
import InfographicSection from '../infographic/Infographic'
import Videos from '../videos/Videos.jsx'

const Portfolio = () => {
const { t } = useTranslation()
return(
<>
<div className='portfolio-header'>
<div className="title-container-portfolio">
    <h2 className='title-portfolio'>{t('titles.portfolio')}</h2>
  </div>
</div>
  <Sliders/>
  <Videos/>
  <Gallery/>
  <InfographicSection />
</>

)
}

export default Portfolio;