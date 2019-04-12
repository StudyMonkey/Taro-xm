import Taro,{ Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { getStorage,showToast } from '../../utils/utils'
import './person.less'
import { AtButton } from 'taro-ui';
import personBg from '../../images/person_bg.jpg'

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

    handleLogin = () => {
        Taro.navigateTo({
            url: '/pages/login/login'
        })
    }

    // 跳转search页面的处理
    handleGoSearch = (n) => {
        console.log(n);
        Taro.navigateTo({
            url: '/pages/search/search?type='+ n
        })
    }

    // 跳转收藏页面的处理
    handleGoCollect = () => {
        Taro.navigateTo({
            url: '/pages/collect/collect'
        })
    }

    // 跳转浏览页面的处理
    handleGoView = () => {
        Taro.navigateTo({
            url: '/pages/view/view'
        })        
    }

    handleClickAbout = () => {
        showToast('努力思考中...')
    }

    render(){
        return(
            <View>
                <View className='imagePersonWrap'>
                    <Image className='bgImage' src={ personBg } alt='底部图片' />
                    <View className='personCon'>

                    </View>
                    {/* <AtButton
                        onClick={ this.handleGoSearch.bind(this, 1) }
                    >
                        查询天气
                    </AtButton>   */}
                    <AtButton
                        onClick={ this.handleGoSearch.bind(this, 2) }
                    >
                        查询古诗词作者信息
                    </AtButton>
                    <AtButton
                        onClick={ this.handleGoView }
                    >
                        最近浏览
                    </AtButton>                    
                    <AtButton
                        onClick={ this.handleGoCollect }
                    >
                        我的收藏
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
                     <AtButton onClick={ this.handleClickAbout }>关于</AtButton>

                </View>
            </View>
        )
    }
}