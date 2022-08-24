
import React from 'react'
import TextField from '@mui/material/TextField';
import './style.css'
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import moment from 'moment';

export default function Chatpage() {

  const params = useParams();
 
  const [allRoomMessages, setAllRoomMessages] = React.useState(JSON.parse(localStorage.getItem('messages')) ? JSON.parse(localStorage.getItem('messages')) :null)
  const [sender, setSender] = React.useState(params.roomId.split('-')[0])
  const [receiver, setReceiver] = React.useState(params.roomId.split('-')[1])
  const [roomId,setRoomId] = React.useState(params.roomId);
  const [otherRoomId, setOtherRoomId] = React.useState(`${params.roomId.split('-')[1]}-${params.roomId.split('-')[0]}`) ;

 

  const sendMessage = (e) => {

    e.preventDefault();

    let roomId = params.roomId;
  let otherRoomId = `${params.roomId.split('-')[1]}-${params.roomId.split('-')[0]}` ;

    const messg = {
      message: message,
      time: moment().format('MMMM Do YYYY, h:mm:ss a'),
      sender: sender,
      receiver: receiver
    }

if(allRoomMessages &&
   Object.keys(allRoomMessages).includes(roomId) 
   && allRoomMessages[roomId].length) 
  
  {

      let newRoom = {}
      newRoom[roomId] = [...allRoomMessages[roomId], messg]
     
      setAllRoomMessages({
        ...allRoomMessages,
        ...newRoom
      })
    
    
      localStorage.setItem('messages', JSON.stringify({ ...allRoomMessages, ...newRoom }))
      setMessage("")
      

  }else if(allRoomMessages && Object.keys(allRoomMessages).includes(otherRoomId)  &&
   allRoomMessages[otherRoomId].length ){

    let newRoom = {}
    newRoom[otherRoomId] = [...allRoomMessages[otherRoomId], messg]
   
    setAllRoomMessages({
      ...allRoomMessages,
      ...newRoom
    })
  
  
    localStorage.setItem('messages', JSON.stringify({ ...allRoomMessages, ...newRoom }))
    setMessage("")
    
  }
 else{

  let newRoom = {}
  newRoom[roomId] = [messg]
  setAllRoomMessages({
    ...allRoomMessages,
    newRoom
  })

  console.log(newRoom, {
    ...allRoomMessages,
    newRoom
  }, roomId, 'gh' )

  localStorage.setItem('messages', JSON.stringify({ ...allRoomMessages, ...newRoom}))
  setMessage("")

}
    

   


   
  
  }

  const [message, setMessage] = React.useState('')

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  return (
    <>
      <div className='top-container user-chats'>
      <div className='user-chat' style={{  }}>
        <p className='contact-chat-page'>{params.roomId.split('-')[1]}</p>
      </div>
      <div className='mainChatContainer'>

        {
      allRoomMessages &&  Object.keys(allRoomMessages).length && Object.keys(allRoomMessages).includes(roomId) && allRoomMessages[roomId].length ? allRoomMessages[roomId].map(msg => (
            <div key={msg.sender} className={msg?.sender === sender ? `container-right` : `container-left`}>

              <div className={msg?.sender === sender ? "right-box" : "left-box"}>
                <p>{msg?.message}</p>
                <span className="time-right">{msg?.time}</span>
              </div>
            </div>
          ))
         :    allRoomMessages &&  Object.keys(allRoomMessages).length && Object.keys(allRoomMessages).includes(otherRoomId) && allRoomMessages[otherRoomId].length ?
            allRoomMessages[otherRoomId].map(msg => (
              <div key={msg.sender} className={msg?.sender === sender ? `container-right` : `container-left`}>
                <div className={msg?.sender === sender ? "right-box" : "left-box"}>
                  <p>{msg?.message}</p>
                  <span className="time-right">{msg?.time}</span>
                </div>
              </div>
            ))
        : null
          }

      </div>
      <div className='message-send-input'>
        <TextField onChange={handleChange} name="message" className='message-input' id="outlined-basic" label="type your message" value={message} variant="outlined" />
        <Button
          onClick={
            (e) => {
              sendMessage(e)
            }
          }
          className='btn-input send-messages'
          variant="outlined">Send</Button>
      </div>
    </div>
    </>
  )
}
