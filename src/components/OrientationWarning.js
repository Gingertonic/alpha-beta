import React from 'react'


const OrientationWarning = () => {

  const styles = {
    // position: 'absolute',
    // padding: '0.5rem 1rem',
    cursor: 'pointer'
  }

  const text = `Please\trotate\n    your\t   screen!`

    // return <div style={{ ...styles }}>{title}</div>
    return (
        <div id="orientation">
          {text}
        </div>
    )
}

export default OrientationWarning;
