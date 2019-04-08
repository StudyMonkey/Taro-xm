import Taro,{ Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList,AtListItem } from 'taro-ui'

export default class Search extends Component{

    render(){
        const { list, location } = this.props;
        console.log(list, location);
        return(
            <View>
                <AtList>
                    <Text>{ location }未来5天天气情况如下：</Text> 
                    {
                        list.map( (item, index) => {
                            return(
                                <AtListItem
                                    key={ index }
                                    title={ item.date+'的天气状况' }
                                    note={ item.fengxiang+' '+ item.type+' '+item.high + '~' + item.low }
                                >
                                </AtListItem>
                            )

                        })
                    }
                </AtList>
            </View>
        )
    }
}