import flalistImg from '../../assets/flalistImg.png'

import { 
  Container, 
  FlaListImg, 
  FlatListText, 
  FlatListTextSpan, 
} from './styles'

type HighlightProps = {
  title: string
  subtitle: string
}
export function Highlight({ title, subtitle}: HighlightProps) {
  return(
    <Container>
      <FlaListImg source={flalistImg}/>
      <FlatListText>
        {title}
      </FlatListText>
      <FlatListTextSpan>
        {subtitle}
      </FlatListTextSpan>
    </Container>
  )
}