import axios from 'axios';
import { GET_ERRORS } from './types';

export const createListing = (listingData, history) => dispatch => {
    axios.post('http://localhost:5000/listings', listingData)
        .then(res => history.push('/listings'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};