import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { store } from '../reducers'
import { Form, Card } from 'semantic-ui-react'
import { FormContainer, FormHeading, FormFooter, FormButton } from '../styled-components.js'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const LoginForm = () => {
    const state = useContext(store)
    const history = useHistory()
    const { dispatch } = state
    const [credentials, setCredentials] = useState({username: '', password: ''})
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    const handleSubmit = () => {
            dispatch({type: 'LOGIN_START'})
            axios.post(`https://api-auth2.herokuapp.com/api/auth/login`, {
                username: credentials.username,
                password: credentials.password
            })
                .then(res => {
                    console.log(res)
                    dispatch({type: 'LOGIN_SUCCESS', payload: res.data})
                })
                .then(() => {
                    history.push('/friends')
                })
                .catch(err => {
                    dispatch({type: 'LOGIN_FAIL'})
                    setErrorMessage('Invalid username/password')
                })
    }

    return(
        <FormContainer>
            <Card fluid>
                <Card.Content textAlign='center'>
                    <FormHeading color='#46b3e6'>Login Page</FormHeading>
                    <Form loading={state.state.isLoading} onSubmit={handleSubmit}>
                        <Form.Input 
                            name='username'
                            placeholder='Username'
                            type='text'
                            value={credentials.username}
                            onChange={handleChange}
                            required
                        />
                        <Form.Input
                            name='password'
                            placeholder='Password'
                            type='password'
                            value={credentials.password}
                            onChange={handleChange}
                            required
                        />
                        <p>{errorMessage}</p>
                        <FormButton type='submit'>Submit</FormButton>
                    </Form>
                    <FormFooter>Need an Account | <Link className='login-link' to='/register'>Sign up</Link></FormFooter>
                </Card.Content>
            </Card>
        </FormContainer>
    )
}

export default LoginForm