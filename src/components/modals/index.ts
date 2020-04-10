import Package from './Package'
import Story from './Story'
import Switcher from './Switcher'
import Event from './Event'


const sceneMap = [
  Package,
  Story,
  Event,
  Switcher
]

interface Props {
  system: System
}

const Scenes: React.FC<Props> = ({ system }) => {
  const { scene } = system;
  return sceneMap[scene.id] ? sceneMap[scene.id]() : null
}

export default Scenes
