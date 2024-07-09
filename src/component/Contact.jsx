import React, { useState } from 'react'
import { db } from '../firebase/firebaseconfigue'
import { addDoc, collection } from 'firebase/firestore';

const Contact = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [subject,setSubject] = useState();
    const [message,setMessage] = useState();
    let submithandler = async (e) =>{
        e.preventDefault();
        let collect =  collection(db,"portfolio")
        addDoc(collect,{name,email,subject,message}).then((res)=>{console.log(res)})
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }
    return (
        <div className='contact contactus-section' >
            <div className='container'>
                <div className='contactus-box rounded oveflow-hidden gray-bg'>
                    <div className='row g-0 p-4 p-lg-5'>
                        <div className='col-lg-4'></div>
                        <div className='col-lg-8'>
                            <div className='contactus-title'>
                                <h5 >Let’s Discuss Your Project</h5>
                                <p>Always available for freelancing if the right project comes along, Feel free to contact me.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row g-0 contactus-form p-4 p-lg-5 flex-row-reverse'>
                        <div className='col-lg-8'>
                            <div className="contact-form">
                                <form id="contact-form" onSubmit={submithandler}>
                                    <div className="row gx-3 gy-4">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Your Name</label>
                                                <input name="name" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Name *" className="form-control p-2 input-box" type="text" required=""  />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Your Email</label>
                                                <input name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email *" className="form-control p-2 input-box" type="email" required=""  />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label className="form-label">Subject</label>
                                                <input name="subject" value={subject} onChange={(e)=>{setSubject(e.target.value)}} placeholder="Subject *" className="form-control p-2 input-box" type="text" required=""  />
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className="form-group">
                                                <label className="form-label">Your message</label>
                                                <textarea name="message" value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder="Your message *" rows="4" className="form-control p-2 input-box" required="">
                                                </textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div>
                                                <button className="px-btn w-100 " type="submit">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-lg-4 pe-md-5'>
                            <div className='contact-banner d-none d-lg-block'>
                               <img src="./logodb.jpeg" alt="" />
                            </div>
                            <div className="contact-info">
                                <div className='contact-info-in aos-init aos-animate' data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0">
                                    <label >WRITE AN E-MAIL</label><br />
                                    <a href="">DEEPAKBAIRAGI170501@GMAIL.COM</a>
                                </div>
                                <div className='contact-info-in aos-init aos-animate' data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0">
                                    <label >PHONE NUMBER</label><br />
                                    <a href="">+91 8103190401</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact