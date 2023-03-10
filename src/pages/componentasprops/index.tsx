import React from 'react'
import PropTypes from 'prop-types'
import Demo1 from './demo1'
import Demo2 from './demo2'

const ComponentAsProps = () => {
  return (
    <div>
      <Demo1 />
      <br />
      <hr style={{ borderTop: `10px solid  red` }} />
      <br />
      <Demo2 />
    </div>
  )
}

export default ComponentAsProps
