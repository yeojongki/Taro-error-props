import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { FC } from '@tarojs/taro'

interface Props {
  title: string
  renderContent?: JSX.Element | null
}

const Product: FC<Props> = (props) => {
  return (
    <View style={{ padding: '15px', background: 'gray' }}>
      <View>{props.title}</View>
      <View>{props.renderContent}</View>
    </View>
  )
}

export default Product
