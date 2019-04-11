import Taro,{ Component } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import { AtNavBar,AtList,AtListItem } from 'taro-ui';
import { inject, observer } from '@tarojs/mobx'
import { computedTime } from '../../utils/utils'
import StudyList from '../../components/studyList';

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



    handleBackClick = () => {
        Taro.navigateBack(-1);
    }

    render(){
        const { list } = this.state
        console.log(list);
        return(
            <View>
                <AtNavBar
                    onClickLeftIcon={ this.handleBackClick }
                    color='#000'
                    title='个人浏览'
                    leftIconType='chevron-left'
                />
                {
                    list.length > 0 ? <StudyList list={ list } /> : <View className='noticeWord'><Text>暂未收藏任何内容</Text></View>
                }
                
            </View>
        )
    }
}