import React, { useState, FC, ReactElement } from 'react'
import { Box, Button } from '@mui/material'

const Layout = ({ component1, component2 }: { component1: ReactElement; component2: ReactElement }) => {
  const [widthSidebarLG, setWidthSidebarLG] = useState(true)
  return (
    <Box className='container'>
      <Box className='sidebar'>
        <Box sx={{ width: `${widthSidebarLG ? '1200px' : '600px'} ` }}>{component1}</Box>
      </Box>
      <Box className='content'>
        <Button variant='outlined' onClick={() => setWidthSidebarLG((prev) => !prev)}>
          {component2}
        </Button>
      </Box>
    </Box>
  )
}

export default Layout
