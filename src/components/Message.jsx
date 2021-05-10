import React from 'react'

const Message = ({message}) => {
     return (
          <div>
               <h3 className='message'>
                    {message}
               </h3>
          </div>
     )
}

export default Message
