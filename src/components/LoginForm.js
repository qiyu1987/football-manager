import React from 'react'
function LoginForm(props) {
    //console.log('props of loginform',props)
    return (
        <form onSubmit={props.onSubmit}>
            <label>Email</label>
            <input 
                type='text'
                name='email'
                onChange={props.onChange}
                value={props.values.email}
            ></input>
            <label>Password</label>
            <input 
                type='password'
                name='password'
                onChange={props.onChange}
                value={props.values.password}
            ></input>
            <input
                type='submit'
                value='Log In'
            >
            </input>
            
        </form>
    )
}
export default LoginForm