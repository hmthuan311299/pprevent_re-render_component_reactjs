import React, { useState } from 'react'

const ComponentWithScroll = ({ children }: { children: React.ReactNode }) => {
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
      {children}
    </div>
  )
}

export default ComponentWithScroll
