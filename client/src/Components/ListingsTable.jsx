import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faCheck, faBan } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Axios from 'axios';
import styled from 'styled-components';

const BoldTD = styled.td`
    font-weight: bolder;
`;

class ListingsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            modalShow : false,
            unauthModalShow : false
        }
        
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleHideModal = this.handleHideModal.bind(this);
        this.handleShowUnauthModal = this.handleShowUnauthModal.bind(this);
        this.handleHideUnauthModal = this.handleHideUnauthModal.bind(this);
        this.deleteListing = this.deleteListing.bind(this);
        
    }

    handleShowModal() {
        this.setState({
            modalShow : true
        });
    };

    handleHideModal() {
        this.setState({
            modalShow : false
        });
    };

    handleShowUnauthModal() {
        this.setState({
            unauthModalShow : true
        });
    };

    handleHideUnauthModal() {
        this.setState({
            unauthModalShow : false
        });
    };

    deleteListing() {
        Axios.delete(`http://localhost:5000/listings/${this.props.obj._id}`)
            .then(res => console.log(res))
            .then(this.setState({ modalShow : false }))
            .then(window.location.reload())
            .catch(err => console.log(err))
    };
    
    render() { 

        const { isAuthenticated } = this.props.auth;

        return (  
            <>
            <br/>
                <tr>
                    <BoldTD>Address</BoldTD>
                    <BoldTD>City</BoldTD>
                    <BoldTD>State</BoldTD>
                    <BoldTD>Zip</BoldTD>
                </tr>
                <tr>
                    <td>
                        {this.props.obj.address}
                    </td>
                    <td>
                        {this.props.obj.city}
                    </td>
                    <td>
                        {this.props.obj.state}
                    </td>
                    <td>
                        {this.props.obj.zip}
                    </td>
                </tr>
                <tr>
                    <BoldTD>BR</BoldTD>
                    <BoldTD>BA</BoldTD>
                    <BoldTD>Price</BoldTD>
                    <BoldTD>Date Posted</BoldTD>
                </tr>
                <tr>
                    <td>
                        {this.props.obj.br}
                    </td>
                    <td>
                        {this.props.obj.ba}
                    </td>
                    <td>
                        ${this.props.obj.price}
                    </td>
                    <td>
                        {this.props.obj.date}
                    </td>

                    { isAuthenticated ? 
                    <td style={{border: 'none'}}>
                        <FontAwesomeIcon onClick={this.handleShowModal} icon={faMinusCircle}/> 
                    </td>

                    : null }

                    {this.state.modalShow ?  
                
                    <Modal show={this.handleShowModal} onHide={this.handleHideModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Warning!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure you want to delete this listing?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={this.deleteListing}>
                                Confirm <FontAwesomeIcon icon={faCheck}/>
                            </Button>
                            <Button variant="danger" onClick={this.handleHideModal}>
                                Go Back <FontAwesomeIcon icon={faBan} />
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    : null } 
                </tr>
            </>
        );
    }
}

ListingsTable.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, {}) (ListingsTable);