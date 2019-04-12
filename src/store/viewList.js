import Taro from '@tarojs/taro'
import { observable } from 'mobx'

const counterViewList = observable({
    viewList: Taro.getStorageSync('viewList') || [],
    addViewList(list) {
        console.log(this.viewList);
        const listIndex = this.viewList.findIndex( v => v.id === list.id);
        if ( listIndex <= -1 ) {
            this.viewList.push(list);
            console.log(this.viewList);
            Taro.setStorageSync('viewList', this.viewList.toJS());
        }
    },
    clearViewList(){
        Taro.removeStorageSync('viewList');
        this.viewList = []
    }
})

export default counterViewList;