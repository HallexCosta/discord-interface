import React, { useRef, useEffect } from 'react'

import ChannelMessage, { Mention } from '../ChannelMessage'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current

    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {/* <ChannelMessage
          author="Hállex Costa"
          date="16/07/2020"
          content="Pattern package by feature."
        /> */}

        {Array.from(Array(15).keys()).map(n => (
          <ChannelMessage
            key={n}
            author="Hállex Costa"
            date="16/07/2020"
            content="Pattern package by feature."
          />
        ))}

        <ChannelMessage
          author="Violet Evergarden"
          date="16/07/2020"
          content={
            <>
              <Mention>@Hallex Costa</Mention>, is a great pattern!
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData
