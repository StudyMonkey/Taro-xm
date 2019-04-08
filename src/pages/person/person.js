import Taro,{ Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { getStorage } from '../../utils/utils'
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

    handleGoSearch = (n) => {
        console.log(n);
        Taro.navigateTo({
            url: '/pages/search/search?type='+ n
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
                        onClick={ this.handleGoSearch.bind(this, 1) }
                    >
                        查询天气
                    </AtButton>  
                    <AtButton
                        onClick={ this.handleGoSearch.bind(this, 2) }
                    >
                        查询古诗词作者信息
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