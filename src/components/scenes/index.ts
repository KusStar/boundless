import { connect } from 'unistore/react'
import { InjectedSystemProps, actions} from '@utils/store/system'

import Package from './Package'
import Switcher from './Switcher'


const sceneMap = [
  Package,
  Switcher
]

const Scenes = (props: InjectedSystemProps) => {
  const { system } = props;
  const { scene } = system;
  return sceneMap[scene.id] ? sceneMap[scene.id]() : null
}

export default connect<{}, {}, {}, InjectedSystemProps>
('system', actions)
(Scenes)
