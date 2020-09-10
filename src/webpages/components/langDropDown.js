import React, { Component } from 'react';
import { connect } from 'react-redux';

import flag from '../../assets/usa.png';
import Rflag from '../../assets/Flag_of_Russia.svg';
import NavDropdown from 'react-bootstrap/NavDropdown'

class LangDropDown extends Component {
    constructor(props){
        super(props);
        this.state = {
            Locale: 'en',
            flag : flag,
        }
        this.handleLanguage = this.handleLanguage.bind(this);
    }
    handleLanguage(event){
        localStorage.setItem("lang",event.target.id);
        let Flag = flag;
        switch(event.target.id){
            case 'vi': Flag =Rflag; break;
            default: Flag =flag; break;
        }
        this.setState({Locale: event.target.id,  flag: Flag});
        this.props.changeLanguage(event.target.id);
    }

    render() {
        const { lang } = this.props;
        // if(lang!==this.state.Locale){
        //     this.setState({Locale: lang})
        // }
        return (
            <li className="lang-dropdown">
            <NavDropdown title={lang} id="basic-nav-dropdown">
                <NavDropdown.Item className={lang ==='en' ? "active" :''} id='en' onClick={this.handleLanguage}>
                            English
                </NavDropdown.Item>
                <NavDropdown.Item className={lang ==='vi' ? "active" :''} id='vi' onClick={this.handleLanguage}>Vietnamese</NavDropdown.Item>
              
            </NavDropdown>
                </li>
            
        );
    }
}
const mapStateToProps = state => {
    return {
        lang: state.language.language
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeLanguage: (lang) => dispatch({type: 'changeLanguage', value: {lang}})
    };
  }
export default connect(mapStateToProps,mapDispatchToProps)(LangDropDown);