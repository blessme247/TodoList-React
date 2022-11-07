import React from 'react'

const BallTriangleSpinner = () => {
  return (
    <BallTriangle
    height={100}
    width={100}
    radius={5}
    color="#4fa94d"
    ariaLabel="ball-triangle-loading"
    wrapperClass={{}}
    wrapperStyle=""
    visible={true}
    style={{textAlign: 'center', marginTop: '5rem'}}
  />
  )
}

export default BallTriangleSpinner