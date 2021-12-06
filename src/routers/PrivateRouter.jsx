import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router'
// import { AuthContext } from '../auth/authContext'

const PrivateRouter = ({ children }) => {
  
  const { user } = useContext(AuthContext)
  const { uid } = useSelector(state => state.auth)
  const { pathname, search } = useLocation()

  localStorage.setItem('lastPath', pathname + search)

  return uid
  ? children
  : <Navigate to="/login" />

}

export default PrivateRouter
