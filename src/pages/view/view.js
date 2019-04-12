import Taro,{ Component } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import { AtNavBar } from 'taro-ui';
import { inject, observer } from '@tarojs/mobx'
import StudyList from '../../components/studyList';
import NavBar from '../../components/navBar'
import './view.less'

@inject('counterViewList')
@observer
export default class Collect extends Component{

    state = {
        list: []
    }

    constructor(props){
        super(props);
        const { counterViewList: { viewList } } = this.props;
        this.setState({
            list: viewList.slice(0)
        })
    }

    render(){
        const { list } = this.state
        console.log(list);
        return(
            <View>
                <NavBar navTitle='个人浏览' />
                {
                    list.length > 0 ? <StudyList list={ list } /> : <View className='viewWord'><Text>暂未浏览任何内容</Text></View>
                }
                
            </View>
        )
    }
}