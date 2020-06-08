import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const MainTitle = styled.h1`
    font-weight: bold;
    display: flex;
    justify-content: center;
`;

const SubTitle = styled.h4`
    font-weight: 300;
    font-style: italic;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
`;

const CardBackground = styled.div`
    padding: 1rem;
    margin: 1rem;
    background: papayawhip;
    border: 1px solid black;
`;

const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const CardText = styled.p`
    display: flex;
    justify-content: center;
    font-weight: bold;
    margin: auto auto 0.5rem auto;
`;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  

        }
    }

    render() { 
        return (  
            <div className='Home'>
                <Wrapper>
                    <CardBackground>
                        <Card>
                            <Card.Body>
                            <MainTitle>Property Listing</MainTitle>
                            <SubTitle>A (small) simple real estate listing project</SubTitle>
                            <Card.Title>Features:</Card.Title>
                                <ul style={{marginBottom: '2rem'}}>
                                    <li>Built using the MERN stack</li>
                                    <li>Authentication using Passport.js and JSON Web Tokens (JWT).</li>
                                    <li>Registration/Login and Adding listings with their own associated validations (edge-cases) in place.</li>
                                    <li>Protected routes + actions limited to logged-in users.</li>
                                </ul>
                                <CardText>Click here to see the code:</CardText>
                                <CardText><a href='https://github.com/TheCaptainFalcon'>https://github.com/TheCaptainFalcon</a></CardText>
                            </Card.Body>
                        </Card>
                    </CardBackground>
                </Wrapper>
            </div>
        );
    }
}
 
export default Home;