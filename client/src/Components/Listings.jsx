import React, { Component } from 'react';
import axios from 'axios';
import ListingsTable from './ListingsTable';
import { Table, Card } from 'react-bootstrap';
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
                console.log(res.data)
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
                <Wrapper>
                    <CardBackground>
                        <Card>
                            <Card.Img variant="top" style={{marginBottom:'2rem'}}/>
                            <Card.Body>
                                <MainTitle>Listings Directory </MainTitle>
                                <SubTitle>Results Found: {this.state.listingsCollection.count}</SubTitle>
                                <Card.Text>
                                    <Table striped responsive style={{minWidth: '20rem'}}>
                                        <tbody>
                                            {this.listingsTable()}
                                        </tbody>
                                    </Table>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardBackground>
                </Wrapper>
            </div>                    
        )
    }
}

export default Listings;