import React, { Component } from 'react';
import '../App.css';
import {db} from '../firebase';
import Geolocation from '../assets/svg/GeolocationIcon';
import MailIcon from '../assets/svg/MailIcon';
import Telephone from '../assets/svg/TelephoneIcon';
import BackgroundImage from '../assets/images/palmsky.jpg';

export default class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            name: "",
            subject: "",
            email: "",
            message: ""
        }
        this.handleName = this.handleName.bind(this);
        this.handleSubject = this.handleSubject.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    componentDidMount(){
        document.body.style.backgroundImage = `url(${BackgroundImage})`;
        document.body.style.backgroundAttachment = 'fixed';
    }
    
    render(){
        return(
            <div>
                <p style={{color: 'white'}}>If you want to come in contact with me, please do write a message to me and I will get back to you as soon as I can :)</p>
                    <div id="messageForm" className="messageForm">
                        <div id="greenSquare">
                            <div className="checkIcon"></div>
                        </div>
                        <form>
                            <input 
                                id="userName" 
                                className="formContent" 
                                type="text" 
                                value={this.state.name} 
                                onChange={this.handleName} 
                                placeholder="Name" 
                                required />
                            <br/>
                            <input 
                                id="subject" 
                                className="formContent" 
                                type="text" 
                                onChange={this.handleSubject} 
                                placeholder="Subject" 
                                required/>
                            <br/>
                            <input 
                                id="email" 
                                className="formContent" 
                                type="email"  
                                onChange={this.handleEmail} 
                                placeholder="Email" 
                            /><br/>

                            <textarea 
                                id="messageField" 
                                className="formContent" 
                                type="text" 
                                onChange={this.handleMessage} 
                                placeholder="Write your message here.." 
                                required/><br/>
                            <p id="requiredNotice" style={{color: 'red', display: 'none'}}>All fields are required</p>
                            <p id="emailNotice" style={{color: 'red', display: 'none'}}>Invalid Email format, use name@domain.xx or name@domain.xx.yy</p>
                            <p id="sentNotice" style={{display: 'none'}}>Thank you {this.state.name} for your message.</p>

                            <button id="submitBtn" className="formContent" type="submit" onClick={this.sendMessage}>Send message</button>
                        </form>
                    </div>
                    <div className="contact-details">
                        <p><Geolocation /><br/> Stockholm, Sweden</p>
                        <p><MailIcon /><br/>kevinlane3@hotmail.com</p>
                        <p><Telephone /><br/>+46 73 907 64 61</p>
                    </div>
            </div>
        );
    }

    handleName(event){
        document.getElementById("requiredNotice").style.display = "none";
        this.setState({
            name: event.target.value
        });
    }

    handleSubject(event){
        document.getElementById("requiredNotice").style.display = "none";
        this.setState({
            subject: event.target.value
        });
    }

    handleEmail(event){
        document.getElementById("requiredNotice").style.display = "none";
        document.getElementById("emailNotice").style.display = "none";
        this.setState({
            email: event.target.value
        });
    }

    handleMessage(event){
        document.getElementById("requiredNotice").style.display = "none";
        this.setState({
            message: event.target.value
        });
    }

    addZero(num){
        return num < 10 ? `0${num}` : num;
    }

    sendMessage(event){
        var name = document.getElementById("userName").value;
        var subject = document.getElementById("subject").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("messageField").value;
        var time = new Date();

        //Specify all contents of the contact form
        var formContent = document.getElementsByClassName("formContent");
        var emailRegx = /^([a-z0-9._%+-])+@([a-z0-9.-])+\.([a-z]{2,})$/; //Regular expression for email
        console.log(emailRegx.test(this.state.email));
        if(name.length === 0 || subject.length === 0 || email.length === 0 || message.length === 0){
            document.getElementById("requiredNotice").style.display = "block";
        }
        
        //If entered email does not match according to the regular expression specified, prevent sending message
        else if(!emailRegx.test(this.state.email)){
            document.getElementById("emailNotice").style.display = "block";
        }

        else{
            //Store messages in Firebase database collection
            db.collection('messages').add({
                name: this.state.name,
                subject: this.state.subject,
                email: this.state.email,
                message: this.state.message,
                Time: time.getFullYear() + '-' + this.addZero(time.getMonth() + 1) + '-' + this.addZero(time.getDate()) + ' ' + this.addZero(time.getHours()) + ':' + this.addZero(time.getMinutes())
            })
            .then(() => {
                //Hide the contents of the form while check animation pops up after sending message
                for (let i = 0; i < formContent.length; i++) {
                    formContent[i].style.visibility = "hidden";
                }
            
                document.getElementById("requiredNotice").style.display = "none";
                document.getElementById("greenSquare").style.display = "block";
                document.getElementById("sentNotice").style.display = "block";
                setTimeout(() => {
                    document.getElementById("greenSquare").style.display = "none";
                    document.getElementById("sentNotice").style.display = "none";

                    for (let i = 0; i < formContent.length; i++) {
                        formContent[i].style.visibility = "visible";  
                        if (formContent[i].localName === "input" || formContent[i].localName === "textarea") {
                            formContent[i].value = ''
                        }
                    }
                }, 5000);

            })
            .catch(error => {
                alert(error.message);
            });
        };
        event.preventDefault();
    }
}