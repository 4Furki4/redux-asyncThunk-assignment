import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllUsers, getUsersError, getUsersStatus, fetchUsers } from '../features/users/usersSlice'



export default function () {
    const users = useSelector(selectAllUsers)
    const usersError = useSelector(getUsersError)
    const usersStatus = useSelector(getUsersStatus)
    const dispatch = useDispatch()
    useEffect(() => {
        if (usersStatus === 'idle') dispatch(fetchUsers())
    }, [dispatch, usersStatus])
    if (usersStatus === 'loading') return <div>Loading...</div>
    if (usersStatus === 'failed') return <div>{usersError}</div>
    return (
        <div>
            <h1>List User</h1>
            <ul>
                {users?.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}
