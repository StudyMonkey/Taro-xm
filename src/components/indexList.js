import Taro,{ Component } from '@tarojs/taro'
import { View,Video } from '@tarojs/components'
import { AtCard } from 'taro-ui'

export default class IndexList extends Component{

    render(){
        console.log(this.props.list);
        return(
            <View>
                {
                    this.props.list.map( (item,index) => {
                        const { data: { content: { data } } } = item
                        return (
                        <AtCard 
                            className='indexCardList'
                            title={ data.title }  
                        >
                            <Video src={ data.playUrl } controls></Video>
                            <View className='descriptionWrap'>{ data.description }</View>
                        </AtCard>
                        )
                    })
                }                
            </View>
        )
    }
}