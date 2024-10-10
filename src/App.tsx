import "./styles.css"
import image from "./assets/me.jpeg"
import textEN from "./assets/textEN.json"
import textES from "./assets/textES.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faGitAlt, faGithub, faHtml5, faInstagram, faJava, faJs, faLinkedin, faNodeJs, faPython, faReact, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCircleHalfStroke, faClock, faCubes, faDatabase, faInfoCircle, faLanguage, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

function App() {
  const [currentTime, setCurrentTime] = useState<string>("")
  const [language, setLanguage] = useState<string>('en')

  const aboutTitle = language === 'en' ? "About me" : "Sobre mí";
  const aboutText = language === 'en' ? textEN.text : textES.text;
  const aboutSubtitle = language === 'en' ? "Software developer" : "Desarrollador de software";

  const projectsTitle = language === 'en' ? "Projects" : "Proyectos";
  const projectsText = language === 'en' ? "Coming soon" : "Próximamente";

  const technologiesTitle = language === 'en' ? "Technologies" : "Tecnologías";

  useEffect(() => {
    const browserLanguage = navigator.language.startsWith('es') ? 'es' : 'en';
    setLanguage(browserLanguage);
    document.documentElement.lang = browserLanguage;
  }, []);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === 'en' ? 'es' : 'en';
      document.documentElement.lang = newLanguage;
      return newLanguage;
    });
  }

  const toggleMode = () => {
    document.body.classList.toggle('light-mode');
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit'}))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <header className="tile">
        <div className="clock"><FontAwesomeIcon icon={faClock}/> {currentTime}</div>
        <div>
          <button className="button" onClick={toggleMode}><FontAwesomeIcon icon={faCircleHalfStroke}/></button>
          <button className="button" onClick={toggleLanguage}><FontAwesomeIcon icon={faLanguage}/></button>
        </div>
      </header>
      <main>
        <div className="tile about" >
          <h2><FontAwesomeIcon icon={faInfoCircle}/> {aboutTitle}</h2>
          <div className="mainInfo">
            <img className="photo" src={image}/>
            <div>
              <h1>Luciano Canovas</h1>
              <h3>{aboutSubtitle}</h3>
            </div>
          </div>
          {aboutText.split("\n").map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
        <div className="tile projects">
          <h2><FontAwesomeIcon icon={faLaptopCode}/> {projectsTitle}</h2>
          <p>{projectsText}</p>
        </div>
        <div className="tile technologies">
          <h2><FontAwesomeIcon icon={faCubes}/> {technologiesTitle}</h2>
          <FontAwesomeIcon className="icon blue" icon={faPython}/>
          <FontAwesomeIcon className="icon orange" icon={faJava}/>
          <FontAwesomeIcon className="icon yellow" icon={faJs}/>
          <FontAwesomeIcon className="icon orange" icon={faHtml5}/>
          <FontAwesomeIcon className="icon blue" icon={faCss3Alt}/>
          <FontAwesomeIcon className="icon aqua" icon={faReact}/>
          <FontAwesomeIcon className="icon blue" icon={faDatabase}/>
          <FontAwesomeIcon className="icon green" icon={faNodeJs}/>
          <FontAwesomeIcon className="icon orange" icon={faGitAlt}/>
        </div>
      </main>
      <footer className="tile">
        <a href="https://github.com/lucianocanovas" className="button"><FontAwesomeIcon icon={faGithub}/></a>
        <a href="https://www.linkedin.com/in/luciano-canovas/" className="button"><FontAwesomeIcon icon={faLinkedin}/></a>
        <a href="https://www.instagram.com" className="button" ><FontAwesomeIcon icon={faInstagram}/></a>
        <a href="https://x.com" className="button"><FontAwesomeIcon icon={faXTwitter}/></a>
      </footer>
    </>
  )
}

export default App