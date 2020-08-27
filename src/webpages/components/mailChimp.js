import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'
 
class mailChimp extends Component {
  render() {
    return (
        <Mailchimp
        action='#' 
        
        //Adding multiple fields:
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Enter Your Email',
            type: 'email',
            required: true
          }
        ]}
        // Change predetermined language
        messages = {
          {
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred.",
            empty: "You must write an e-mail.",
            duplicate: "Too many subscribe attempts for this email address",
            button: "SUBSCRIBE"
          }
        }
        // Add a personalized class
        className='mail-chimp'
        />
    );
  }
}
 
export default mailChimp;