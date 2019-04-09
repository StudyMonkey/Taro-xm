import Taro,{ Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { getNode } from '../../utils/utils'

export default class Detail extends Component{

    state = {
        detail: ''
    }

    componentWillMount(){
        const id = this.$router.params.id;
        console.log(id);
        getNode('topic/'+id).then( res => {
            console.log(res);
            this.setState({
                detail: res.data.data
            })
        })
    }

    render(){
        const { detail } = this.state; 
        return(
            <View>
                <View className='acticle_h1'>{ detail.title }</View>
                
            </View>
        )
    }
}