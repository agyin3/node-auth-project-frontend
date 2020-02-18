import React from 'react'
import LoginForm from './LoginForm.js'
import Header from './Header.js'
import { MainPageContainer } from '../styled-components.js'

const LoginPage = () => {
    return( 
        <>
            <Header />
            <MainPageContainer>
                <LoginForm />
            </MainPageContainer>
        </>
    )
}

export default LoginPage