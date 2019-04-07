import Taro,{ Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { getStorage,get } from '../../utils/utils'
import './person.less'
import { AtButton } from 'taro-ui';

export default class Person extends Component {

    constructor(){
        super();
        this.state = {
            person: getStorage('person')
        }
    }

    handleLogout = () => {
        Taro.removeStorageSync('person');
        Taro.redirectTo({
            url: '/pages/login/login'
        })
    }

    searchWeather = () => {
        Taro.navigateTo({
            url: '/pages/search/search'
        })
    }

    render(){
        return(
            <View>
                <View className='imagePersonWrap'>
                    <Image className='bgImage' src='' alt='底部图片' />
                    <View className='personCon'>

                    </View>
                    <AtButton
                        onClick={ this.searchWeather }
                    >
                        查询天气
                    </AtButton>
                    { 
                        this.state.person ?                 
                        <AtButton 
                            onClick={ this.handleLogout } 
                            type='danger' 
                            className='logoutBtn'
                        >退出登录</AtButton> : 
                        <AtButton 
                            onClick={ this.handleLogin } 
                            type='primary' 
                            className='logoutBtn'
                        >登录</AtButton>                        
                     }

                </View>
            </View>
        )
    }
}