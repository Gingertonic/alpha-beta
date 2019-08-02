import React from 'react'


const CraftElement = ({ path, title, height}) => {

  const styles = {
    cursor: 'pointer',
    height: height,
    position: 'relative'
  }

    return <img src={path} style={{ ...styles }} alt={title} />
}

export default CraftElement;
