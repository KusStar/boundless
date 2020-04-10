import React, { memo } from 'react';
import styled from 'styled-components';
import { Image } from '@components/core'
import timeFormatter from '@utils/time-formatter'
import assets from '@utils/assets'

const Icon = styled(Image)`
  height: 21px;
  width: 21px;
  transition: all 0.3s;
  &:hover {
    transform: translate3d(0, -1px, 0);
  }
`

const iconMap = (time: number) => {
  const period = timeFormatter.period(time)
  return assets[period]
}

const CurrentIcon = memo(({ time }: { time: number }) => {
  const iconSrc = iconMap(time)
  return (
    <Icon src={iconSrc} />
  )
})

export default CurrentIcon
