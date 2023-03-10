import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Text1 from 'components/Text1'
import Text2 from 'components/Text2'
import { useState } from 'react'

// viết chung 1 file. khi set state các thành phần sẽ bị ảnh hưởng dẫn đến re-render
const Demo1 = () => {
  const [openText, setOpenText] = useState<Boolean>(false)
  return (
    <>
      <Typography>{openText ? `Bị Render Toàn Bộ File` : `Viết chung 1 file`}</Typography>
      <br />
      <Button variant='contained' onClick={() => setOpenText((prevState) => !prevState)}>
        Kiểm tra: Bị Re-Render
      </Button>
      <br />
      <Text1 />
      <br />
      <Text2 />
    </>
  )
}

export default Demo1
