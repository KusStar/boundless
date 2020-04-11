import React from 'react'
import styled from 'styled-components'
import { Image, Text as OriginalText, Touchable } from '@components/core'
import Bar from '@components/Bar'
import assets from '@utils/assets'
import launchpad from '@utils/launchpad'
import Wrapper from './Wrapper'
import { Sound, EffectType } from '@utils/enums'

const Col = styled(Wrapper)`
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Item = styled(Image)`
  height:60px;
  width: 60px;
  transition: all 0.3s;

  &:hover {
    transform: translate3d(0, -2px, 0);
  }
`

const Text = styled(OriginalText)`
  width: 50px;
  margin-right: 5px;
`
interface Item {
  key: string
  sound: Sound
  style?: React.CSSProperties
  name: string
  color: string
}

const items: Item[] = [
  {
    key: 'mask',
    sound: Sound.Hit,
    name: '口罩',
    color: '#fff',
  },
  {
    key: 'money',
    style: {
      margin: 10,
      marginBottom: 30,
    } as React.CSSProperties,
    sound: Sound.Coin,
    name: '金钱',
    color: '#fff',
  },
  {
    key: 'food',
    style: {
      height: 67,
      width: 67
    } as React.CSSProperties,
    sound: Sound.Eat,
    name: '食物',
    color: '#fff',
  },
]

interface Props {
  effectPlayer: (effect: EffectType) => void
  player: Player
}

const Package: React.FC<Props> = ({
  effectPlayer,
  player
}) => {

  const onItem = (item: Item) => {
    const { sound, key } = item;
    effectPlayer(key as EffectType)
    launchpad.fire(sound)
  }

  return (
    <Col>
      <Row>
        {items.map((item) => (
          <Touchable
            key={item.key}
            onClick={() => onItem(item)}
          >
            <Item 
              src={assets[item.key]}
              style={item.style}
            />
          </Touchable>
        ))}
      </Row>
      {items.map((item => (
        <Row
          key={item.key}
          style={{
            marginTop: 10
          }}
        >
          <Text>
            {item.name}
          </Text>
          <Bar 
            color={item.color}
            value={player[item.key]}
          />
      </Row>
      )))}
    </Col>
  )
}

export default Package;
