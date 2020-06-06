import React, { Component } from 'react';
import axios from 'axios';
import ListingsTable from './ListingsTable';
import { Table, Card } from 'react-bootstrap';
import styled from 'styled-components';

const NameTitle = styled.h1`
    font-weight: bold;
    display: flex;
    justify-content: center;
`;

const JobTitle = styled.h4`
    font-weight: 300;
    font-style: italic;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
`;

const LandingCardBackground = styled.div`
    padding: 1rem;
    margin: 1rem;
    background: papayawhip;
    border: 1px solid black;
`;

const EmptyLandingCardBackground = styled.div`
    padding: 1rem;
    margin: 1rem;
    display: flex;
    justify-content: center;
`;

const LandingWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

// New

const ProjectCardBackground = styled.div`
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

const ProjectName = styled.div`
    display: flex;
    justify-content: center;
    padding: auto 0.5rem;
    border: 1px solid black;
    border-radius: 5px;
    margin: 1rem;
`;

class Listings extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            listingsCollection: [],
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:5000/listings')
            .then(res => {
                this.setState({ listingsCollection: res.data })
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    listingsTable() {
        return this.state.listingsCollection.map((data, i) => {
            return <ListingsTable obj={data} key={i} />
        });
    };

    render() { 


        return (  
            <div>

<div>
                <ProjectName><h2>Projects</h2></ProjectName>
                <Wrapper>
                    <ProjectCardBackground>
                        <Card style={{ }}>
                        <Card.Img variant="top" />
                        <Card.Body>
                        <EmptyLandingCardBackground>
                                        {/* <img src={  } alt='profile'style={{boxShadow: '3px 3px 3px 4px gray'}}></img> */}
                                    </EmptyLandingCardBackground>
                                    <NameTitle>Title </NameTitle>
                                    <JobTitle>Sub title</JobTitle>
                            <Card.Title>
                                <a 
                                    href="https://github.com/TheCaptainFalcon/bingemasters-demo" 
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    >Bingemasters 
                                </a>
                            </Card.Title>
                            <Card.Title>Project Description:</Card.Title>
                            <Card.Text>
                                Bingemasters is an actor guessing game, where an image of an actor appears on the screen and players attempt to correctly identify the actor.
                            </Card.Text>
                            <Card.Text>
                                The goal of the game is to obtain the highest streak/score by consecutively answering correctly within the time limit. 
                                In addition, having a high streak allows the user to post to the leaderboard.
                            </Card.Text>
                            <Card.Text>
                                This was a fullstack capstone project, which was built in a 2-week time span.
                            </Card.Text>
                            <Card.Title>Primary Responsibilities:</Card.Title>
                            <Card.Text>
                                    Implemented React Redux and Passport Google oAuth as part of authentication and tracking cookie sessions; 
                                    used in allowing logged in users to view the leaderboard and to post to the leaderboard based on state passed as props. 
                            </Card.Text>
                            <Card.Title>Tech Stack:</Card.Title>
                            <Card.Text>
                                MERN stack (MongoDB, Express, React, Node.js)
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </ProjectCardBackground>
                    <ProjectCardBackground>
                        <Card style={{ }}>
                        <Card.Img variant="top" style={{marginBottom:'2rem'}}/>
                        <Card.Body>
                        <EmptyLandingCardBackground>
                                        {/* <img src={  } alt='profile'style={{boxShadow: '3px 3px 3px 4px gray'}}></img> */}
                                    </EmptyLandingCardBackground>
                                    <NameTitle>Title </NameTitle>
                                    <JobTitle>Sub title</JobTitle>
                            <Card.Title>
                                <a 
                                    href="https://github.com/TheCaptainFalcon/DC_Week14" 
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    >iBudget
                                </a>
                                </Card.Title>
                            <Card.Title>Project Description:</Card.Title>
                            <Card.Text>
                                iBudget is a budget calculator app that uses your monthly income and expenses to determine your daily/weekly/monthly/bi-weekly/annual budgets.
                                This mini solo project was built as a 1-week sprint using the React.js framework.
                            </Card.Text>
                            <Card.Title>Primary Responsibilities:</Card.Title>
                            <Card.Text>
                                Usage of spread operator to track single to multiple states of income/expense input fields. 
                                Implementation of a pie chart for visual UI.
                                React-Router for navbar navigation and tabs in a card setup per data analyis feature.
                            </Card.Text>
                            <Card.Title>Tech Stack:</Card.Title>
                            <Card.Text>
                                HTML, CSS, JS, React
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </ProjectCardBackground>
                    <ProjectCardBackground>
                        <Card style={{  }}>
                        <Card.Img variant="top" style={{marginBottom:'1rem'}}/>
                        <Card.Body>
                        <EmptyLandingCardBackground>
                                        {/* <img src={  } alt='profile'style={{boxShadow: '3px 3px 3px 4px gray'}}></img> */}
                                    </EmptyLandingCardBackground>
                                    <NameTitle>Title </NameTitle>
                                    <JobTitle>Sub title</JobTitle>
                            <Card.Title>
                                <a 
                                    href="https://github.com/jamariod/JobFinder" 
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    >JobFinder
                                </a>
                                </Card.Title>
                            <Card.Title>Project Description:</Card.Title>
                            <Card.Text>
                                Member of a 3-person team building a website that utilizes a database for registration and login authentication and obtains web scraped information from Indeed’s search parameters and results.
                            </Card.Text>
                            <Card.Title>Primary Responsibilities:</Card.Title>
                            <Card.Text>
                                Creating the skeleton code, using Cheerio to web scrape Indeed’s job listings, and interactivity between handlebars, es6-template-engine, and fetch requests using Axios.
                            </Card.Text>
                            <Card.Title>Tech Stack:</Card.Title>
                            <Card.Text>
                                HTML, CSS, JS, Node.js, Express, PostgreSQL
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </ProjectCardBackground>
                    <ProjectCardBackground>
                        <Card style={{ }}>
                        <Card.Img variant="top" style={{marginBottom:'1rem'}}/>
                        <Card.Body>
                        <EmptyLandingCardBackground>
                                        {/* <img src={  } alt='profile'style={{boxShadow: '3px 3px 3px 4px gray'}}></img> */}
                                    </EmptyLandingCardBackground>
                                    <NameTitle>Title </NameTitle>
                                    <JobTitle>Sub title</JobTitle>
                            <Card.Title>
                                <a 
                                    href="https://github.com/TheCaptainFalcon/Eventify-Deploy" 
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    >Eventify
                                </a>
                            </Card.Title>
                            <Card.Title>Project Description:</Card.Title>
                            <Card.Text>
                                Led development efforts in a 3-person team building a website that obtains popular events based in GA and shows their precise locations on a map.
                            </Card.Text>
                            <Card.Title>Primary Responsibilities:</Card.Title>
                            <Card.Text>
                                Researching and creating logic code, as well as data manipulation of Ticketmaster and Google Maps API through documentation and AJAX calls.
                            </Card.Text>
                            <Card.Title>Tech Stack:</Card.Title>
                            <Card.Text>
                                HTML, CSS, JS, jQuery
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </ProjectCardBackground>
                </Wrapper>
             
            </div>

                <div style={{marginTop:'4rem'}}/>
                
                <div style={{backgroundColor: ''}}>
                    <LandingWrapper> 
                        <LandingCardBackground>
                            <Card style={{ maxWidth: '50rem' }}>
                                <Card.Body>
                                    <EmptyLandingCardBackground>
                                        {/* <img src={  } alt='profile'style={{boxShadow: '3px 3px 3px 4px gray'}}></img> */}
                                    </EmptyLandingCardBackground>
                                    <NameTitle>Title </NameTitle>
                                    <JobTitle>Sub title</JobTitle>
                                    <Card.Text>
                                    <Table striped responsive>
                                        <thead>
                                            <tr>
                                                <td>Title</td>
                                                <td>Text</td>
                                                <td>Address</td>
                                                <td>City</td>
                                                <td>State</td>
                                                <td>Zip</td>
                                                <td>BR</td>
                                                <td>BA</td>
                                                <td>Price</td>
                                                <td>Date Posted</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.listingsTable()}
                                        </tbody>
                                    </Table>
                                      
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </LandingCardBackground>
                    </LandingWrapper>
               

                <Card style={{ width: '50rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    <Table striped responsive>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Text</td>
                            <td>Address</td>
                            <td>City</td>
                            <td>State</td>
                            <td>Zip</td>
                            <td>BR</td>
                            <td>BA</td>
                            <td>Price</td>
                            <td>Date Posted</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.listingsTable()}
                    </tbody>
                </Table>
                    </Card.Text>
                    
                </Card.Body>
                </Card>
                
                <Table striped responsive>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Text</td>
                            <td>Address</td>
                            <td>City</td>
                            <td>State</td>
                            <td>Zip</td>
                            <td>BR</td>
                            <td>BA</td>
                            <td>Price</td>
                            <td>Date Posted</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.listingsTable()}
                    </tbody>
                </Table>
            </div>
            </div>
        );
    }
}
 
export default Listings;