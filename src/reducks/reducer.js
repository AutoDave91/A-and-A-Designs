import axios from 'axios';

const initialState ={
    inventory: [],
    user: {},
    cart: [],
    username: '',
    loggedIn: false,
    admin: false,
    userid: '',
    index: 0,
    loading: false
}

const GET_USER = 'GET_USER';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const SET_USERNAME = 'SET_USERNAME';
const SET_ADMIN = 'SET_ADMIN'
const LOGIN ='LOGIN';
const LOGOUT = 'LOGOUT';

export const getUser = ()=>{
    return{
        type: GET_USER,
        payload: axios.get('/auth/user').catch(()=>console.log('error getting user'))
    }
}
export const addToCart =(product_id, product_name, image, description, size, price, quantity)=>{
    return{
        type: ADD_TO_CART,
        payload: axios.post('/api/cart', {
            product_id: product_id,
            product_name: product_name,
            image: image,
            description: description,
            size: size,
            price: price,
            quantity: quantity
        })
    }
}
export const removeFromCart =(product_id)=>{
    return{
        type: REMOVE_FROM_CART,
        payload: axios.delete(`/api/cart/${product_id}`)
    } 
}
export const setUsername =(username)=>{
    return{
        type: SET_USERNAME,
        payload: username
    }
}
export const setAdmin =(admin)=>{
    return{
        type: SET_ADMIN,
        payload: admin
    }
}
export const login = (username, password)=>{
    return{
        type:LOGIN,
        payload: axios.post('/auth/login', {username, password})
    }
}
export const logout = ()=>{
    let data = axios.get('/auth/logout')
    return{
        type: LOGOUT,
        payload: data
    }
}

function reducer(state= initialState, action){
    console.log(action)
    switch(action.type){
        case `${GET_USER}_PENDING`:
            return {...state, loading: true};
        case `${GET_USER}`:
            return {...state, user:action.payload.data, loading: false};
        case `${ADD_TO_CART}_PENDING`:
            return {...state, loading: true}
        case `${ADD_TO_CART}_FULFILLED`:
            return {...state, cart: action.payload.data, loading: false}
        case `${REMOVE_FROM_CART}_PENDING`:
            return{...state, loading:true}
        case `${REMOVE_FROM_CART}_FULFILLED`:
                console.log('payload.data', action.payload.data)
                console.log('user', state.user)
            return{...state, user: action.payload.data, loading:false}
        case `${SET_USERNAME}_FULFILLED`:
            return {...state, username: action.payload};
        case `${SET_ADMIN}_FULFILLED`:
            return {...state, admin: action.payload};
        case `${LOGIN}_PENDING`:
            return {...state, loading: true};
        case `${LOGIN}_FULFILLED`:
            return {...state, user: action.payload.data, loading: false};
        case `${LOGOUT}_FULFILLED`:
            return {...state, user: action.payload.data,
            cart: [],
            username: '',
            loggedIn: false,
            admin: false,
            userid: ''}
        default: return state;
    }

}

export default reducer