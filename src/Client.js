import React, { Component } from  'react';
import { BrowserRouter as Router, Link } from 'react-router';

class Client extends Component {
    constructor(props){
        super(props);
        this.state = {
    
        }
    }


    render(){    

        geolocation()
            

         
        return (
            <div>     

            </div>
            
        );
    }
}

function showPosition(position) {
    var coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
}

function getLocation() {
    if (navigator.geolocation) {
        console.log(navigator.geolocation.getCurrentPosition(showPosition));
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}


export default Client;