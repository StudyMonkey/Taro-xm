import Taro,{ Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtNavBar } from 'taro-ui'

export default class NavBar extends Component{

    state = {
        isH5: process.env.TARO_ENV === 'h5'
    }

    handleBackClick = () => {
        Taro.navigateBack(-1);
    }

    render(){
        const { navTitle } = this.props;
        const { isH5 } = this.state
        return(
            <View>
                {
                    isH5 ? 
                    <AtNavBar 
                        leftIconType='chevron-left'
                        rightFirstIconType='none'
                        color='#000'
                        title={ navTitle }
                        onClickLeftIcon={ this.handleBackClick }
                    /> : null
                }

            </View>
        )
    }
}