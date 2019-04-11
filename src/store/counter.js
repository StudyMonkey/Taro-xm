import { observable } from 'mobx'

const counterStore = observable({
    counter: 0,
    increment() {
        this.counter++
    },
    decrement() {
        this.counter--
    },
    incrementAsync() {
        setTimeout( () => {
            this.counter++
        }, 2000)
    }
})

export default counterStore;