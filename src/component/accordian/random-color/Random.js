import React, { useState } from 'react'

const Random = () => {
    const [typeOfColor, setTypeOfcolor] = useState('hex')
    const [color, setColor] = useState('#00000')
    function handleCreateRandomColor () {
      
    }
  return (
    <div style={{
        width : '100vw',
        height : '100vh',
        background: color,
}}>
        
        <button onClick={() => setTypeOfcolor('hex')}>Create Hex color</button>
        <button onClick={() => setTypeOfcolor('rgb')}>Create Rgb color</button>
        <button onClick={handleCreateRandomColor}>Generate random color</button>
    </div>
  )
}

export default Random