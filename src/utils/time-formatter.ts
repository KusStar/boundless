import dayjs from 'dayjs'
import updateLocale from 'dayjs/plugin/updateLocale'

dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  weekdaysShort: ["日", "一", "二", "三", "四", "五", "六"]
})

const _readable = (time: number) => {
  return dayjs(time).format('周ddd HH:mm')
}

const _hour = (time: number) => {
  return dayjs(time).get('hour')
}

const _period = (time: number) => {
  const hour = _hour(time)

  switch (true) {
    case hour >= 3 && hour < 12:
      return 'morning'
    case hour >= 12 && hour < 18:
      return 'noon'
    default:
      return 'night'
  }
}

export default { 
  readable: _readable,
  hour: _hour,
  period: _period
}
