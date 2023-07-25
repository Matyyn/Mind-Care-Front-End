import React,{useState,useCallback} from 'react'
import { useNavigate } from 'react-router-dom';
function Home() {
    const [value,setValue] =useState();
    const navigate  = useNavigate()
    const handleRoomJoin=useCallback(()=>{
        navigate(`/room/${value}`);
    },[navigate,value])
  return (
    <div>
        <h2>Home</h2>
        <input value={value} onChange={e=>setValue(e.target.value)} type='text' placeholder='Enter Session code'></input>
        <button onClick={handleRoomJoin}>Join</button>
    </div>
  )
}

export default Home