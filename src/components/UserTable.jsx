import React from 'react'

export default function UserTable({ users }) {
    return (
        <div style={{ scrollbarColor: "#dddd" }} className='w-11/12 overflow-x-auto '>
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
                        <tr className='border-4 border-collapse border-t-gray-700' key={user.id}>
                            <td className='text-center border-4 border-collapse border-t-gray-700'>{user.id}</td>
                            <td className='text-center border-4 border-collapse border-t-gray-700'>{user.name}</td>
                            <td className='text-center border-4 border-collapse border-t-gray-700'>{user.email}</td>
                            <td className='text-center border-4 border-collapse border-t-gray-700'>{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
