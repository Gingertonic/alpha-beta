import React, { useEffect, useState, memo } from 'react'
import CraftElement from './CraftElement'

const styles = {
  display: 'inline-block',
  height: '10px',
  width: '10px'
//   transform: 'rotate(-7deg)',
//   WebkitTransform: 'rotate(-7deg)',
}

const CraftElementInDrag = memo(({ path, title }) => {
  const [tickTock, setTickTock] = useState(false)
  
  useEffect(
    function subscribeToIntervalTick() {
      const interval = setInterval(() => setTickTock(!tickTock), 500)
      return () => clearInterval(interval)
    },
    [tickTock],
  )
  return (
    <div style={styles}>
      <CraftElement path={path} title={title} />
    </div>
  )
})
export default CraftElementInDrag