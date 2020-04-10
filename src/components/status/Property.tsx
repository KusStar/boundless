import React, { useState } from 'react';
import styled from 'styled-components';
import { Manager, Reference, Popper } from 'react-popper';
import { Image, Fade } from '@components/core'
import assets from '@utils/assets'
import Progress from './Progress'

const Wrapper = styled.div`
  height: 60px;
  width: 60px;
  background: 0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Icon = styled(Image)`
  height: 57px;
  width: 49.25px;
  transition: all 0.3s;
  &:hover {
    transform: translate3d(0, -1px, 0);
  }
`

const Property = () =>  {
  const [show, setShow] = useState<boolean>(false)
  return (
    <Manager>
      <Wrapper>
        <Reference>
          {({ ref }) => (
          <Icon 
            ref={ref}
            src={assets.property}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          />
        )}
        </Reference>
      </Wrapper>
      {show && 
        <Popper placement="bottom">
          {({ ref, style, placement }) => (
            <Fade 
              ref={ref} 
              style={{
                ...style, 
                width: 150, 
                height: 120,
                right: 0, 
                top: 10, 
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
              <Progress type='health' value={80} />
              <Progress type='energy' value={80} />
              <Progress type='mood' value={80} />
            </Fade>
          )}
        </Popper>
      }
    </Manager>
  )
}

export default Property
