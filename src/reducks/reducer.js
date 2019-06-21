import axios from 'axios';

const initialState ={
    product_name: "",
    description: "",
    price: 0,
    image: "",
    designer: '',
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
const HANDLE_NAME = 'HANDLE_NAME';
const HANDLE_DESCRIPTION = 'HANDLE_DESCRIPTION';
const HANDLE_PRICE = 'HANDLE_PRICE';
const HANDLE_IMAGE = 'HANDLE_IMAGE';
const HANDLE_DESIGNER = 'HANDLE_DESIGNER';
const COMPLETE_WIZARD = 'COMPLETE_WIZARD';
const LOGOUT = 'LOGOUT';
const SET_USERNAME = 'SET_USERNAME';
const SET_ADMIN = 'SET_ADMIN'
const LOGIN ='LOGIN';

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
export const handleName = (product_name)=>{
    return{
        type:HANDLE_NAME,
        payload: product_name
    }
}
export const handleDescription = (description)=>{
    return{
        type:HANDLE_DESCRIPTION,
        payload: description
    }
}
export const handlePrice = (price)=>{
    return{
        type:HANDLE_PRICE,
        payload: price
    }
}
export const handleImage = (image)=>{
    return{
        type:HANDLE_IMAGE,
        payload: image
    }
}
export const handleDesigner = (designer)=>{
    return{
        type:HANDLE_DESIGNER,
        payload: designer
    }
}
export const completeWizard = (product_name, description, price, image, designer)=>{
    let data = axios.post('/api/new_item', {product_name, description, price, image, designer})
        .then(res => res.data)
    return{
        type: COMPLETE_WIZARD,
        payload: data
    }
}
export const getUser = ()=>{
    return{
        type: GET_USER,
        payload: axios.get('/auth/user').catch(()=>console.log('error getting user'))
    }
}
export const addToCart =(name, description, price, image)=>{
    let item = {name: name, description: description, price: price, image: image}
    // console.log(item)
    return{
        type: ADD_TO_CART,
        payload: item
    }
}
export const removeFromCart =(index)=>{
    return{
        type: REMOVE_FROM_CART,
        payload: index
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

function reducer(state= initialState, action){
    console.log(state)
    // console.log(action)
    switch(action.type){
        case HANDLE_NAME:
            return {...state, product_name:action.payload};
        case HANDLE_DESCRIPTION:
            return {...state, description:action.payload};
        case HANDLE_PRICE:
            return {...state, price:action.payload};
        case HANDLE_IMAGE:
            return {...state, image: action.payload};
        case HANDLE_DESIGNER:
            return {...state, designer: action.payload};
        case COMPLETE_WIZARD:
            return {...state, product_name: "",
            description: "",
            price: 0,
            image: "",
            designer: ''}
        case GET_USER:
            // console.log(action.payload)
            return {...state, user:action.payload.data};
        case ADD_TO_CART:
            return{...state, cart: [...state.cart, action.payload]};
        case REMOVE_FROM_CART:
            let newCart = state.cart
            newCart.splice(action.payload, 1)
            return{...state, cart: newCart}
        case SET_USERNAME:
            return {...state, username: action.payload};
        case SET_ADMIN:
            return {...state, admin: action.payload};
        case `${LOGIN}_PENDING`:
                return {...state, loading: true};
        case `${LOGIN}_FULFILLED`:
            return {...state, user: action.payload.data, loading: false};
        case LOGOUT:
            return {...state, user: {},
            cart: [],
            username: '',
            loggedIn: false,
            admin: false,
            userid: ''}
        default: return state;
    }

}

export default reducer