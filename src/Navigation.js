import React, { Component } from 'react'


class Navigation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sidebarOpen: true
    }
    this.w3_close = this.w3_close.bind(this)
    this.w3_open = this.w3_open.bind(this)
  }

  w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
    // this.setState({ sidebarOpen: false })

  }

  w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
    // this.setState({ sidebarOpen: true })
  }

  render() {
    return (
      <div>

        <nav
          className="w3-sidebar w3-bar-block w3-white w3-animate-left w3-text-grey w3-collapse w3-top w3-center w3-border w3-card-4"
          style={{zIndex:3,width:'300px',fontWeight:'bold',}}
          id="mySidebar"
        >
          <h3 className="w3-padding-64 w3-center"><b>DOGGIE<br/>HEAVEN</b></h3>
          <hr />
          {/* <a href="javascript:void(0)" onClick={this.w3_close} className="w3-bar-item w3-button w3-padding w3-hide-large">CLOSE</a> */}
          <a href="#" onClick={this.w3_close} className="w3-bar-item w3-button">DOGGIES</a>
          <a href="#about" onClick={this.w3_close} className="w3-bar-item w3-button">ABOUT ME</a>
          <a href="#contact" onClick={this.w3_close} className="w3-bar-item w3-button">CONTACT</a>
        </nav>


        {/* Top menu on small screens */}
        <header className="w3-container w3-top w3-hide-large w3-white w3-xlarge w3-padding-16 w3-border w3-card-4">
          <span className="w3-left w3-padding">DOGGIE HEAVEN</span>
          <a href="javascript:void(0)" className="w3-right w3-button w3-white" onClick={this.w3_open}>☰</a>
        </header>


          <div className="w3-overlay w3-hide-large w3-animate-opacity" onClick={this.w3_close} style={{cursor:'pointer'}} title="close side menu" id="myOverlay"></div>


      </div>
    )
  }
}


export default Navigation
