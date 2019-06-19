import axios from 'axios';

const initialState ={
    productName: "",
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

export const addStep1 = (productName, description, price)=>{
    let data = axios.post('/api/add/step1', {productName, description, price})
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
        case ADD_STEP_ONE:
            // console.log({ ...state, inventory: action.payload });
            return { ...state, inventory: action.payload };
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