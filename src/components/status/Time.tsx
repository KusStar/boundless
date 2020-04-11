import React, { useState } from 'react';
import { Manager, Reference, Popper } from 'react-popper';
import { Fade, Text } from '@components/core'
import timeFormatter from '@utils/time-formatter'
import TimeRef from './TimeRef'


interface Props {
  time: number
}

const Time: React.FC<Props> = ({
  time
}) =>  {
  const [show, setShow] = useState<boolean>(false)
  return (
    <Manager>
      <Reference>
        {({ ref }) => (
          <div
            ref={ref}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            <TimeRef time={time} />
          </div>
        
      )}
      </Reference>
      {show && 
        <Popper placement="bottom">
          {({ ref, style, placement }) => (
            <Fade 
              ref={ref} 
              style={{
                ...style, 
                marginTop: 10,
                padding: 10,
                textAlign:'center',
                background: 'rgba(0, 0, 0, 0.8)',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                border: '3px solid #F4DF9A',
                borderRadius: '8px',
              }}
              data-placement={placement}
            >
              <Text style={{
                fontSize: 12
              }}>
                {timeFormatter.readableDate(time)}
              </Text>
            </Fade>
          )}
        </Popper>
      }
    </Manager>
  )
}

export default Time
