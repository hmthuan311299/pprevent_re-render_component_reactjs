import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'

const ComponentAsChildrenProps = () => {
  return (
    <>
      <Demo1 />
      <br />
      <hr style={{ borderTop: `10px solid  red` }} />
      <br />
      <Demo2 />
    </>
  )
}

export default ComponentAsChildrenProps
