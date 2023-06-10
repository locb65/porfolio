import React from 'react'

export const ContactMeForm = () => {
  return (
    <div>
        <form className='form-container'>
            <div className='form-field m-1 p-1'>
                <label htmlFor="">
                    <input
                    type="text"
                    name='name'
                    placeholder='name'
                    required />
                </label>
            </div>
            <div className='form-field m-1 p-1'>
                <label htmlFor="">
                    <input
                    type="email"
                    name='email'
                    placeholder='email'
                    required />
                </label>
            </div>
            <div className='form-field m-1 p-1'>
                <label htmlFor="">
                    <input
                    type="number"
                    name='phoneNumber'
                    placeholder='Your phone number'
                    required />
                </label>
            </div>
            <div className='form-field m-1 p-1'>
                <label htmlFor="">
                    <input
                    type="text"
                    name='message'
                    placeholder='Type your message here'
                    required />
                </label>
            </div>
        </form>
    </div>
  )
}
