import Backend from '../../assets/backend.png'
import HeadingOnePrimary from '../../core-components/headings/heading-one-primary/heading-one-primary.component'
import './certification.styles.scss'
import { Link, useLocation } from 'react-router-dom'
import PythonCert from '../../assets/certs/certificate-of-completion-for-python.png'
import HTMLCSSCert from '../../assets/certs/The Ultimate HTML5 And CSS3_Part1.jpg'
import DSACert from '../../assets/certs/UC-3BSD8H27_DSA.jpg'
import TypescriptCert from '../../assets/certs/1-the-ultimate-typescript-course.png'
import BuildAIPoweredApps from '../../assets/certs/certificate-of-completion-for-build-ai-powered-apps.png'
import ButtonPrimary from '../../core-components/buttons/button-primary/button-primary.component'
import { useNavigate } from 'react-router-dom'

const Certification = () => {
  const navigate = useNavigate()
  const certs = {
    python: PythonCert,
    htmlcss: HTMLCSSCert,
    dsa: DSACert,
    typescript: TypescriptCert,
    buildAIPoweredApps: BuildAIPoweredApps
  }
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const cert = queryParams.get('cert')
  return (
    <div className="certification-container">
      <div className="certbtn-group-container">
        {Object.keys(certs).map((cert) => {
          console.log(cert)
          // const certVal = certs[cert];
          return (
            <Link
              className="cert-nav-link"
              key={cert}
              onClick={(event) => {
                event.preventDefault()
                navigate(`/certification?cert=${cert}`)
              }}
            >
              {cert}
            </Link>
          )
        })}
      </div>
      <img className="certimage-container" src={certs[cert]} alt={cert} />
    </div>
  )
}

export default Certification
