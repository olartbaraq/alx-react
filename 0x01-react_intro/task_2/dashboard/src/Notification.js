import React from 'react';
import './Notification.css';
import { getstatus, getLatestNotification } from './utils';
import close_icon  from './close-icon.png';



const Notification = () => {
  return (
    <div className='Notifications'>
        <p>
            Here is the list of notifications
        </p>
        <ul>
          <li style={{color:'blue'}} data-priority='default'> New course available</li>
          <li style={{color:'red'}} data-priority='urgent'> New resume available</li>
          <li style={{color:'red'}} data-priority='urgent'> 
          <div
          dangerouslySetInnerHTML={{__html: `${getLatestNotification()}`}}>
            </div>
          </li>
        </ul>
        <button 
        onClick={getstatus}
        type='button'
        aria-label='Close'
        style={{
          display: 'inline-block',
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: 0,
          border: 0,
          outline: 'none',
          cursor: 'pointer',
        }}
        >
          <img src={close_icon} alt='' style={{ width: '7px', height: '7px'}} />
        </button>
    </div>
  )
}

export default Notification