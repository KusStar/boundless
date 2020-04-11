
import React from 'react';
import styled from 'styled-components';
import { Container, Text, Button, Fade } from '@components/core'
import Box from '@components/Box'

const Title = styled.p`
  font-size: 40px;
  margin-bottom: 60px;
  color: #fff;
`

const Content = styled(Text)`
  font-size: 20px;
  margin-bottom: 60px;
`

interface Props {
  type: EndType
}

const endTypeMap = {
  'health': '你因生命过于脆弱而离开',
  'energy': '你因不愿进食而失去了生命',
  '': ''
}

const End: React.FC<Props>= ({
  type
}) => {

  const reload = () => {
    window.location.reload(false)
  }

  return (
      <Container fullscreen>
          <Box>
            <Fade>
              <Title>
                游戏结束
              </Title>
            </Fade>
            <Fade duration={3000}>
              <Content>
                {endTypeMap[type]}
              </Content>
            </Fade>
            <Fade duration={9000}>
              <Button
                onClick={reload}
                color="#3F4044"
              >
                重新开始
              </Button>
            </Fade>
          </Box>
      </Container>
  )
}

export default End
