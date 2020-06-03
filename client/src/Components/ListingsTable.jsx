import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faCheck, faBan } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';

class ListingsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            modalShow : false,
        }
        
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleHideModal = this.handleHideModal.bind(this);
        
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

    render() { 
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

                <FontAwesomeIcon onClick={this.handleShowModal} icon={faMinusCircle}/>

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

                : null}
            </tr>
        );
    }
}
 
export default ListingsTable;