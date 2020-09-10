import React, { Component } from 'react';
import {connect} from 'react-redux';
import language from '../translationlang';
// import the component
import Mailchimp from 'react-mailchimp-form'
 
class mailChimp extends Component {
  render() {
    const { lang } = this.props;
    return (
        <Mailchimp
        action='https://one.us17.list-manage.com/subscribe/post?u=fd70c7f5c39a43acbedb49253&amp;id=7f8e2dbc48' 
        
        //Adding multiple fields:
        fields={[
          {
            name: 'EMAIL',
            placeholder: language[lang].enter_your_mail,
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
            button: language[lang].subscribe,
          }
        }
        // Add a personalized class
        className='mail-chimp'
        />
    );
  }
}
 

const mapStateToProps = state => {
  return {
      lang: state.language.language,
  }
};

export default connect(mapStateToProps)(mailChimp);