import Taro,{ Component } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import { AtNavBar } from 'taro-ui';
import StudyList from '../../components/studyList'
import './collect.less'

export default class Collect extends Component{

    state = {
        list: []
    }

    handleBackClick = () => {
        Taro.navigateBack(-1);
    }

    render(){
        const { list } = this.state
        return(
            <View>
                <AtNavBar
                    onClickLeftIcon={ this.handleBackClick }
                    color='#000'
                    title='个人收藏'
                    leftIconType='chevron-left'
                />
                {
                    list.length > 0 ? <StudyList list={ list } /> : <View className='noticeWord'><Text>暂未收藏任何内容</Text></View>
                }
                
            </View>
        )
    }
}