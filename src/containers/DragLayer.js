import React from 'react';
import { useDragLayer } from 'react-dnd';
import ElementTypes from '../elements';
import ElementDragPreview from '../components/ElementDragPreview';

const layerStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
}

function getItemStyles(initOffset, currentOffset) {
    if (!initOffset || !currentOffset) {
        return {display: 'none'}
    }
    let { x, y } = currentOffset;
    const transform = `translate(${x}px, ${y}px)`;
    return {
        transform,
        WebkitTrasform: transform
    }
}

const DragLayer = props => {

    const { itemType, isDragging, item, initOffset, currentOffset } = useDragLayer(monitor => ({
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        initOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getInitialSourceClientOffset(),
        isDragging: monitor.isDragging()
    }))

    function renderElement(){
        switch(itemType){
            case ElementTypes.ELEMENT:
                return <ElementDragPreview title={item.title} />
            default:
                return null
        }
    }

    if (!isDragging){
        return null
    }

    return (
            <div style={layerStyles}>
                <div style={getItemStyles(initOffset, currentOffset)}>
                    {renderElement()}
                </div>
            </div>
    )
};

export default DragLayer;

// onDragStart={e => props.dragIt(e)}