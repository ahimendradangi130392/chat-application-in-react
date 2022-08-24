
import React from 'react'
import { AiFillAliwangwang } from 'react-icons/ai';
import './style.css';
import users from '../../utils/users';
import { useNavigate, useParams } from 'react-router-dom';

export default function ContactModal({ user }) {

    const navigateTo  = useNavigate()
    const params = useParams()

    const contactList = users.filter(usr=> usr.name !== user.name )

    const loggedUser = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : null

    const handleClick = (user) => {
        navigateTo(`/chat-page/${loggedUser.name}-${user.name}`)

    }

    return (
        <>
            <button type="button " className=" homes btn btn-primary user-profile" data-bs-toggle="modal" data-bs-target={"#exampleModal"}>
                {user?.name}
            </button>

            {/* modal  */}

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Contact list</h5>
                        </div>
                        <div className="modal-body">
                            <ul>
                                {
                                   contactList.map(user=>(<>
                                     <div className='contact-list-chat' onClick={()=> handleClick(user)}>
                                    <li data-bs-dismiss="modal">{user.name}</li>
                                    <AiFillAliwangwang />
                                </div>
                                   </>)) 
                                }
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">cancel  </button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
