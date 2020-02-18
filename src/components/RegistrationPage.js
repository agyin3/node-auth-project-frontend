import React from 'react'
import RegisterForm from './RegisterForm.js'
import Header from './Header.js'
import { MainPageContainer } from '../styled-components.js'

const RegistrationPage = () => {
    return( 
        <>
            <Header />
            <MainPageContainer>
                <RegisterForm />
            </MainPageContainer>
        </>
    )
}

export default RegistrationPage