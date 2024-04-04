import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'
import facebookIcon from '../../assets/facebook-3-2.svg'
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
   
      <div>
        <p>
          © Copyright idriss boukmouche
         <span>❤️</span>
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.facebook.com/idriss.boukmouche/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a
          href="https://github.com/terminalDZ/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B213558601124&text=Hello+Idriss+Boukmouche"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        
        <a
          href="https://www.instagram.com/idriss_boukmouche/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
