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
                <form className="messageForm">
                    <label>First Name / Förnamn</label><br/>
                    <input id="firstName" className="textFields" type="text" value={this.state.fName} onChange={this.handleFirstName} required />
                    <br/>
                    <label>Last Name / Efternamn</label><br/>
                    <input id="lastName" className="textFields" type="text" onChange={this.handleLastName}  required/>
                    <br/>
                    <label>Email / Epost</label><br/>
                    <input id="email" className="textFields" type="email"  onChange={this.handleEmail} required/><br/>
                    <label>Message / Meddelande</label><br/>

                    <textarea id="messageField" className="textFields" type="text" onChange={this.handleMessage} placeholder="Write your message here../Skriv ditt meddelande här.." required/><br/>
                    <p id="requiredNotice" style={{color: 'red', display: 'none'}}>All fields are required / Alla fält är obligatoriska att fylla i</p>
                    <p id="sentNotice" style={{display: 'none'}}>Thank you {this.state.fName} {this.state.lName} for your message</p>

                    <input className="submitBtn" type="submit" value="Send message" onClick={this.sendMessage}/>
                </form>
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

        if(firstName.length === 0 || lastName.length === 0 || email.length === 0 || message.length === 0){
            document.getElementById("requiredNotice").style.display = "block";
        }
        else{
            console.log("First Name: " + this.state.fName);
            console.log("Last Name: " + this.state.lName);
            console.log("Email: " + this.state.email);
            console.log("Message: " + this.state.message);
            console.log(document.getElementById("firstName").value.length);
            document.getElementById("requiredNotice").style.display = "none";
            document.getElementById("sentNotice").style.display = "block";
            setTimeout(() => {
                console.log("firstName: " + firstName);
                document.getElementById("sentNotice").style.display = "none";
                document.getElementById("firstName").value = '';
                document.getElementById("lastName").value = '';
                document.getElementById("email").value = '';
                document.getElementById("messageField").value = '';
            }, 3000);
        }
        event.preventDefault();
    }
}