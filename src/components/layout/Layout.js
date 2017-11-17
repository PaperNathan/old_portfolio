import React, { Component } from 'react';
import styled from 'styled-components';

// import components
import Nav from './../nav/Nav';
import Footer from './../footer/Footer';

//import crumbs (independently styled elements)
import { Container, SplashContainer } from './Container';
import { NormalText, TitleText, Title } from './../../crumbs/formatting/Text';
import { Button, ButtonContainer } from "./../../crumbs/interactive/Button";

import logo from './../../logo.svg';

class Layout extends Component {
  componentWillMount () {
    const script = document.createElement("script");

    script.src = "./../../../public/helpers.js";
    // script.async = true;s

    document.body.appendChild(script);
  }

  render() {
    return (
      <Container>
        <Nav />

        <SplashContainer>
          <div className="wrapper"></div>
        </SplashContainer>

        <TitleText>nathan wade</TitleText>

        <Footer />
      </Container>
    );
  }
}

export default Layout;
