import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:boukemoucheidriss@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:boukemoucheidriss@gmail.com">boukemoucheidriss@gmail.com</a>
        </div>
        <div>
        <a href="tel:+213558601124"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+213558601124">(+213) 558601124</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}
