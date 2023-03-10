import { Box } from '@mui/material'
import ComponentAsChildrenProps from 'pages/componentaschildrenprops'
import ComponentAsProps from 'pages/componentasprops'
import MovingStateDown from 'pages/movingstatedown'

function App() {
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems='center'>
      <Box width={'50%'} my={5}>
        <MovingStateDown />
        <hr style={{ borderTop: `10px solid  red` }} />
        <hr style={{ borderTop: `10px solid  red` }} />

        <ComponentAsChildrenProps />
        <hr style={{ borderTop: `10px solid  red` }} />
        <hr style={{ borderTop: `10px solid  red` }} />

        <ComponentAsProps />
      </Box>
    </Box>
  )
}

export default App
