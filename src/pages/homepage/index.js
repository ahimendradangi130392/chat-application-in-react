
import React from 'react'
import ContactModal from '../contactModal'
import './style.css'

export default function Homepage() {

  const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : null)
  console.log(user)

  return (
    <div className='homepages'>
      <p className='text-for user'>Click on the User Name to chat</p>
      <ContactModal  user = {user}/>
    </div>
  )
}
