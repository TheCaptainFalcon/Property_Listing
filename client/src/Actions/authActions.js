import axios from 'axios';
import { GET_ERRORS } from './types';

export const registerUser = (userData, history) => dispatch => {
    axios.post('http://localhost:5000/users/register', userData)
        .then(res => history.push('/users/login')
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};