import { useEffect, useState } from 'react'
import ListUser from './components/ListUser'
import AddUser from './components/AddUser'
import { useSelector, useDispatch } from 'react-redux'
import { setUsers } from './features/users/usersSlice'
function App() {


  return (
    <>
      <ListUser />
      <AddUser />
    </>
  )
}

export default App
