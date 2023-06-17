import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { removeUser } from '../features/users/usersSlice'
export default function UserTable({ users }) {
    const dispatch = useDispatch()
    function handleDelete(id) {
        dispatch(removeUser(id))
    }
    return (
        <div className='w-11/12 mx-auto overflow-x-auto '>
            <table className='w-full'>
                <thead >
                    <tr >
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map(user => (
                        <tr className='border-y-2 border-b-0 border-collapse text-sky-200' key={user.id}>
                            <td className='text-center border-collapse '>{user.id}</td>
                            <td className='text-center border-collapse '>{user.name}</td>
                            <td className='text-center border-collapse '>{user.email}</td>
                            <td className='text-center border-collapse '>{user.phone}</td>
                            <td><FaTrashAlt className='fill-red-700 cursor-pointer transition-transform hover:scale-150' onClick={() => handleDelete(user.id)} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
