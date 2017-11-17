import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`{
    width: 100vw;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}`  

const SplashContainer = styled.div`{
    width: 100vw;
    height: 100vh;
    background: #333;

    position: absolute;
    z-index: -1;
}`

export { Container, SplashContainer };
