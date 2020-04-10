import dayjs from 'dayjs'

export default { 
  state: {
    time: 1579838400000,
    scene: {
      id: -1,
      text: ''
    }
  } as System
}

export const actions = {
  onScene:  ({ system }: State, id: number) => {
    return {
      system: {
        ...system,
        scene: {
          id,
          text: 'Package'
        }
      }
    }
  },
  updateTime: ({ system }: State) => {
    const oldTime = dayjs(system.time)
    const newTime = oldTime.add(1, 'hour')
    return {
      system: {
        ...system,
        time: newTime.unix() * 1000
      }
    }
  }
}

export interface InjectedSystemProps {
  system: System,
  onScene: (id: number) => void
  updateTime: () => void
}
