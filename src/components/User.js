import React from 'react'

const User = ({name,email,password}) => {
  return (
    <ul className='block_ul'>
        <li className='block_li'>
            <p className='block_p'>{name}</p>
            <p className='block_p'>{email}</p>
            <p className='block_p'>{password}</p>
        </li>
    </ul>
  )
}

export default User