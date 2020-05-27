import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

interface IProps {}

class Index extends Component<IProps> {
  componentDidMount() {
    console.log('comp onLoad', this.$router.preload)
  }

  componentDidShow() {
    console.log('comp onShow', this.$router.preload)
  }

  render() {
    return <View>{JSON.stringify(this.$router.preload)}</View>
  }
}

export default Index
