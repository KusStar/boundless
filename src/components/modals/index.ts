import Package from './Package'
import Story from './Story'
import Switcher from './Switcher'
import Event from './Event'

interface SceneMap {
  [key: string]: any
}

const sceneMap: SceneMap = {
  'Package': Package,
  'Story': Story,
  'Event': Event,
  'Switcher': Switcher,
}

interface Props {
  currentModal: Modal
}

const Scenes: React.FC<Props> = ({ currentModal }) => {
  return sceneMap[currentModal] ? sceneMap[currentModal]() : null
}

export default Scenes
