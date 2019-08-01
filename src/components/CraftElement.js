import React from 'react'

const styles = {
  // position: 'absolute',
  // padding: '0.5rem 1rem',
  cursor: 'move',
  height: '200px',
  width: '200px'
}

const CraftElement = ({ path, title}) => {
    // return <div style={{ ...styles }}>{title}</div>
    return <img src={path} style={{ ...styles }} alt={title} />
}

export default CraftElement;

// onDragStart={e => props.dragIt(e)}