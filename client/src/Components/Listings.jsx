import React, { Component } from 'react';
import axios from 'axios';
import ListingsTable from './ListingsTable';

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
                <table>
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
                </table>
            </div>
        );
    }
}
 
export default Listings;