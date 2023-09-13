import React,{useEffect,useRef} from 'react'

function VideoPlayer({user}) {
    const ref =useRef();
useEffect(() => {
    user.videoTrack.play(ref.current)
}, [])
  return (
    <>
    <div>VideoPlayer:</div>
    <div style={{display:'flex',justifyContent:'center'}}>
        Uid: {user.uid}
        <div style={{display:'grid',gridTemplateColumns:'3,200px'}}>
        <div ref={ref} style={{width:'300px',height:'300px'}}
        ></div>
        </div>
    </div>
    </>
  )
}

export default VideoPlayer