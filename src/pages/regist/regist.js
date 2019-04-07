import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtForm,AtInput,AtButton } from 'taro-ui'
import { get, showToast } from '../../utils/utils'
import './regist.less'

export default class Regist extends Component{
    constructor(){
        super();
        this.state = {
            key: '00d91e8e0cca2b76f515926a36db68f5',
            name: '',
            passwd: '',
            phone: ''
        }
    }

    // handleInputChange = (key, val) => {
    //     this.setState({
    //         key: val
    //     })
    // }

    handleUserChange = (val) => {
        this.setState({
            name: val
        })
    }

    handlePassChange = (val) => {
        this.setState({
            passwd: val
        })
    }

    handlePhoneChange = (val) => {
        this.setState({
            phone: val
        })
    }

    handleRegist = () => {
        if ( this.state.name && this.state.passwd && this.state.phone ) {
            console.log(this.state);
            get('createUser', this.state).then( res => {
                console.log(res)
                const { data: { code,msg } } = res;
                if ( code !== 200 ) {
                    showToast(msg)
                } else {
                    showToast('注册成功')
                }
            } );
        } else {
            showToast('注册信息未填写完整')
        }       
    }

    handleGoLogin = () => {
        Taro.navigateTo({
            url: '/pages/login/login'
        })
    }

    render(){
        return(
            <View>
                <AtForm>
                    <AtInput
                        placeholder='请输入手机号码'
                        title='手机号码'
                        type='phone'
                        value={ this.state.phone }
                        onChange={ this.handlePhoneChange }
                    ></AtInput> 
                    <AtInput
                        placeholder='请输入密码'
                        title='密码'
                        type='text'
                        value={ this.state.passwd }
                        onChange={ this.handlePassChange }
                    ></AtInput>  
                    <AtInput
                        placeholder='请输入用户名'
                        title='用户名'
                        type='text'
                        value={ this.state.name }
                        onChange={ this.handleUserChange }
                    ></AtInput>   
                    <AtButton
                        className='registBtn'
                        onClick={ this.handleRegist }
                        type='primary'
                    >注册</AtButton>  
                    <AtButton
                        className='registBtn'
                        onClick={ this.handleGoLogin }
                        type='primary'
                    >已有账号</AtButton>                                                     
                </AtForm>
            </View>
        )
    }
}