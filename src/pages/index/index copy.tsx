import Taro, { Component } from '@tarojs/taro'
import { View, Button, Image } from '@tarojs/components'
import './index.scss'
import Popup from '@/components/Popup'
import SubCategory from '@/components/SubCategory'

interface ICategory {
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
    categoryDtos: [],
    // categoryDtos: [
    //   {
    //     category: '父主粮',
    //     subCategories: [
    //       { category: '子主粮1' },
    //       {
    //         category: '子主粮2',
    //       },
    //       {
    //         category: '子主粮3',
    //       },
    //     ],
    //   },
    //   {
    //     category: '父零食',
    //     subCategories: [
    //       {
    //         category: '子零食1',
    //       },
    //       {
    //         category: '子零食2',
    //       },
    //     ],
    //   },
    // ],
    subCategories: [],
  }

  // componentWillMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       categoryDtos: [
  //         {
  //           category: '父主粮',
  //           subCategories: [
  //             { category: '子主粮1' },
  //             {
  //               category: '子主粮2',
  //             },
  //             {
  //               category: '子主粮3',
  //             },
  //           ],
  //         },
  //         {
  //           category: '父零食',
  //           subCategories: [
  //             {
  //               category: '子零食1',
  //             },
  //             {
  //               category: '子零食2',
  //             },
  //           ],
  //         },
  //       ],
  //     })
  //   }, 1000)
  // }

  onClickCatItem = (item: ICategory) => {
    // if (!this.state.showAllCats) {
    this.setState(
      {
        subCategories: item.subCategories!,
      },
      () => {
        console.log('设置当前分类', this.state.subCategories)
        this.toggleShowAllCats()
      },
    )
    // }
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
        {/* {categoryDtos.map(item => (
          <View className="menu-item" key="category">
            <View className="menu-item_top flex">
              <View className="menu-item_title">{item.category}</View>
              <Button onClick={() => this.onClickCatItem(item)}>
                设为当前分类
              </Button>
            </View>
            <View className="menu-item_sub">
              {item.subCategories &&
                item.subCategories.map(sub => (
                  <View key="category">{sub.category}</View>
                ))}
            </View>
          </View>
        ))} */}

        {/* <View style={{ padding: '20px', color: 'purple' }}>
          当前子分类为：
          <SubCategory list={this.state.subCategories}></SubCategory>
        </View> */}
        <Button onClick={this.toggleShowAllCats}>切换显示弹窗</Button>
        <Popup show={this.state.showAllCats} onClose={this.toggleShowAllCats}>
          <SubCategory list={this.state.subCategories}></SubCategory>
          {/* <Image src="https://www.baidu.com/img/bd_logo1.png"></Image> */}
        </Popup>
      </View>
    )
  }
}

export default Index
