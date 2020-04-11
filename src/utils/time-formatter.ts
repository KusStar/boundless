import dayjs from 'dayjs'
import updateLocale from 'dayjs/plugin/updateLocale'
import { Period } from './enums'

dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  weekdaysShort: ["日", "一", "二", "三", "四", "五", "六"]
})

const readable = (time: number) => {
  return dayjs(time).format('周ddd HH:mm')
}

const readableDate = (time: number) => {
  return dayjs(time).format('MMM DD, YYYY')
}

const period = (time: number): Period => {
  const hour = dayjs(time).get('hour')

  switch (true) {
    case hour >= 4 && hour <= 11:
      return Period.Morning
    case hour > 11 && hour < 18:
      return Period.Noon
    default:
      return Period.Night
  }
}


export default { 
  readable,
  readableDate,
  period,
}
