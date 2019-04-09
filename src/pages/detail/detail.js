import Taro,{ Component } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import { getNode,computedTime } from '../../utils/utils'
import { AtList, AtListItem } from 'taro-ui'
import './detail.less'

export default class Detail extends Component{

    state = {
        detail: ''
    }

    componentDidMount(){
        const id = this.$router.params.id;
        console.log(id);
        getNode('topic/'+id).then( res => {
            console.log(res);
            this.setState({
                detail: res.data.data
            })
        })
    }

    // 根据tab字段，变成汉子
    changeType = (type) => {
        switch(type){
            case 'good':
                return '精华';
                break;
            case 'share':
                return '分享'
                break;
            case 'ask':
                return '问答'
                break;
            case 'job':
                return '招聘'
                break;
        }
    }

    render(){
        const { detail } = this.state; 
        // const len = detail.replies.length
        // console.log(len);
        return(
            <View>
                <View className='acticle_h3'>{ detail.title }</View>
                <View className='basicInfoWrap'>
                    <View className='at-article__info'>发布于{ computedTime(detail.create_at) }</View>
                    <View className='at-article__info'>{ detail.visit_count }次浏览 </View>
                    <View className='at-article__info'>来自 { this.changeType(detail.tab) }</View>
                </View>
                <View className='divideLine'></View>
                <View className='detailHtmlWrap' dangerouslySetInnerHTML={{ __html: detail.content}}></View>
                <Text>{ 0 }条回复</Text>
                {/* <AtList>
                    {
                        detail.replies.map( (v,ind) => {
                            return (
                                <AtListItem
                                    thumb={ v.author.avatar_url }
                                    title={ v.author.loginname + ind+1 }
                                    note={ v.content }
                                />
                            )
                        })
                    }
                </AtList> */}

            </View>
        )
    }
}