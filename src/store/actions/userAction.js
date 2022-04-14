import React from 'react'

function userAction() {
    return (dispatch, getState) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(resp => resp.json()
            ).then(data => {
                dispatch({
                    type: "SET_USERS_DATA",
                    users: data
                })
            })
    }
}

export default userAction