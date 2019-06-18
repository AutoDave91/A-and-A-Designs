import axios from 'axios';

const initialState ={
    productName: "",
    description: "",
    price: 0,
    image: "",
    designer: '',
    inventory: []
}

const ADD_STEP_ONE = "ADD_STEP_ONE";
const ADD_STEP_TWO = 'ADD_STEP_TWO';

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

function reducer(state= initialState, action){
    switch(action.type){
        case ADD_STEP_ONE:
        console.log({ ...state, inventory: action.payload });
        return { ...state, inventory: action.payload };
        case ADD_STEP_TWO:
        return { ...state, inventory: action.payload };
        default: return state;
    }

}

export default reducer