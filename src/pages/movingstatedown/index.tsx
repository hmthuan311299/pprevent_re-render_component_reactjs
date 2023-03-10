import React from 'react'

import { Box } from '@mui/material'
import Demo1 from './demo1'
import Demo2 from './demo2'

const MovingStateDown = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems='center'>
      <Box width={'80%'} my={5}>
        <Demo1 />
        <br />
        <hr style={{ borderTop: `10px solid  red` }} />
        <br />
        <Demo2 />
      </Box>
    </Box>
  )
}

export default MovingStateDown
