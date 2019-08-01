import React from 'react'
import { useDrag } from 'react-dnd'
import ElementTypes from '../elements';

const style = {
  position: 'absolute',
  padding: '0.5rem 1rem',
  cursor: 'move',
}

const CraftElement = ({ id, left, top, children }) => {
    const [{ isDragging }, drag] = useDrag({
      item: { id, left, top, type: ElementTypes.ELEMENT },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
    })
    if (isDragging) {
        return <div ref={drag} />
      }
    return (
      <div ref={drag} style={{ ...style, left, top }}>
        {children}
      </div>
    )
  }

export default CraftElement;

// onDragStart={e => props.dragIt(e)}