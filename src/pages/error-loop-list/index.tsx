import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import Product from '@/components/Product'

export interface IProduct {
  title: string
  content: string
  disabled: boolean
}

interface IProps {}

interface IState {
  globalDisabled: boolean
  products: IProduct[]
  product3: IProduct
}

class Index extends Component<IProps, IState> {
  state: IState = {
    globalDisabled: true,
    products: [
      {
        title: '产品1标题',
        content: '被禁用',
        disabled: true,
      },
      {
        title: '产品2标题',
        content: '正常',
        disabled: false,
      },
    ],
    product3: {
      title: '产品3标题',
      content: '正常',
      disabled: false,
    },
  }

  getDisabled() {
    return this.state.globalDisabled
  }

  render() {
    return (
      <View>
        <View>
          <View>【数组】disabled 为函数返回值</View>
          {this.state.products.map(item => (
            <Product
              key={item.title}
              title={item.title}
              renderContent={
                <Button disabled={this.getDisabled()}>{item.content}</Button>
              }
            ></Product>
          ))}
        </View>
        <View style={{ marginTop: '30px' }}>
          <View>【数组】disabled 为 item 中的值</View>
          <View>
            {this.state.products.map(item => (
              <Product
                key={item.title}
                title={item.title}
                renderContent={
                  <Button disabled={item.disabled}>{item.content}</Button>
                }
              ></Product>
            ))}
          </View>
        </View>
        <View style={{ marginTop: '30px' }}>
          <View>【item】disabled 为函数返回值</View>
          <View>
            <Product
              key={this.state.product3.title}
              title={this.state.product3.title}
              renderContent={
                <Button disabled={this.getDisabled()}>
                  {this.state.product3.content}
                </Button>
              }
            ></Product>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
