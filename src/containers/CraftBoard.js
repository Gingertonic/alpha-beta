// const renderCraftElements = elements.map((e, idx) => < CraftElement key={idx} idTag={e.idTag} text={e.text} dragIt={dragIt} moveIt={moveIt} allowDrop={allowDrop} dropIt={dropIt}/>)
// {renderCraftElements}
import React, { useCallback, useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import DraggableElement from '../components/DraggableElement';
import ElementTypes from '../elements';
import OrientationWarning from '../components/OrientationWarning';
import update from 'immutability-helper';
import RSVP from './RSVP';

function renderElement(item, key) {
  return <DraggableElement key={key} id={key} {...item} />
}

const styles = {
  // width: "100vw",
  // height: "100vh",
  // border: '1px solid black',
  position: 'relative',
}

const CraftBoard = () => {
    const vpheight = window.innerHeight;
    const vpwidth = window.innerWidth;

    function useWindowSize() {
      const isClient = typeof window === 'object';
    
      function getSize() {
        return {
          width: isClient ? window.innerWidth : undefined,
          height: isClient ? window.innerHeight : undefined
        };
      }
    
      const [windowSize, setWindowSize] = useState(getSize);
    
      useEffect(() => {
        if (!isClient) {
          return false;
        }
        
        function handleResize() {
          setWindowSize(getSize());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []); // Empty array ensures that effect is only run on mount and unmount

    
      return windowSize;
    }

    const [elements, setElements] = useState({  
      bookmark: { top: vpheight*-0.1, left: vpwidth*0.40, path: 'images/mark.png', title: 'bookmark', height: '80vh'},
      player1: { top: vpheight*0.12, left: vpwidth*0.48, path: 'images/A.png', title: "A", height: '16vh'},
      player2: { top: vpheight*0.33, left: vpwidth*0.48, path: 'images/B.png', title: "B", height: '16vh'},
      city: { top: vpheight*0.31, left: vpwidth*0.22, path: 'images/bigben.png', title: 'London', height: '50vh'},
      date: { top: vpheight*0.15, left: vpwidth*0.23, path: 'images/date.png', title: '30-4-20', height: '10vh'},
      ceremony: { top: vpheight*0.33, left: vpwidth*0.28, path: 'images/cirilica.png', title: "Српска православна црква", height: '20vh'},
      reception: { top: vpheight*0.52, left: vpwidth*0.31, path: 'images/kew.png', title: "Kew Gardens", height: '30vh'},
      ringOne: { top: vpheight*0.12, left: vpwidth*0.67, path: 'images/ringOne.png', title: "A Ring", height: '18vh'},
      ringTwo: { top: vpheight*0.19, left: vpwidth*0.63, path: 'images/ringOne.png', title: "Another Ring", height: '17vh'},
      // bookmark: { top: vpheight*-0.1, left: vpwidth*0.44, path: 'images/mark.png', title: 'bookmark', height: '80vh'}
    })

  // useEffect(() => {
  //   setElements({
  //     bookmark: { ...elements.bookmark, top: vpheight*-0.1, left: vpwidth.width*0.44},
  //     date: { ...elements.date, top: vpheight*0.15, left: vpwidth*0.23},
  //     city: { ...elements.city, top: vpheight*0.31, left: vpwidth*0.22},
  //     ceremony: { ...elements.ceremony, top: vpheight*0.33, left: vpwidth*0.30},
  //     reception: { ...elements.reception, top: vpheight*0.52, left: vpwidth*0.31},
  //     player1: { ...elements.player1, top: vpheight*0.12, left: vpwidth*0.518},
  //     player2: { ...elements.player2, top: vpheight*0.33, left: vpwidth*0.518},
  //     ringOne: { ...elements.ringOne, top: vpheight*0.12, left: vpwidth*0.67},
  //     ringTwo: { ...elements.ringTwo, top: vpheight*0.19, left: vpwidth*0.63}
  //   })
  // })


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
            { Object.keys(elements).map(key => renderElement(elements[key], key)) }
            <RSVP />
            <OrientationWarning />
            {useWindowSize().width}
            {useWindowSize().height}
         </div>
    )
} 


export default CraftBoard;
