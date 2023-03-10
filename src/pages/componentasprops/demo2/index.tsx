import Layout from './Layout'
import { Typography } from '@mui/material'
import Text1 from 'components/Text1'

const Demo2 = () => {
  return <Layout component1={<Text1 />} component2={<Typography>Click</Typography>} />
}

export default Demo2
