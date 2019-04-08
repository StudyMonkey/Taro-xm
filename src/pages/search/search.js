import Taro,{ Component } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import { AtSearchBar,AtNavBar } from 'taro-ui'
import { get, getApi } from '../../utils/utils'
import Poetry from '../../components/poetry'
import Weather from '../../components/weather'

export default class Search extends Component{

    state = {
        value: '',
        location: '',
        list: [],
        type: ''
    }

    componentDidMount(){
        console.log( this.$router.params.type )
        this.setState({
            type: this.$router.params.type
        })
    }



    handleChange = (value) => {
        this.setState({
            value
        }, () => {
            if ( !this.state.value ){
                this.setState({
                    location: '',
                    list: ''
                })
            }
        })
    }

    onActionClick = () => {
        if ( this.state.value ) {
            this.setState({
                location: this.state.value
            })
            if ( this.state.type === 1 ) {
                get('weatherApi', { city: this.state.value }).then( res => {
                    console.log(res.data.data.forecast);
                    this.setState({
                        list: res.data.data.forecast
                    })
                })
            } else {
                getApi('searchAuthors', { name: this.state.value }).then( res => {
                    const { data: { result } } = res
                    console.log(result);
                    this.setState({
                        list: result
                    })
                })                
            }

        }
    }

    handleClick = () => {
        console.log('返回')
        Taro.navigateBack(-1);
    }

    render(){
        const { value, list, location, type } = this.state
        console.log(typeof type, type);
        const content = (
            <AtSearchBar value={ value } onChange={ this.handleChange } onActionClick={this.onActionClick} />
        )
        return(
            <View>
                <AtNavBar
                    onClickLeftIcon={this.handleClick}
                    color='#000'
                    title='NavBar导航栏'
                    leftIconType='chevron-left'
                />             
                { type === '1' ?                 
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
                    </View> :             
                    <View>
                        { 
                            list.length > 0 ? 
                            list.map( (item, index) => {
                                return(
                                    <View key={ index }>
                                        <View className='at-article__h1'>
                                        { item.name }
                                        </View>
                                        <View className='at-article__p'>
                                            { item.desc }
                                        </View>
                                    </View>
                                )
                            }) : <View> 暂无此人相关内容 </View>
                        }
                    </View> 
                }




            </View>
        )
    }
}