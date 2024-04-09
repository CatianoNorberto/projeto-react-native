
import { Container, Logo, Title, TitleRosh  } from './styles'
import logoImg from '../../assets/LogoHeader.png'

export function Header(){
  return(
    <Container>
      <Logo source={logoImg}/>
      {/* <Title>to<TitleRosh>do</TitleRosh></Title> */}
    </Container>
  )
}