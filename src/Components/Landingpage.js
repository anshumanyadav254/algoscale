import React, { Component } from "react";

import FacebookLogin from "react-facebook-login";

import GoogleLogin from "react-google-login";
import { Redirect } from 'react-router-dom'


class Landingpage extends Component {

    state = {
        redirect: null
      }
      setRedirect = () => {
        this.setState({
          redirect: "/contact"
        })
      }
      

  render() {
    const responseFacebook = (response) => {
      console.log(response);
    };

   const renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to={this.state.redirect} />
        }
      }

    const responseGoogle = (response) => {
      
      console.log(response);
    };

    return (
      <div className="App">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

        <FacebookLogin
          appId="270009391205372" //APP ID NOT CREATED YET
          autoLoad={false}

          fields="name,email,picture"
          callback={responseFacebook}
        />
        <br />
        <br />

        <GoogleLogin
          clientId="15828300144-14mtu29gd3kepgmtip2b1b03mtul94kp.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={renderRedirect}
          onFailure={responseGoogle}
        />
      </div>
    );
  }
}

export default Landingpage;
