import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='loader' size={50}>
        <ClipLoader color="#404756" />
    </div>
  )
}

export default Loader
