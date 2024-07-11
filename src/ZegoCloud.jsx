import React, { useState, useCallback} from 'react'
import { useNavigate } from 'react-router-dom'
const ZegoCloud = () => {
    const [value, setvalue] = useState()
    const navigate= useNavigate()
const joinRoom = useCallback(
  () => {
    navigate(`/room/${value}`) 
  },
  [navigate,value],
)

    return (
        <>
            <input type="text" placeholder='Enter room ID' onChange={(e) => setvalue(e.target.value)} />
            <button onClick={joinRoom}>JOIN</button>
        </>
    )
};

export default ZegoCloud;
