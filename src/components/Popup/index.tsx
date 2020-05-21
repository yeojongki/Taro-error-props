import Taro, { FC } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

interface IPopup {
  show: boolean
  onClose: () => void
}

const Popup: FC<IPopup> = props => {
  const { show, onClose } = props

  const onClickOverlay = () => {
    onClose()
  }

  return show ? (
    <View
      className="popup-wrap"
    >
      <View className="overlay" onClick={onClickOverlay}></View>
      <View className="popup">{props.children}</View>
    </View>
  ) : null
}

export default Popup
