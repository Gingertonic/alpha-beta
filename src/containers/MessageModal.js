import React, { useState } from 'react'

const MessageModal = ({text, closeModal}) => {

  return (
    <div id="modal">
        {text}
        <button onClick={closeModal}>Okay</button>
    </div>
  )
}

export default MessageModal

