import React, { Component } from 'react'
import NewYorkTimes from '../components/newYorkTimes.js'
import { connect } from 'react-redux'

class InspirationContainer extends Component {
    render(){
      return (
        <div className="block" id="inspiration-container">
          <p>INSPIRATION</p>
        </div>
      );
    }
}

export default InspirationContainer;
