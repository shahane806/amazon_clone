import React from 'react'
import { useStateValue } from './StateProvider'

const Orders = () => {
   const [{recentOrder},dispatch] = useStateValue();
   console.log(recentOrder)
    return (
    <>
      
    </>
  )
}

export default Orders
