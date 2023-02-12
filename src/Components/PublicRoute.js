import React from 'react'
import Navbar from './Navbar'
function PublicRoute({children}) {
  return (
    <div>
        <Navbar/>{children}
    </div>
    
  )
}

export default PublicRoute