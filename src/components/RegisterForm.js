import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { store } from '../reducers'
import { Form, Card } from 'semantic-ui-react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { FormContainer, FormHeading, FormButton, FormFooter } from '../styled-components'

const RegisterForm = () => {
    const state = useContext(store)
    const history = useHistory()
    const { dispatch } = state
    const [credentials, setCredentials] = useState({username: '', password: '', confirmPassword: ''})
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    const handleSubmit = () => {
        if(credentials.password === credentials.confirmPassword){
            dispatch({type: 'LOGIN_START'})
            axios.post(`https://api-auth2.herokuapp.com/api/auth/register`, {
                username: credentials.username,
                password: credentials.password
            })
                .then(res => {
                    dispatch({type: 'LOGIN_SUCCESS', payload: res})
                })
                .then(() => {
                    history.push('/friends')
                })
                .catch(err => {
                    dispatch({type: 'LOGIN_FAIL'})
                    setErrorMessage('Username already taken, please try again')
                })
        }else{
            dispatch({type: 'PASSWORD_FAIL'})
        }
    }

    return(
        <FormContainer>
            <Card fluid>
                <Card.Content textAlign='center'>
                <FormHeading color='#46b3e6'>Create Account</FormHeading>
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
                        <Form.Input
                            name='confirmPassword'
                            placeholder='Confirm Password'
                            type='password'
                            value={credentials.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <p>{errorMessage}</p>
                        {!state.state.formComplete && <p>Passwords must match</p>}
                        <FormButton type='submit'>Submit</FormButton>
                    </Form>
                    <FormFooter>Already have an account | <Link className='login-link' to='/login'>Login</Link></FormFooter>
                </Card.Content>
            </Card>
        </FormContainer>
    )
}

export default RegisterForm