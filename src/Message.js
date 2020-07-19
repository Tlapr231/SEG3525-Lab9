import React, { Component } from 'react';

// PROPS { user, conversations, users }
class Message extends Component {
    state = {
        onMessage: null
    }

    handleChange = (e) => {
        this.setState({
            onMessage: e
        });
    }

    render() {

        let myMessages = []

        for (let i = 0; i < this.props.conversations.length; i++) {
            for (let j = 0; j < this.props.conversations[i].participants.length; j++) {
                if (this.props.conversations[i].participants[j] === this.props.user.id) {
                    myMessages.push(this.props.conversations[i]);
                }
            }
        }

        const messages = myMessages.map(messages => {
            let partNames = []

            for (let i = 0; i < messages.participants.length; i++) {

                for (let j = 0; j < this.props.users.length; j++) { //Get all participants name
                    if (messages.participants[i] === this.props.users[j].id && messages.participants[i] !== this.props.user.id) {
                        partNames.push(this.props.users[j].name)
                    }
                }

            }

            const parts = partNames.map(participant => {
                return (
                    <p className="participants mb-0" key={participant}>{participant},&nbsp;</p>
                )
            })

            return (
                <div className="row m-2" key={messages.id}>
                    <button className="btn btn-secondary block" onClick={() => { this.handleChange(messages) }}>
                        {parts}
                    </button>
                </div>

            )
        })


        if (this.state.onMessage === null) {    //If no messages are selected
            return (
                <div>
                    <h1 className="text-center mb-4">Messages</h1>

                    <div className="row">
                        <div className="col-3 border-right">
                            {messages}
                        </div>
                        <div className="col-9">
                            <h4 className="text-center">Choose a conversation on the left.</h4>
                        </div>
                    </div>
                </div>
            )
        }

        let me = this.props.user.id
        let other = new Object()

        for (let i = 0; i < this.state.onMessage.participants.length; i++) {       //finds the name of the participants

            for (let j = 0; j < this.props.users.length; j++) { //Get all participants name
                if (this.state.onMessage.participants[i] === this.props.users[j].id && this.state.onMessage.participants[i] !== this.props.user.id) {
                    other[this.state.onMessage.participants[i]] = this.props.users[j].name
                }
            }

        }

        const convo = this.state.onMessage.messages.map(text => {   //Generates the convo on the right
            if (text.userId === me) {
                return (
                    <div className="row mt-1">
                        <span className="col-7"></span>
                        <p className="col-4 rounded bg-primary text-light"><b>You: </b>{text.message}</p>
                    </div>
                )
            } else {
                return (
                    <div className="row mt-1">
                        <span className="col-1"></span>
                        <p className="rounded bg-secondary col-4 text-light"><b>{other[text.userId]}: </b> {text.message}</p>
                    </div>
                )
            }
        })

        return (
            <div>

                <h1 className="text-center mb-4 col">Messages</h1>
                <div className="row">
                    <div className="col-3 border-right">
                        {messages}
                    </div>

                    <div className="col-9 rounded border-secondary bg-dark p-1">
                        {convo}
                    </div>

                </div>
            </div>
        )
    }

}

export default Message;