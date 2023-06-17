import { useEffect, useState } from 'react'
import ListUser from './components/ListUser'
import AddUser from './components/AddUser'
import { useSelector, useDispatch } from 'react-redux'
import { getUserCount, setUsers } from './features/users/usersSlice'
function App() {

  const userCount = useSelector(getUserCount)
  return (
    <div className='min-h-screen flex flex-col justify-center text-xl'>
      <div className="relative">
        <ListUser />
      </div>
      <div>
        <h1 className='text-center text-2xl font-bold text-gray-700'>Total Users: {userCount}</h1>
      </div>
      <AddUser />
    </div>
  )
}

export default App
