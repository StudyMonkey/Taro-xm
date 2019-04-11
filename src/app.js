import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'
import 'taro-ui/dist/style/index.scss'
import counterViewList from './store/viewList'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const store = {
  counterViewList
}

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/study/study',
      'pages/person/person',
      'pages/regist/regist',
      'pages/login/login',
      'pages/search/search',
      'pages/collect/collect',
      'pages/view/view',
      'pages/detail/detail'
      
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./images/index.png",
        selectedIconPath: "./images/index-active.png"
      },{
        pagePath: "pages/study/study",
        text: "学习",
        iconPath: "./images/study.png",
        selectedIconPath: "./images/study-active.png"
      }, {
        pagePath: "pages/person/person",
        text: "我的",
        iconPath: "./images/me.png",
        selectedIconPath: "./images/me-active.png"
      }],
      color: '#333',
      selectedColor: '#333',
      backgroundColor: '#fff',
      borderStyle: '#ccc'
    }  
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={ store }>
        <Index />
      </Provider>
      
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
