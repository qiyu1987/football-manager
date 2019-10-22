import request from 'superagent'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

const baseUrl = 'https://vast-chamber-04214.herokuapp.com/'
export const login =  (email, password) => (dispatch, getState) => {
    request.post(`${baseUrl}/login`)
    .send({email,password})
    .then(
        response => {
            console.log(response)
            dispatch({
                type:LOGIN_SUCCESS,
                payload: response.body
            })
        }
        
        )
    }
    