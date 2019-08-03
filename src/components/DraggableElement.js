import React, { useEffect, useState } from 'react'
import { useDrag } from 'react-dnd'
import Elements from '../elements'
import { getEmptyImage } from 'react-dnd-html5-backend'
import CraftElement from './CraftElement'

function getStyles(left, top, isDragging) {
  const transform = `translate3d(${left}px, ${top}px, 0)`
  return {
    position: 'absolute',
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : '',
  }
}
const DraggableElement = props => {
  const { id, path, title, left, top, height } = props

  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: Elements.ELEMENT, id, left, top, title, path, height },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [])


  return (
    <div className="interaction" ref={drag} style={getStyles(left, top, isDragging)}>
      <CraftElement path={path} title={title} height={height}/>
    </div>
  )
}
export default DraggableElement
