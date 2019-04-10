import Taro,{ Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { getNode } from '../../utils/utils'
import Tabs from '../../components/tabs'
import StudyList from '../../components/studyList'

export default class Study extends Component{

    state = {
        nodeList: []
    }

    handleClick = (value) => {
        this.setState({
            current: value
        })
    }

    handleTabsClick = (val) => {
        let tab;
        switch(val) {
            case 0: 
                tab = 'all';
                break;
            case 1:
                tab = 'good';
                break;
            case 2: 
                tab = 'share';
                break;
            case 3: 
                tab = 'ask';
                break;
            case 4:
                tab = 'job';
                break;
        }
        this.getData('topics', { page: 1, tab });        
    }

    getData = (url, obj) => {
        getNode(url, obj).then( res => {
            const { data: { data } } = res
            this.setState({
                nodeList: data
            })
        })
    }

    componentDidMount(){
        this.getData('topics', { page: 1 });
    }

    render(){
        const { nodeList } = this.state
        const tabList = [{ title: '全部' }, { title: '精华' }, { title: '分享' }, { title: '问答' }, { title: '招聘' }]
        return(
            <View>
                <Tabs tabList={ tabList } ontabsClick={ this.handleTabsClick } />
                <StudyList list={ nodeList } />
            </View>
        )
    }
}