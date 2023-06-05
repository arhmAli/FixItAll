import React from 'react'
import './contact.css'
export const Contact = () => {
  return (
    <footer className='contact-dib'>
        <h3>Contact us</h3>
        <div className="contact-info">
        <div className="column">
          <h4>Email</h4>
          <p>ali.tahirkhan30@gmail.com</p>
        </div>
        <div className="column">
          <h4>Phone</h4>
          <p className='phone'>0336-6382076</p>
          <br/>
          <p>0321-9372066</p>
        </div>
        <div className="column">
          <h4>Landline</h4>
          <p>041-8759078</p>
        </div>
      </div>
    
        {/* <p>
            Phone Number:
            <br/>
            0336-6382076
            <br/>
            0321-9372066
        </p>
        <p>
            Email:
            <br/>
            ali.tahirkhan30@gmail.com
        </p>
        <p>
            Landline:
            <br/>
            041-8759078 */}
        {/* </p> */}
    </footer>
  )
}
