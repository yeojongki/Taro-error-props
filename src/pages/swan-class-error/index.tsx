import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

export interface ICategory {
  category: string
  subCategories?: ICategory[]
}

interface IProps {}

class Index extends Component<IProps> {
  // 必须添加全局样式才能生效
  static options = {
    addGlobalClass: true,
  }

  render() {
    return (
      <View>
        <View className="global-blue">我应该是蓝色</View>
      </View>
    )
  }
}

export default Index
