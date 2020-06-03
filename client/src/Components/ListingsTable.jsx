import React, { Component } from 'react';

class ListingsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <tr>
                <td>
                    {this.props.title}
                </td>
                <td>
                    {this.props.text}
                </td>
            </tr>
        );
    }
}
 
export default ListingsTable;