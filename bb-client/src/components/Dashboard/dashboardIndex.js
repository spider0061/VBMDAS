import React, { Component } from "react";
import Footer from "./../home/Footer";
import Navbar from "./../home/Navbar";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    //get auth data from props
    const { loggedIn, email } = this.props;

    return (
      <div>
        <Navbar logged={loggedIn} userName={email} />
        <br />
        Hacker Dashboard
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid ? true : false,
  email: firebase.auth.email ? firebase.auth.email : null
});

export default connect(mapStateToProps)(Dashboard);
