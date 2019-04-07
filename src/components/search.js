import Taro,{ Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'

export default class Search extends Component{

    state = {
        value: ''
    }

    handleChange = (value) => {
        this.setState({
            value
        })
    }

    render(){
        return(
            <View>
                <AtSearchBar 
                    value={ this.state.value }
                    onChange={ this.handleChange }
                />
            </View>
        )
    }
}