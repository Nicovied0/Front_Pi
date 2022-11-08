import axios from 'axios';
import { BACK_CONECT, GET_ACTIVITIES, GET_COUNTRIES, GET_DETAILS, POST_ACTIVITIES, SEARCH_COUNTRIES, ORDER_BY_NAME, ORDER_BY_POPULATION, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITIES } from '../../Const/Const'


export function getCountries() {
    return async function (dispatch) {
        try {
            let json = await axios.get(BACK_CONECT + '/countries')
            return dispatch({
                type: GET_COUNTRIES,
                payload: json.data
            });
        } catch (error) {
            console.log(error)
            alert('Error, the app is not working. Please try again later.')
        }
    }
}

export function getDetails(id) {
    return async function (dispatch) {
        try {
            let json = await axios.get(BACK_CONECT +'/countries/' + id)
            return dispatch({
                type: GET_DETAILS,
                payload: json.data
            });

        } catch {
            console.log('Error in Details Country')
            alert('Error, the app is not working. Please try again later.')
        }
    }
}

export function getCountriesByName(search) {
    return async function (dispatch) {
        try {
            let json = await axios.get(BACK_CONECT + '/countries?name=' + search)
            return dispatch({
                type: SEARCH_COUNTRIES,
                payload: json.data
            })
        } catch {
            alert(`No country was found that includes "${search}".`)
        }
    }

}

export function orderByName(payload) {
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

export function orderByPopulation(payload) {
    return {
        type: ORDER_BY_POPULATION,
        payload
    }
}

export function filterByContinent(payload) {
    return {
        type: FILTER_BY_CONTINENT,
        payload
    }
}
export function filterByActivity(payload) {
    return {
        type: FILTER_BY_ACTIVITIES,
        payload
    }
}


export function getActivities() {
    return async function (dispatch) {
        try {
            let json = await axios.get(BACK_CONECT + '/activities')
            return dispatch({
                type: GET_ACTIVITIES,
                payload: json.data
            });

        } catch {
            console.log('Error in get Activities')
        }
    }
}

export function postActivities(payload) {
    return async function (dispatch) {
        try {
            await axios.post(BACK_CONECT + '/activities/', payload)
            return dispatch({
                type: POST_ACTIVITIES,
            })

        } catch {
            console.log('Error in post activities')
        }
    }
}
