import React from 'react'
import './LeftMenu.css'

function LeftMenu() {
    return (
        <div className='left-menu'>
            <div className='title-button'>
                <div>
                    <h1 className='title-whatsapp'>Whatsapp</h1>
                </div>

                <div className='title-buttons'>
                    <button className='top-button-1'>
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fill="none"><title>new-chat-outline</title><path d="M9.53277 12.9911H11.5086V14.9671C11.5086 15.3999 11.7634 15.8175 12.1762 15.9488C12.8608 16.1661 13.4909 15.6613 13.4909 15.009V12.9911H15.4672C15.9005 12.9911 16.3181 12.7358 16.449 12.3226C16.6659 11.6381 16.1606 11.0089 15.5086 11.0089H13.4909V9.03332C13.4909 8.60007 13.2361 8.18252 12.8233 8.05119C12.1391 7.83391 11.5086 8.33872 11.5086 8.991V11.0089H9.49088C8.83941 11.0089 8.33411 11.6381 8.55097 12.3226C8.68144 12.7358 9.09947 12.9911 9.53277 12.9911Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.944298 5.52617L2.99998 8.84848V17.3333C2.99998 18.8061 4.19389 20 5.66665 20H19.3333C20.8061 20 22 18.8061 22 17.3333V6.66667C22 5.19391 20.8061 4 19.3333 4H1.79468C1.01126 4 0.532088 4.85997 0.944298 5.52617ZM4.99998 8.27977V17.3333C4.99998 17.7015 5.29845 18 5.66665 18H19.3333C19.7015 18 20 17.7015 20 17.3333V6.66667C20 6.29848 19.7015 6 19.3333 6H3.58937L4.99998 8.27977Z" fill="currentColor"></path></svg>
                    </button>

                    <button className='top-button-2'>
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fill="none"><title>more-refreshed</title><path d="M12 20C11.45 20 10.9792 19.8042 10.5875 19.4125C10.1958 19.0208 10 18.55 10 18C10 17.45 10.1958 16.9792 10.5875 16.5875C10.9792 16.1958 11.45 16 12 16C12.55 16 13.0208 16.1958 13.4125 16.5875C13.8042 16.9792 14 17.45 14 18C14 18.55 13.8042 19.0208 13.4125 19.4125C13.0208 19.8042 12.55 20 12 20ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14ZM12 8C11.45 8 10.9792 7.80417 10.5875 7.4125C10.1958 7.02083 10 6.55 10 6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4C12.55 4 13.0208 4.19583 13.4125 4.5875C13.8042 4.97917 14 5.45 14 6C14 6.55 13.8042 7.02083 13.4125 7.4125C13.0208 7.80417 12.55 8 12 8Z" fill="currentColor"></path></svg>
                    </button>
                </div>
            </div>

            <div className='search-bar'>
                <svg viewBox="0 0 20 20" className="search-lupa"><title>search-refreshed-thin</title><path fill-rule="evenodd" clip-rule="evenodd" d="M4.36653 4.3664C5.36341 3.36953 6.57714 2.87 8.00012 2.87C9.42309 2.87 10.6368 3.36953 11.6337 4.3664C12.6306 5.36329 13.1301 6.57724 13.1301 8.00062C13.1301 8.57523 13.0412 9.11883 12.8624 9.63057C12.6972 10.1038 12.4733 10.5419 12.1909 10.9444L16.5712 15.3247C16.7454 15.4989 16.8385 15.7046 16.8385 15.9375C16.8385 16.1704 16.7454 16.3761 16.5712 16.5503C16.396 16.7254 16.1866 16.8175 15.948 16.8175C15.7095 16.8175 15.5001 16.7254 15.3249 16.5503L10.9448 12.1906C10.5421 12.4731 10.104 12.697 9.63069 12.8623C9.11895 13.041 8.57535 13.13 8.00074 13.13C6.57736 13.13 5.36341 12.6305 4.36653 11.6336C3.36965 10.6367 2.87012 9.42297 2.87012 8C2.87012 6.57702 3.36965 5.36328 4.36653 4.3664ZM8.00012 4.63C7.06198 4.63 6.26877 4.95685 5.61287 5.61275C4.95698 6.26865 4.63012 7.06186 4.63012 8C4.63012 8.93813 4.95698 9.73134 5.61287 10.3872C6.26877 11.0431 7.06198 11.37 8.00012 11.37C8.93826 11.37 9.73146 11.0431 10.3874 10.3872C11.0433 9.73134 11.3701 8.93813 11.3701 8C11.3701 7.06186 11.0433 6.26865 10.3874 5.61275C9.73146 4.95685 8.93826 4.63 8.00012 4.63Z" fill="currentColor"></path></svg>
                <input type='text' placeholder='Buscar un chat o iniciar uno nuevo' className='contact-filter' />
            </div>

            <div className='contacts-chat'>
                <button>Todos</button>
                <button>No leídos</button>
                <button>Favoritos</button>
                <button>Grupos</button>
            </div>

            <div className='chats'>
                    <img src="https://pbs.twimg.com/media/FRUcAHZWQAMMTgq.jpg" alt="" />
                <div className='name'>
                    <h2>Chat 1</h2>
                    <span>hola</span>
                </div>
                <span className='chats-time'>10:00</span>
            </div>

            <div className='chats'>
                    <img src="https://pbs.twimg.com/media/FRUcAHZWQAMMTgq.jpg" alt="" />
                <div className='name'>
                    <h2>Chat 2</h2>
                    <span>hola</span>
                </div>
                <span className='chats-time'>10:00</span>
            </div>

            <div className='chats'>
                    <img src="https://pbs.twimg.com/media/FRUcAHZWQAMMTgq.jpg" alt="" />
                <div className='name'>
                    <h2>Chat 3</h2>
                    <span>hola</span>
                </div>
                <span className='chats-time'>10:00</span>
            </div>

            <div className='chats'>
                    <img src="https://pbs.twimg.com/media/FRUcAHZWQAMMTgq.jpg" alt="" />
                <div className='name'>
                    <h2>Chat 4</h2>
                    <span>hola</span>
                </div>
                <span className='chats-time'>10:00</span>
            </div>
        </div>
    )
}

export default LeftMenu