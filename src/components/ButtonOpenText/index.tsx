import React, { memo, useMemo, useState } from 'react'
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography'

const ButtonOpenText = () => {
  const [openText, setOpenText] = useState<Boolean>(false)

  return (
    <>
      {openText ? `Giúp 2 component bên dưới Không bị Re-Render` : `Kỹ thuật Moving State Down`}
      <br />
      <Button variant='contained' onClick={() => setOpenText((prevState) => !prevState)}>
        Kiểm tra: "Không bị re-render"
      </Button>
    </>
  )
}

export default ButtonOpenText
