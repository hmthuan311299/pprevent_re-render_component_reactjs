import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Button } from '@mui/material'
import Text2 from 'components/Text2'
import Text1 from 'components/Text1'

const Demo1 = () => {
  const [widthSidebarLG, setWidthSidebarLG] = useState(true)
  return (
    <Box className='container'>
      <Box className='sidebar'>
        <Box sx={{ width: `${widthSidebarLG ? '1200px' : '600px'} ` }}>
          <Text1 />
        </Box>
      </Box>
      <Box className='content'>
        <Button variant='outlined' onClick={() => setWidthSidebarLG((prev) => !prev)}>
          <Text2 />
        </Button>
      </Box>
    </Box>
  )
}

export default Demo1
