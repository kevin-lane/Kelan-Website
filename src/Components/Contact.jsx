import React, { Component } from 'react';
import '../App.css';

export default class About extends Component{
    constructor(props){
        super(props);
        this.state={
            fName: "",
            lName: "",
            email: "",
            message: ""
        }
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }
    render(){
        return(
            <div>
                <p>If you want to come in contact with me, please do write a message to me and I will get back to you as soon as I can :)</p>
                    <div id="messageForm" className="messageForm">
                        <div id="greenSquare">
                            <div className="checkIcon"></div>
                        </div>
                        <form>
                            <label className="formContent">First Name</label><br/>
                            <input id="firstName" className="formContent" type="text" value={this.state.fName} onChange={this.handleFirstName} required />
                            <br/>
                            <label className="formContent">Last Name</label><br/>
                            <input id="lastName" className="formContent" type="text" onChange={this.handleLastName}  required/>
                            <br/>
                            <label className="formContent">Email</label><br/>
                            <input id="email" className="formContent" type="email"  onChange={this.handleEmail} required/><br/>
                            <label className="formContent">Message</label><br/>

                            <textarea id="messageField" className="formContent" type="text" onChange={this.handleMessage} placeholder="Write your message here.." required/><br/>
                            <p id="requiredNotice" style={{color: 'red', display: 'none'}}>All fields are required</p>
                            <p id="sentNotice" style={{display: 'none'}}>Thank you {this.state.fName} {this.state.lName} for your message</p>

                            <button id="submitBtn" className="formContent" type="submit" onClick={this.sendMessage}>Send message</button>
                        </form>
                    </div>
            </div>
        );
    }

    handleFirstName(event){
        this.setState({
            fName: event.target.value
        });
    }

    handleLastName(event){
        this.setState({
            lName: event.target.value
        });
    }

    handleEmail(event){
        this.setState({
            email: event.target.value
        });
    }

    handleMessage(event){
        this.setState({
            message: event.target.value
        });
    }

    sendMessage(event){
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("messageField").value;

        //Specify all contents of the contact form
        var formContent = document.getElementsByClassName("formContent");



        console.log(formContent);
 

        if(firstName.length === 0 || lastName.length === 0 || email.length === 0 || message.length === 0){
            document.getElementById("requiredNotice").style.display = "block";
        }
        else{
            console.log("First Name: " + this.state.fName);
            console.log("Last Name: " + this.state.lName);
            console.log("Email: " + this.state.email);
            console.log("Message: " + this.state.message);

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
                        console.log(formContent[i].type);
                    }
                }

            }, 5000);
        }
        event.preventDefault();
    }
}