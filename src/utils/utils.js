import Taro from '@tarojs/taro'

// 豆瓣api
const apikey = '0df993c66c0c636e29ecbb5344252a4a'

const url = 'https://www.apiopen.top/';

const douUrl = 'https://api.apiopen.top/'

const cnodeApi = 'https://cnodejs.org/api/v1/'

export function get( uri, data){
    return new Promise( (resolve, reject) => {
        Taro.showLoading({
            title: '加载中...'
        })
        Taro.request({
            url: url + uri,
            data,
            success(res){
                return resolve(res);
                
            },
            error(err){
                return reject(err)
            },
            complete(){
                Taro.hideLoading()
            }
        })
        
    })
}

export function getApi( uri, data){
    return new Promise( (resolve, reject) => {
        Taro.showLoading({
            title: '加载中...'
        })        
        Taro.request({
            url: douUrl + uri,
            data,
            success(res){
                return resolve(res)
            },
            error(err){
                return reject(err)
            },
            complete(){
                Taro.hideLoading()
            }
        })
    })
}

export function getNode( uri, data){
    return new Promise( (resolve, reject) => {
        Taro.showLoading({
            title: '加载中...'
        })
        Taro.request({
            url: cnodeApi + uri,
            data,
            success(res){
                return resolve(res);
                
            },
            error(err){
                return reject(err)
            },
            complete(){
                Taro.hideLoading()
            }
        })
        
    })
}

export function getStorage(key){
    let str = Taro.getStorageSync(key);
    if ( !str ) {
        return ''
    }
    return JSON.stringify(str)
}

export function showToast(title){
    Taro.showToast({
        title,
        icon: 'none'
    })
}

// https://www.apiopen.top/createUser?key=00d91e8e0cca2b76f515926a36db68f5&phone=13307496550&passwd=123654
/* 注册接口调用方法
 * 默认需要phone 和 password两个参数
 */

