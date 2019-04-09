import Taro,{ Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList,AtListItem } from 'taro-ui'
import { computedTime } from '../utils/utils'

export default class StudyList extends Component{

    handleItemClick = (id) => {
        Taro.navigateTo({
            url: '/pages/detail/detail?id='+id
        })
    }

    render(){
        const { list } = this.props
        return(
            <View>
                <AtList>
                    {
                        list.map ( item => {
                            return(
                                <AtListItem
                                    onClick={ () => this.handleItemClick(item.id) }
                                    key={ item.id }
                                    title={ item.title }
                                    extraText={ computedTime(item.create_at) }
                                    thumb={ item.author.avatar_url }
                                />
                            )
                        })
                        
                    }
                </AtList>
            </View>
        )
    }
}