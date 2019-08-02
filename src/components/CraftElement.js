import React from 'react'


const CraftElement = ({ path, title, height}) => {

  const styles = {
    // position: 'absolute',
    // padding: '0.5rem 1rem',
    cursor: 'pointer',
    height: height
  }

    // return <div style={{ ...styles }}>{title}</div>
    return <img src={path} style={{ ...styles }} alt={title} />
}

export default CraftElement;
