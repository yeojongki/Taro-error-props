import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './index.scss'
import Popup from '@/components/Popup'
import SubCategory from '@/components/SubCategory'

export interface ICategory {
  category: string
  subCategories?: ICategory[]
}

interface IProps {}

interface IState {
  categoryDtos: ICategory[]
  showAllCats: boolean
  subCategories: ICategory[]
}

class Index extends Component<IProps, IState> {
  state: IState = {
    showAllCats: false,
    categoryDtos: [
      {
        category: '父主粮',
        subCategories: [
          { category: '子主粮1' },
          {
            category: '子主粮2',
          },
          {
            category: '子主粮3',
          },
        ],
      },
      {
        category: '父零食',
        subCategories: [
          {
            category: '子零食1',
          },
          {
            category: '子零食2',
          },
        ],
      },
    ],
    subCategories: [],
  }

  onClickCatItem = (subCategories: ICategory['subCategories']) => {
    if (subCategories) {
      this.setState(
        {
          subCategories,
        },
        () => {
          console.log('设置当前分类', this.state.subCategories)
          this.toggleShowAllCats()
        },
      )
    }
  }

  toggleShowAllCats = () => {
    this.setState({
      showAllCats: !this.state.showAllCats,
    })
  }

  render() {
    const { categoryDtos } = this.state

    return (
      <View className="product-list">
        <View>
          {categoryDtos.map(item => (
            <View className="menu-item" key={item.category}>
              <View className="menu-item_top flex">
                <View className="menu-item_title">{item.category}</View>
                <Button onClick={() => this.onClickCatItem(item.subCategories)}>
                  设为当前分类
                </Button>
              </View>
              <View className="menu-item_sub">
                {item.subCategories &&
                  item.subCategories.map(sub => (
                    <View key={sub.category}>{sub.category}</View>
                  ))}
              </View>
            </View>
          ))}
        </View>

        {/* <View style={{ padding: '20px', color: 'purple' }}>
          当前子分类为：
          <SubCategory list={this.state.subCategories}></SubCategory>
        </View> */}

        {this.state.showAllCats && <Popup show={this.state.showAllCats} onClose={this.toggleShowAllCats}>
          <SubCategory list={this.state.subCategories}></SubCategory>
        </Popup>}
      </View>
    )
  }
}

export default Index
