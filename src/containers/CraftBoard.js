import React, { useCallback, useState, useEffect, changeOrientation } from 'react';
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
  position: 'relative',
}

const CraftBoard = () => {
    const vpheight = window.innerHeight;
    const vpwidth = window.innerWidth;


    const [elements, setElements] = useState({  
      // bookmark: { top: vpheight*-0.03, left: vpwidth*0.46, path: 'images/bookmark.png', title: 'bookmark', height: '60vh'},
      // player1: { top: vpheight*0.12, left: vpwidth*0.485, path: 'images/A.png', title: "A", height: '16vh'},
      // player2: { top: vpheight*0.33, left: vpwidth*0.485, path: 'images/B.png', title: "B", height: '16vh'},
      // city: { top: vpheight*0.34, left: vpwidth*0.22, path: 'images/bigben.png', title: 'London', height: '45vh'},
      // date: { top: vpheight*0.12, left: vpwidth*0.23, path: 'images/date-gold.png', title: '30-4-20', height: '16vh'},
      // ceremony: { top: vpheight*0.39, left: vpwidth*0.3, path: 'images/cirilica-backed.png', title: "Српска православна црква", height: '13vh'},
      // reception: { top: vpheight*0.59, left: vpwidth*0.29, path: 'images/newkew.png', title: "Kew Gardens", height: '18vh'},
      // polaroid1: { top: vpheight*0.64, left: vpwidth*0.45, path: 'images/osterley-polaroid.png', title: 'Osterley, London', height: '30vh'},
      // polaroid2: { top: vpheight*0.62, left: vpwidth*0.49, path: 'images/plitvice-polaroid.png', title: 'Plitvice Lakes, Croatia', height: '30vh'},
      // polaroid3: { top: vpheight*0.66, left: vpwidth*0.52, path: 'images/batur-polaroid.png', title: 'Mt Batur, Bali', height: '30vh'},
      // ringOne: { top: vpheight*0.12, left: vpwidth*0.64, path: 'images/ivyOne.png', title: "A Ring", height: '18vh'},
      // ringTwo: { top: vpheight*0.19, left: vpwidth*0.60, path: 'images/ivyTwo.png', title: "Another Ring", height: '17vh'},
  
        bookmark: { top: vpheight*-0.04, left: vpwidth*0.45, path: 'images/bookmark.png', title: 'bookmark', height: '12vw'},
        player1: { top: vpheight*0.12, left: vpwidth*0.47, path: 'images/A.png', title: "A", height: '8vw'},
        player2: { top: vpheight*0.33, left: vpwidth*0.47, path: 'images/B.png', title: "B", height: '8vw'},
        city: { top: vpheight*0.35, left: vpwidth*0.225, path: 'images/bigben.png', title: 'London', height: '6vw'},
        date: { top: vpheight*0.12, left: vpwidth*0.23, path: 'images/date-gold.png', title: '30-4-20', height: '20vw'},
        ceremony: { top: vpheight*0.36, left: vpwidth*0.3, path: 'images/cirilica-backed.png', title: "Српска православна црква", height: '15vw'},
        reception: { top: vpheight*0.56, left: vpwidth*0.29, path: 'images/newkew.png', title: "Kew Gardens", height: '15vw'},
        polaroid1: { top: vpheight*0.67, left: vpwidth*0.64, path: 'images/osterley-polaroid.png', title: 'Osterley, London', height: '15vw'},
        polaroid2: { top: vpheight*0.64, left: vpwidth*0.45, path: 'images/plitvice-polaroid.png', title: 'Plitvice Lakes, Croatia', height: '15vw'},
        polaroid3: { top: vpheight*0.67, left: vpwidth*0.69, path: 'images/batur-polaroid.png', title: 'Mt Batur, Bali', height: '15vw'},
        ringOne: { top: vpheight*0.07, left: vpwidth*0.68, path: 'images/ivyOne.png', title: "A Ring", height: '12vw'},
        ringTwo: { top: vpheight*0.13, left: vpwidth*0.65, path: 'images/ivyTwo.png', title: "Another Ring", height: '12vw'}
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
            // debugger;
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
            {/* <RSVP /> */}
            <OrientationWarning />
            <RSVP />
         </div>
    )
} 


export default CraftBoard;
