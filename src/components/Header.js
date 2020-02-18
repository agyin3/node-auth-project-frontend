import React, { useContext } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { HeaderContainer, Navigation } from '../styled-components.js'
import axios from 'axios'
import { store } from '../reducers/index.js'

const Header = () => {
    const {pathname} = useLocation()
    const history = useHistory()
    const { dispatch } = useContext(store)
    const logout = e => {
        e.preventDefault()
        dispatch({type: 'LOGOUT_START'})
        axios.get(`https://api-auth2.herokuapp.com/api/auth/logout`)
            .then(() => {
                dispatch({type: 'LOGOUT_SUCCESS'})
            })
            .then(() => {
                history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }
    return(
        <HeaderContainer color='#232429'>
            <Navigation>
                <Link className='login-link' to='/'>Home</Link>
                {pathname==='/friends' ? 
                    <a className='login-link' onClick={logout}>Logout</a> : 
                <Link 
                className='login-link'
                to={pathname===`/register` ? '/login' : '/register'}
                >
                    {pathname==='/register' ? `Login` : `Register` }
                </Link>
                }
            </Navigation>

        </HeaderContainer>
    )
}

export default Header