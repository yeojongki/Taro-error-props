import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

interface IProps {}

class Index extends Component<IProps> {
  config: Config = {
    navigationStyle: 'custom',
  }

  render() {
    return (
      <View>
        <View>
          <View>第一张</View>
          <Image src="https://www.baidu.com/img/pc_cc75653cd975aea6d4ba1f59b3697455.png"></Image>
        </View>
        <View>
          <View>第二张</View>
          <Image src="https://www.baidu.com/img/pc_cc75653cd975aea6d4ba1f59b3697455.png"></Image>
        </View>
        <View>
          <View>第三张</View>
          <Image src="https://www.baidu.com/img/pc_cc75653cd975aea6d4ba1f59b3697455.png"></Image>
        </View>
      </View>
    )
  }
}

export default Index
