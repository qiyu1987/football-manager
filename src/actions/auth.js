import request from 'superagent'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

const baseUrl = 'http://localhost:4000'
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
    