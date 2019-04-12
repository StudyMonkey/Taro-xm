import Taro from '@tarojs/taro'
import { observable } from 'mobx'
import { showToast } from '../utils/utils'

const counterCollect = observable({
    collectList: Taro.getStorageSync('collectList') || [],
    addCollect(list){
        console.log(this.collectList);
        const colIndex = this.collectList.findIndex( v => v.id === list.id );
        if ( colIndex <= -1 ) {
            this.collectList.push(list);
            Taro.setStorageSync('collectList', this.collectList.toJS())
            showToast('收藏成功');
        }
    },
    deleteCollect(list) {
        console.log('list', list);
        const colIndex = this.collectList.findIndex( v => v.id === list.id );
        this.collectList.splice(colIndex, 1);
        showToast('取消收藏成功');
        Taro.setStorageSync('collectList', this.collectList.toJS())
    }
})

export default counterCollect;