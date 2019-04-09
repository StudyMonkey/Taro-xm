import Taro,{ Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs,AtTabsPane } from 'taro-ui'

export default class Tabs extends Component{

    state = {
        current: 0
    }

    handleClick = (value) => {
        this.setState({
            current: value
        }, () => {
            this.props.ontabsClick(this.state.current)
        })
    }    

    render(){
        const { tabList } = this.props;
        const { current } = this.state
        return(
            <View>
                <AtTabs current={ current } tabList={tabList} onClick={ this.handleClick }>
                    {/* <AtTabsPane 
                        current={ current } 
                        index={ 0 }
                    >                      
                    </AtTabsPane>  */}
                </AtTabs>              
            </View>
        )
    }
}