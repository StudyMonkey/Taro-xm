import Taro,{ Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { getNode } from '../../utils/utils'

export default class Detail extends Component{

    componentWillMount(){
        const id = this.$router.params.id;
        console.log(id);
        getNode('topic/'+id).then( res => {
            console.log(res);
        })
    }

    render(){
        return(
            <View>
                detail
            </View>
        )
    }
}