// import React, { useEffect, useState } from 'react';
// import { ZIM } from 'zego-zim-web';

// var appID = 1794905675;
// ZIM.create({ appID });
// var zim = ZIM.getInstance();

// function Chatting(props) {

//     const [toUserId, setToUserId] = useState('')
//     const [token, setToken] = useState('')
//     const [userId, setUserId] = useState('')
//     const [userName, setUserName] = useState('')


//     useEffect(() => {
//         // Set up and listen for the callback for receiving error codes. 
//         zim.on('error', function (zim, errorInfo) {
//             console.log('error', errorInfo.code, errorInfo.message);
//         });

//         // Set up and listen for the callback for connection status changes.
//         zim.on('connectionStateChanged', function (zim, { state, event, extendedData }) {
//             console.log('connectionStateChanged', state, event, extendedData);
//             // When SDK logout occurred due to a long-time network disconnection, you will need to log in again. 
//             if (state === 0 && event === 3) {
//                 zim.login({ userName }, token)
//             }
//         });

//         // Set up and listen for the callback for receiving one-to-one messages. 
//         zim.on('receivePeerMessage', function (zim, { messageList, fromConversationID }) {
//             console.log('receivePeerMessage', messageList, fromConversationID);
//         });

//         // Set up and listen for the callback for token expires.
//         zim.on('tokenWillExpire', function (zim, { second }) {
//             console.log('tokenWillExpire', second);
//             // You can call the renewToken method to renew the token. 
//             // To generate a new Token, refer to the Prerequisites.
//             zim.renewToken(token)
//                 .then(function ({ token }) {
//                     // Renewed successfully.
//                 })
//                 .catch(function (err) {
//                     // Renew failed.
//                 })
//         });

//         zim.on('receivePeerMessage', function (zim, { messageList, fromConversationID }) {
//             console.log('receivePeerMessage', messageList, fromConversationID);
//         });
//     }, [])


//     const handleLogin = () => {
//         try {
//             const newUserDetails = { userName, userID: userId }
//             zim.login(newUserDetails, token)
//                 .then(function (res) {
//                     console.log("res", res)
//                 })
//                 .catch(function (err) {
//                     console.log("err", err)
//                 });
//         } catch (error) {
//             console.log("error", error)
//         }
//     }

//     const handleSendMessage = () => {
//         try {
//             var toUserID = toUserId;
//             var config = {
//                 priority: 1 // Set priority for the message. 1: Low (by default). 2: Medium. 3: High.
//             };

//             // Send one-to-one text messages. 
//             var messageTextObj = { type: 1, message: `user to ${toUserID} ` };
//             zim.sendMessage(messageTextObj, toUserID, 0, config)
//                 .then(function ({ message }) {
//                     console.log("message", message)
//                 })
//                 .catch(function (err) {
//                     console.log("err", err)
//                 });
//         } catch (error) {
//             console.log("error", error)
//         }
//     }

//     return (
//         <div className='p-5 flex flex-col'>

//             <label className='p-2 font-bold'>Token</label>
//             <input className='border p-2 m-2' value={token} onChange={(e) => setToken(e.target.value)} />

//             <label className='p-2 font-bold'>Your name</label>
//             <input className='border p-2 m-2' value={userName} onChange={(e) => setUserName(e.target.value)} />

//             <label className='p-2 font-bold'>UserId</label>
//             <input className='border p-2 m-2' value={userId} onChange={(e) => setUserId(e.target.value)} />

//             <button className='border p-2 m-2' onClick={handleLogin}>Login</button>

//             <label className='p-2 font-bold'>Other person User Id </label>
//             <input className='border p-2 m-2' value={toUserId} onChange={(e) => setToUserId(e.target.value)} />

//             <button className='border p-2 m-2' onClick={handleSendMessage}>Send Message</button>

//         </div>
//     );
// }

// export default Chatting;


import { ChatEngine } from "react-chat-engine";

export const chat = ()=>{
    return(
        <ChatEngine 
            height="100vh"
            projectID=""
            userName = ""
            userSecret = ""
        
        />
    )
}