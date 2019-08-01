import React, {useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import ElementTypes from '../elements';
import CraftElement from './CraftElement';

function getStyles(left, top, isDragging){
    const transform = `translate3d(${left}px, ${top}px 0)`;
    return {
        position: 'absolute',
        transform,
        WebkitTransform: transform,
        opacity: isDragging ? 0 : 1,
        height: isDragging ? 0 : ''
    }
}

const DraggableElement = props => {

    const { id, title, left, top } = props;

    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: ElementTypes.ELEMENT, id, left, top, title },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true })
    }, []);
      
    return (
        <div ref={drag} style={getStyles(left, top, isDragging)}>
            <CraftElement title={props.title} />
        </div>
    )
};

export default DraggableElement;

// onDragStart={e => props.dragIt(e)}

