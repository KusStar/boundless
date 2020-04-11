import resources from './resources'
import { Sound } from '@utils/enums'

const audio = new Audio()
const bgmAudio = new Audio()

const fire = (sound: Sound) => {
  const source = resources[sound]
  if (!source) return

  let times = source.times - 1

  audio.src = source.src
  audio.play()

  audio.onended = () => {
    if (times > 0) {
      times -= 1
      audio.play()
    }
  }
}

const bgmStart = async (retryTimes: number = 0) => {
  const source = resources.bgmKey
  if (!source) return

  bgmAudio.src = source.src
  bgmAudio.loop = true

  try {
    await bgmAudio.play()
  } catch (err) {
    console.log(err)
    if (retryTimes < 5) {
      setTimeout(() => {
        bgmStart(retryTimes + 1)
      }, 1000)
    }
  }
}

const bgmStop = () => {
  bgmAudio.pause()
  bgmAudio.src = ''
}

export default {
  fire,
  bgmStart,
  bgmStop
}
