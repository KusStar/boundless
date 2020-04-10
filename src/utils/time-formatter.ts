import dayjs from 'dayjs'
import updateLocale from 'dayjs/plugin/updateLocale'

dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  weekdaysShort: ["日", "一", "二", "三", "四", "五", "六"]
})

const _readable = (time: number) => {
  return dayjs(time).format('周ddd HH:mm')
}

const _period = (time: number) => {
  const hour = dayjs(time).get('hour')

  switch (true) {
    case hour >= 3 && hour <= 9:
      return 'morning'
    case hour > 9 && hour < 18:
      return 'noon'
    default:
      return 'night'
  }
}

export default { 
  readable: _readable,
  period: _period
}
