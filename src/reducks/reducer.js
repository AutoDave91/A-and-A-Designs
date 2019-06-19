import axios from 'axios';

const initialState ={
    product_name: "",
    description: "",
    price: 0,
    image: "",
    designer: '',
    inventory: [],
    user: {},
    username: '',
    loggedIn: false,
    admin: false,
    userid: ''
}

const ADD_STEP_ONE = "ADD_STEP_ONE";
const ADD_STEP_TWO = 'ADD_STEP_TWO';
const GET_USER = 'GET_USER';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const SET_USERNAME = 'SET_USERNAME';
const HANDLE_NAME = 'HANDLE_NAME';
const HANDLE_DESCRIPTION = 'HANDLE_DESCRIPTION';
const HANDLE_PRICE = 'HANDLE_PRICE';
const HANDLE_IMAGE = 'HANDLE_IMAGE';
const HANDLE_DESIGNER = 'HANDLE_DESIGNER';
const COMPLETE_WIZARD = 'COMPLETE_WIZARD';

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

export const addStep1 = (product_name, description, price)=>{
    let data = axios.post('/api/add/step1', {product_name, description, price})
        .then(res => res.data)
    return{
        type: ADD_STEP_ONE,
        payload: data
    }
}
export const addStep2 = (image, designer)=>{
    let data =axios.post('/api/add/step2', {image, designer})
        .then(res => res.data)
    return{
        type: ADD_STEP_TWO,
        payload: data
    }
}
export const getUser = ()=>{
    return{
        type: GET_USER,
        payload: axios.get('/auth/user').catch(()=>console.log('error getting user'))
    }
}
export const addToCart =(item, price)=>{
    return{
        type: ADD_TO_CART,
        payload: axios.post(`/api/cart/${item}`, {price})
    }
}
export const removeFromCart =(id, price)=>{
    return{
        type: REMOVE_FROM_CART,
        payload: axios.delete(`/api/cart/${id}`, {price})
    }
}
export const setUsername =(username)=>{
    return{
        type: SET_USERNAME,
        payload: username
    }
}

function reducer(state= initialState, action){
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
        case ADD_STEP_TWO:
            return { ...state, inventory: action.payload };
        case GET_USER:
            return {...state, user:action.payload.data};
        case ADD_TO_CART:
            return {...state, user: action.payload.data};
        case REMOVE_FROM_CART:
            return {...state, user: action.payload.data};
        case SET_USERNAME:
            return {...state, username: action.payload};
        default: return state;
    }

}

export default reducer