// const renderCraftElements = elements.map((e, idx) => < CraftElement key={idx} idTag={e.idTag} text={e.text} dragIt={dragIt} moveIt={moveIt} allowDrop={allowDrop} dropIt={dropIt}/>)
// {renderCraftElements}
import React, { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import DraggableElement from '../components/DraggableElement';
import ElementTypes from '../elements';
import ringOne from '../images/ringOne.png';
import ringTwo from '../images/ringTwo.png';
import update from 'immutability-helper';

function renderElement(item, key) {
    return <DraggableElement key={key} id={key} {...item} />
}

const CraftBoard = () => {
    const styles = {
        width: 600,
        height: 600,
        border: '1px solid black',
        position: 'relative',
      }

    const [elements, setElements] = useState({
        date: { top: 20, left: 80, title: '30-4-20'},
        // city: { top: 180, left: 20, title: 'London'}
    })

    const moveElement = useCallback(
        (id, left, top) => { 
            setElements(update(elements, {[id]: { $merge: { left, top },},}),)
        }, [elements])

    const [, drop] = useDrop({
        accept: ElementTypes.ELEMENT,
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset()
            let left = Math.round(item.left + delta.x)
            let top = Math.round(item.top + delta.y)
            moveElement(item.id, left, top)
            return undefined
        }
    })

    return (
        <div id={"craftboard"} ref={drop} style={styles}>
           {/* <div className="rings">
                 <img src={ringOne} className="App-logo" alt="ring" />
                 <img src={ringTwo} className="App-logo-rev" alt="ring two" />
            </div> */}
            { Object.keys(elements).map(key => renderElement(elements[key], key)) }
         </div>
    )
} 


export default CraftBoard;
