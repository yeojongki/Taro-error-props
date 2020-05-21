import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { FC } from '@tarojs/taro'

export interface ICategory {
  category: string
  subCategories?: ICategory[]
}

interface Props {
  list: ICategory[]
}

const SubCategory: FC<Props> = ({ list }) => {
  return (
    <View>
      {list.map(item => (
        <View key={item.category} style={{ color: 'red' }}>
          {item.category}
        </View>
      ))}
    </View>
  )
}

SubCategory.defaultProps = {
  list: [],
}

export default SubCategory
