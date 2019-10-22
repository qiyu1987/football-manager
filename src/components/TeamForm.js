import React from 'react'

function Teamform(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <label>team name</label>
            <input type='text' name='name'
                onChange={props.onChange}
            ></input>
            <br></br>
            <input type='submit'></input>
        </form>
    )
}
export default Teamform