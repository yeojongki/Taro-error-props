import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './index.scss'
import Product from '@/components/Product'

export interface IProduct {
  title: string
  content: string
  disabled: boolean
}

interface IProps {}

interface IState {
  products: IProduct[]
}

class Index extends Component<IProps, IState> {
  state: IState = {
    products: [
      {
        title: '产品1 - 标题',
        content: '按钮1',
        disabled: true,
      },
      {
        title: '产品2 - 标题',
        content: '按钮2',
        disabled: false,
      },
    ],
  }

  render() {
    return (
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
    )
  }
}

export default Index
