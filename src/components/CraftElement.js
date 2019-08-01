import React from 'react';

const CraftElement = props => {
      
    return (
        // <div className={"dz"} onDragOver={e => props.allowDrop(e)} onDrop={e => props.dropIt(e)}>
            <div 
                // className="shuffle" 
                // ref={drag} 
                // style={{
                //     opacity: isDragging ? 0.5 : 1,
                //     fontSize: 25,
                //     fontWeight: 'bold',
                //     cursor: 'move'
                // }} 
                // id={props.idTag} 
                // draggable="true" 
                // onClick={() => props.moveIt(props.idTag)}
            >
                {/* {props.text} */}
                {props.title}
            </div>
        // </div>
    )
};

export default CraftElement;

// onDragStart={e => props.dragIt(e)}