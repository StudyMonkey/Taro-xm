import Taro,{ Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtDivider, AtButton } from 'taro-ui'
import { getNode } from '../../utils/utils'
import { inject,observer } from '@tarojs/mobx'
import Tabs from '../../components/tabs'
import StudyList from '../../components/studyList'

@inject('counterViewList')
@observer
export default class Study extends Component{

    state = {
        isH5: process.env.TARO_ENV === 'h5',
        page: 1,
        tab: 'all',
        more: false,
        nodeList: []
    }

    constructor(props){
        super(props);
    }

    handlePushViewList = (id) => {
        console.log('id', id);
        const { nodeList } = this.state;
        const { counterViewList } = this.props;
        const list = nodeList.filter( v => v.id === id );
        const obj = {...list[0]}
        counterViewList.addViewList(obj);
    }



    handleClick = (value) => {
        this.setState({
            current: value
        })
    }

    handleTabsClick = (val) => {
        let { page } = this.state;
        let tab1;
        switch(val) {
            case 0: 
                tab1 = 'all';
                break;
            case 1:
                tab1 = 'good';
                break;
            case 2: 
                tab1 = 'share';
                break;
            case 3: 
                tab1 = 'ask';
                break;
            case 4:
                tab1 = 'job';
                break;
        }
        page = 1;
        this.getData('topics', { page, tab: tab1 });  
        this.setState({
            tab: tab1,
            page
        })      
    }

    getData = (url, obj) => {
        let { page,nodeList,more } = this.state;
        if ( !more ) {
            getNode(url, obj).then( res => {
                const { data: { data } } = res
                if ( data.length >= 40 ) {
                    if ( page > 1 ) {
                        this.setState({
                            nodeList: nodeList.concat(data)
                        })
                    } else {
                        this.setState({
                            nodeList: data
                        })
                    }
                } else {
                    this.setState({
                        more: true
                    })
                }
    
            })
        }
    }

    componentDidMount(){
        const { page } = this.state
        this.getData('topics', { page });
    }

    loadMore = () => {
        let { page,tab } = this.state;
        this.setState({
            page: page + 1
        }, () => {
            this.getData('topics', { page, tab });
        })         
    }

    onReachBottom(){
        this.loadMore()
    }

    // 处理H5的点击加载更多事件处理
    handleLoadMore = () => {
        this.loadMore()
    }

    render(){
        const { nodeList, more, isH5 } = this.state
        const tabList = [{ title: '全部' }, { title: '精华' }, { title: '分享' }, { title: '问答' }, { title: '招聘' }]
        return(
            <View>
                <Tabs tabList={ tabList } ontabsClick={ this.handleTabsClick } />
                <StudyList onhandlePushView={ this.handlePushViewList } list={ nodeList } />
                {
                    more ?  <AtDivider content='没有更多了' fontColor='#2d8cf0' lineColor='#2d8cf0'/> : 
                    <View>
                        {
                            isH5 ? <AtButton onClick={ this.handleLoadMore }>加载更多</AtButton> : null
                        }
                    </View>
                }
            </View>
        )
    }
}