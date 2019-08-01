// const renderCraftElements = elements.map((e, idx) => < CraftElement key={idx} idTag={e.idTag} text={e.text} dragIt={dragIt} moveIt={moveIt} allowDrop={allowDrop} dropIt={dropIt}/>)
// {renderCraftElements}
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import CraftElement from '../components/CraftElement';
import ElementTypes from '../elements';
import ringOne from '../images/ringOne.png';
import ringTwo from '../images/ringTwo.png';
import update from 'immutability-helper';



const CraftBoard = () => {
    const styles = {
        width: "100vw",
        height: "100vh",
        border: '1px solid black',
        position: 'relative',
      }

    const [elements, setElements] = useState({
        date: { top: Math.random(10)*500, left: Math.random(10)*500, title: '30-4-20'},
        city: { top: Math.random(10)*500, left: Math.random(10)*500, title: 'London'},
        header: { top: Math.random(10)*500, left: Math.random(10)*500, title: "AB"},
        ceremony: { top: Math.random(10)*500, left: Math.random(10)*500, title: "Српска православна црква"},
        reception: { top: Math.random(10)*500, left: Math.random(10)*500, title: "Kew Gardens"},
    })

    const moveElement = (id, left, top) => {
        setElements(
          update(elements, {
            [id]: {
              $merge: { left, top },
            },
          }),
        )
      }

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
                 <img src={ringOne} className="App-logo" alt="ring" />
                 <img src={ringTwo} className="App-logo-rev" alt="ring two" />
            </div>
            { Object.keys(elements).map(key => {
                const { left, top, title } = elements[key]
                return (
                <CraftElement
                    key={key}
                    id={key}
                    left={left}
                    top={top}
                >
                    {title}
                </CraftElement>
                )
            })}
         </div>
    )
} 


export default CraftBoard;
