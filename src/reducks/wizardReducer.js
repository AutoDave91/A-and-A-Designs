import axios from 'axios';

const initialState ={
    product_name: "",
    description: "",
    price: 0,
    image: "",
    designer: ''
}

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

function wizardReducer(state= initialState, action){
    // console.log(state)
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
        default: return state;
    }
}

export default wizardReducer