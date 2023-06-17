import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllUsers, getUsersError, getUsersStatus, fetchUsers } from '../features/users/usersSlice'
import { ClipLoader } from 'react-spinners'
import UserTable from './UserTable'

const overrideStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    inset: 0,
    margin: 'auto',
}


export default function () {
    const users = useSelector(selectAllUsers)
    const usersError = useSelector(getUsersError)
    const usersStatus = useSelector(getUsersStatus)
    const dispatch = useDispatch()
    useEffect(() => {
        if (usersStatus === 'idle') dispatch(fetchUsers())
    }, [dispatch, usersStatus])
    if (usersStatus === 'loading') return (
        <ClipLoader
            color='#f86c6b'
            loading={usersStatus === 'loading'}
            size={150}
            aria-label="Loading Spinner"
            cssOverride={overrideStyle}
        />
    )
    if (usersStatus === 'failed') return <div>{usersError}</div>
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1>Users</h1>
            <UserTable users={users} />
        </div>
    )
}
