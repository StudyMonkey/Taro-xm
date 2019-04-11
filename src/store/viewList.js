import { observable } from 'mobx'

const counterViewList = observable({
    viewList: [] || localStorage.getItem('viewList'),
    addViewList(list) {
        const listIndex = this.viewList.findIndex( v => v.id === list.id);
        if ( listIndex <= -1 ) {
            this.viewList.push(list);
            console.log(this.viewList);
            localStorage.setItem('viewList', this.viewList);
        }
    },
    clearViewList(){
        this.viewList = []
    }
})

export default counterViewList;