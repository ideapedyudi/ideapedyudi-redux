import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import postAction from '../store/actions/postAction';
import userAction from '../store/actions/userAction';

function User() {
    const posts = useSelector((state) => state.posts)
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAction())
    }, [])

    const loadPost = () => {
        dispatch(postAction())
    }
    return (
        <div>
            <div>User</div>
            {users.map(user => {
                return <li>
                    {user.name}
                </li>
            })}

            <div>Post</div>
            <button onClick={() => loadPost()}>Post List</button>
            {posts.map(post => {
                return <li>
                    {post.title}
                </li>
            })}
        </div>
    )
}

export default User