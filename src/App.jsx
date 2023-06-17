import { useEffect, useState } from 'react'
import ListUser from './components/ListUser'
import AddUser from './components/AddUser'
import { useSelector, useDispatch } from 'react-redux'
import { setUsers } from './features/users/usersSlice'
function App() {


  return (
    <div className=' min-h-screen relative'>
      <ListUser />
      <AddUser />
    </div>
  )
}

export default App
