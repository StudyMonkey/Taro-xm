import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtButton>按钮测试</AtButton>
      </View>
    )
  }
}
