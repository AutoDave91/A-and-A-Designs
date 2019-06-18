// import axios from 'axios';

const initialState ={
    username: '',
    password: '',
    loggedIn: false,
    user: []
}

// const UPDATE_USERNAME = 'UPDATE_USERNAME';
// const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
// const REGISTER = 'REGISTER';
// const LOGIN = 'LOGIN';
// const LOGOUT = 'LOGOUT';

// export const updateUsername = (username)=>{
//     return{
//         type:UPDATE_USERNAME,
//         payload: username
//     }
// }
// export const updatePassword = (password)=>{
//     return{
//         type: UPDATE_PASSWORD,
//         payload: password
//     }
// }
// export const register = (username, password)=>{
//     // console.log(username, password)
//     let user = axios
//         .post('/api/register', {username, password})
//         .then(response => response.data)
//         .catch(console.log('Error while registering.'))
//     return{
//         type: REGISTER,
//         payload: user
//     }
// }
// export const login = (username, password)=>{
//     // console.log(username, password)
//     let user = axios
//         .post('/api/login', {username, password})
//         .then(response => response.data)
//         .catch(console.log('Error while LOGINing.'))
//     return{
//         type: LOGIN,
//         payload: user
//     }
// }
// export const logout = ()=>{
//     let user = axios.post('/api/logout')
//     return{
//         type: LOGOUT
//     }
// }

function reducer(state= initialState, action){
    switch(action.type){
        default: return state;
    }
}

export default reducer