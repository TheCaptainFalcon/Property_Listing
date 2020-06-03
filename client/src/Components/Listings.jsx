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
                            <td>First sample</td>
                            <td>Second sample</td>
                            <td>Third sample</td>
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