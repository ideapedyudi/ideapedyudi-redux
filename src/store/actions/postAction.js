import React from 'react'

function postAction() {
    return (dispatch, getState) => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(resp => resp.json()
            ).then(data => {
                dispatch({
                    type: "SET_POST_DATA",
                    posts: data
                })
            })
    }
}

export default postAction