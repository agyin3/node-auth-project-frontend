import React, { useReducer, createContext } from 'react'

const initialState = {
    user: {},
    friends: [],
    formComplete: true,
    isLoading: false
}

const store = createContext(initialState)

const { Provider } = store

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'LOGIN_START':
            case 'LOGOUT_START':
                return{
                    ...state,
                    isLoading: true,
                    formComplete: true
                }
                case 'LOGIN_SUCCESS':
                    return{
                        ...state,
                        isLoading: false,
                        user: {...action.payload}
                    }
                case 'LOGOUT_SUCCESS':
                    return {
                        ...initialState
                    }
                case 'LOGIN_FAIL':
                    return{
                        ...state,
                        isLoading: false
                    }
            case 'PASSWORD_FAIL':
                return{
                    ...state,
                    formComplete: false
                }
            default:
                return state
        }
    }, initialState)

    return <Provider value={{state, dispatch}}>{children}</Provider>
}

export {store, StateProvider}