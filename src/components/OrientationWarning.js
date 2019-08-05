import React from 'react'


const OrientationWarning = () => {

  const styles = {
    // position: 'absolute',
    // padding: '0.5rem 1rem',
    cursor: 'pointer'
  }

    // return <div style={{ ...styles }}>{title}</div>
    return (
      <div id="ori-warning">
        <div className="orientation" id="orientation-left">
          <div>Please</div>
          <br/>
          <div>your</div>
        </div>
        <div id="spacer"></div>
        <div className="orientation"  id="orientation-right">
          <div>rotate</div>
          <br/>
          <div>screen!</div>
        </div>
      </div>
    )
}

export default OrientationWarning;
