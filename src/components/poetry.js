import Taro,{ Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList,AtListItem } from 'taro-ui'

export default class Poetry extends Component{

    constructor(){
        super();
    }

    render(){
        const { list, location } = this.props;
        console.log(list, location);
        return(
            <View>
                This is Poetry components
            </View>
        )
    }
}