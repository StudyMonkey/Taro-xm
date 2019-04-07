import Taro,{ Component } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import { AtSearchBar,AtList,AtListItem } from 'taro-ui'
import { get } from '../../utils/utils'

export default class Search extends Component{

    state = {
        value: '',
        weatherList: []
    }

    handleChange = (value) => {
        this.setState({
            value
        })
    }

    onActionClick = () => {
        get('weatherApi', { city: this.state.value }).then( res => {
            console.log(res.data.data.forecast);
            this.setState({
                weatherList: res.data.data.forecast
            })
        })
    }

    render(){
        return(
            <View>
                <AtSearchBar 
                    value={ this.state.value }
                    onChange={ this.handleChange }
                    onActionClick={this.onActionClick}
                />
                {
                    this.state.value ? 
                    <View>                                        
                        <AtList>
                            <Text>{ this.state.value }未来5天天气情况如下：</Text> 
                            {
                                this.state.weatherList.map( (item, index) => {
                                    return(
                                        <AtListItem
                                            key={ index }
                                            title={ item.date+'的天气状况' }
                                            note={ item.high + '~' + item.low }
                                        >
        
                                        </AtListItem>
                                    )
        
                                })
                            }
                        </AtList></View> : null
                }

            </View>
        )
    }
}