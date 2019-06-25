import axios from 'axios';

const initialState ={
    product_id: 0,
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
const EDIT_WIZARD = 'EDIT_WIZARD';
const EDITED_WIZARD = 'EDITED_WIZARD';

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
export const startEditWizard = (product_id, product_name, description, price, image, designer)=>{
    let data = {product_id, product_name, description, price, image, designer}
    console.log(data)
    return{
        type: EDIT_WIZARD,
        payload: data
    }
}
export const completeEditWizard = (product_id, product_name, description, price, image, designer)=>{
    let data = axios.put(`/api/inventory/${product_id}`, {product_name, description, price, image, designer})
        .then(res => res.data)
    return{
        type: EDITED_WIZARD,
        payload: data
    }
}

function wizardReducer(state= initialState, action){
    console.log(state)
    console.log(action)
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
        case EDIT_WIZARD:
            return {...state, product_id: action.payload.product_id,
                product_name: action.payload.product_name,
                description: action.payload.description,
                price: action.payload.price,
                image: action.payload.image,
                designer:action.payload.designer}
        case EDITED_WIZARD:
        return {...state, product_id: 0,
        product_name: "",
        description: "",
        price: 0,
        image: "",
        designer: ''}
        default: return state;
    }
}

export default wizardReducer