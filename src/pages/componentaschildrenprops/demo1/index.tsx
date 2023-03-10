import { useState } from 'react'
import Text1 from 'components/Text1'
import Text2 from 'components/Text2'

const Demo1 = () => {
  const [scrollY, setScrollY] = useState(0)
  return (
    <div
      style={{
        border: '1px solid black',
        width: '600px',
        height: '400px',
        overflow: 'scroll'
      }}
      onScroll={({ currentTarget }) => setScrollY(currentTarget.scrollTop)}
    >
      <Text1 />
      <Text2 />
      <Text1 />
      <Text2 />
      <Text1 />
      <Text2 />
      <Text1 />
      <Text2 />
      <Text1 />
      <Text2 />
      <Text1 />
      <Text2 />
      <Text1 />
      <Text2 />
      <Text1 />
      <Text2 />
      <Text1 />
      <Text2 />
      <Text1 />
      <Text2 />
      <Text1 />
      <Text2 />
      <Text1 />
      <Text2 />
    </div>
  )
}

export default Demo1
