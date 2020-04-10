import dayjs from 'dayjs'
import updateLocale from 'dayjs/plugin/updateLocale'

dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  weekdaysShort: ["日", "一", "二", "三", "四", "五", "六"]
})

const readable = (time: number) => {
  return dayjs(time).format('周ddd HH:mm')
}

const period = (time: number) => {
  const hour = dayjs(time).get('hour')

  switch (true) {
    case hour >= 4 && hour <= 11:
      return 'morning'
    case hour > 11 && hour < 18:
      return 'noon'
    default:
      return 'night'
  }
}

export default { 
  readable,
  period
}
