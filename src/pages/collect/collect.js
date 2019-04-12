import Taro,{ Component } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import { AtNavBar } from 'taro-ui';
import { inject, observer } from '@tarojs/mobx'
import StudyList from '../../components/studyList'
import NavBar from '../../components/navBar'
import './collect.less'

@inject('counterCollect')
@observer
export default class Collect extends Component{

    state = {
        list: []
    }

    constructor(props){
        super(props)
        const { counterCollect } = this.props;
        this.setState({
            list: counterCollect.collectList
        })
    }

    handleBackClick = () => {
        Taro.navigateBack(-1);
    }

    render(){
        const { list } = this.state
        return(
            <View>
                <NavBar navTitle='个人收藏' />
                {
                    list.length > 0 ? <StudyList list={ list } /> : <View className='noticeWord'><Text>暂未收藏任何内容</Text></View>
                }
                
            </View>
        )
    }
}