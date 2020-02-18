import React, { useContext, useEffect } from 'react'
import { MainPageContainer } from '../styled-components.js'
import { Card } from 'semantic-ui-react'
import { store } from '../reducers'
import axios from 'axios'
import Header from './Header'

const Friends = () => {
    const state = useContext(store)

    useEffect(() => {
        axios.get(`https://api-auth2.herokuapp.com/api/users`)
        .then(friends => {
            console.log(friends)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return(
        <>
            <Header />
            <MainPageContainer>
                <Card.Group>
                
                </Card.Group>
            </MainPageContainer>
        </>
    )
}

export default Friends