import {useState} from 'react'

import {Container, Heading, Para, Image, Button} from './styledComponents'

const ReadMore = reactHooksDescription => {
  const [read, setRead] = useState(true)

  const onClickRead = () => {
    setRead(prevState => !prevState)
  }

  const description = reactHooksDescription
  const des = description.reactHooksDescription
  const desc = des.slice(0, 170)

  return (
    <Container>
      <Heading>React Hooks</Heading>
      <Para>Hooks are a new addition to React</Para>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Para>{read ? desc : des}</Para>
      <Button type="button" onClick={onClickRead}>
        {read ? 'Read More' : 'Read Less'}
      </Button>
    </Container>
  )
}

export default ReadMore
