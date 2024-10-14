import React from 'react';
import './contact.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "9e85e638-3214-4071-a1f7-d380c19d8cf2");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            event.target.reset();
          console.log("Success", res);
          alert(res.message);

        }
      }

  return (

    
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-l">
                <h1>Let's Talk!!</h1>
                <p  className='p1'>Feel free to reach out for collaboration, project inquiries, or just to say hello. I'd love to connect!</p>
            <div className="contact-details">
                <p><i className="fa-regular fa-envelope"></i>chandanahari2211@gmail.com</p>
                <p><i className="fa-solid fa-location-dot"></i>Ernakulam,Kerala,India</p>
            </div>
            </div>
            <div className="contact-r">
                <form onSubmit={onSubmit} action="">
                    <input type="text" name="name" id="" placeholder='Enter Your Name'/>
                    <input type="email" name="email" id="" placeholder='Enter Your Email Id'/>
                    <textarea name='message' id=''  rows='8' placeholder='Type something..'></textarea>
                    <button className='btn btn-danger'  type='submit'>Submit</button>
                </form>
            </div>
        </div>
        <AnchorLink className='scroll-to-top' href='#home'>
            <i className="fas fa-arrow-up"></i>
        </AnchorLink>
    </div>
  )
}

export default Contact

