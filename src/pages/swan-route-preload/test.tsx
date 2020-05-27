import Taro, { Component } from '@tarojs/taro'
import { Button } from '@tarojs/components'
import './index.scss'

interface IProps {}

class Index extends Component<IProps> {
  onClick = () => {
    this.$preload('preload-key', 'preload data')
    Taro.navigateTo({
      url: '/pages/swan-route-preload/index',
    })
  }

  render() {
    return <Button onClick={this.onClick}>点击跳转</Button>
  }
}

export default Index
