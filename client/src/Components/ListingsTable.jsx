import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faCheck, faBan } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

    render() { 

        const { isAuthenticated } = this.props.auth;

        return (  
            <tr>
                <td>
                    {this.props.obj.title}
                </td>
                <td>
                    {this.props.obj.text}
                </td>
                <td>
                    {this.props.obj.date}
                </td>

                { isAuthenticated ? 

                <FontAwesomeIcon onClick={this.handleShowModal} icon={faMinusCircle}/> 

                : 

                <FontAwesomeIcon onClick={this.handleShowUnauthModal} icon={faMinusCircle} /> 

                }

                {this.state.modalShow ?  
            
                <Modal show={this.handleShowModal} onHide={this.handleHideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Warning!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete this listing?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={this.handleHideModal}>
                            Confirm <FontAwesomeIcon icon={faCheck}/>
                        </Button>
                        <Button variant="danger" onClick={this.handleHideModal}>
                            Go Back <FontAwesomeIcon icon={faBan} />
                        </Button>
                    </Modal.Footer>
                </Modal>

                : null } 
                
                {this.state.unauthModalShow ?
                
                <Modal show={this.handleShowUnauthModal} onHide={this.handleHideUnauthModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Unauthorized</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Only authorized users can perform this action.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.handleHideUnauthModal}>
                            Go Back <FontAwesomeIcon icon={faBan} />
                        </Button>
                    </Modal.Footer>
                </Modal>
                
                : null }
            </tr>
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