// const renderCraftElements = elements.map((e, idx) => < CraftElement key={idx} idTag={e.idTag} text={e.text} dragIt={dragIt} moveIt={moveIt} allowDrop={allowDrop} dropIt={dropIt}/>)
// {renderCraftElements}
import React, { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import DraggableElement from '../components/DraggableElement';
import ElementTypes from '../elements';
// import ringOne from '../images/ringOne.png';
// import ringTwo from '../images/ringTwo.png';
import update from 'immutability-helper';

function renderElement(item, key) {
  return <DraggableElement key={key} id={key} {...item} />
}

const styles = {
  width: "100vw",
  height: "100vh",
  border: '1px solid black',
  position: 'relative',
}

const CraftBoard = () => {

    const [elements, setElements] = useState({
        date: { top: Math.random(10)*500, left: Math.random(10)*500, path: 'ringOne.png', title: '30-4-20'},
        city: { top: Math.random(10)*500, left: Math.random(10)*500, path: 'ringTwo.png', title: 'London'},
        header: { top: Math.random(10)*500, left: Math.random(10)*500, path: 'ringOne.png', title: "AB"},
        ceremony: { top: Math.random(10)*500, left: Math.random(10)*500, path: 'ringTwo.png', title: "Српска православна црква"},
        reception: { top: Math.random(10)*500, left: Math.random(10)*500, path: 'ringOne.png', title: "Kew Gardens"},
    })

    const moveElement = useCallback(
      (id, left, top) => {
        setElements(
          update(elements, {
            [id]: {
              $merge: { left, top },
            },
          }),
        )
      }, [elements]
    )

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
           <div className="rings">
                 {/* <img src={ringOne} className="App-logo" alt="ring" />
                 <img src={ringTwo} className="App-logo-rev" alt="ring two" /> */}
            </div>
            { Object.keys(elements).map(key => renderElement(elements[key], key)) }
         </div>
    )
} 


export default CraftBoard;
