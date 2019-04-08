import Taro, { Component } from '@tarojs/taro'
import { View, Text, Video } from '@tarojs/components'
import { AtTabs,AtTabsPane  } from 'taro-ui'
import { getApi } from '../../utils/utils'
import IndexList from '../../components/indexList'

import './index.less'



export default class Index extends Component {

  state = {
    list: [],
    current: 0
  }

  componentDidMount(){
    getApi('videoCategoryDetails', { id: 28 }).then( res => {
      this.showList(res);
    })
  }

  showList = res => {
    console.log(res);
    const { data: { code, result } } = res;
    let newArr = result.filter( (v) => {
      return v.type === "followCard"
    })
    console.log(newArr);
    if ( code === 200 ) {
      this.setState({
        list: newArr
      })
    }
  }  

  handleClick = (value) => {
    this.setState({
      current: value
    }, () => {
      console.log(this.state.current);
      const { current } = this.state
      let id;
      if ( current === 0 ) {
        id = 28
      } else if ( current === 1 ){
        id = 14
      } else if ( current === 2 ) {
        id = 36
      } else if ( current === 3 ) {
        id = 10
      }
      getApi('videoCategoryDetails', { id }).then( res => {
        this.showList(res);
      })
    })
  }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {

    const { list, current } = this.state
    // 28搞笑 14 广告  36生活  10 动画
    const tabList = [{ title: '热门推荐' }, { title: '广告' }, { title: '生活' }, { title: '动画' }]
    return (
      <View className='indexWrap'>
        <AtTabs current={ current } tabList={tabList} onClick={ this.handleClick }>
          <AtTabsPane 
            current={ current } 
            index={ 0 }
          >
            <IndexList list={ list } />
          </AtTabsPane>
          <AtTabsPane 
            current={ current } 
            index={ 1 }
          >
            <IndexList list={ list } />
          </AtTabsPane>
          <AtTabsPane 
            current={ current } 
            index={ 2 }
          >
            <IndexList list={ list } />
          </AtTabsPane>
          <AtTabsPane 
            current={ current } 
            index={ 3 }
          >
            <IndexList list={ list } />
          </AtTabsPane>
          {/* {
            tabList.map( (item,index) => {
              console.log(index)
              return (
                {       
                  <AtTabsPane 
                    current={ current } 
                    index={ index }
                  >
                    <IndexList list={ list } />
                  </AtTabsPane>
                } 
              )
            })
          } */}

        </AtTabs>      
        
      </View>
    )
  }
}
