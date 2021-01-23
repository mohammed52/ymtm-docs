import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
// import Navigation from '../containers/Navigation';
// import Message from '../containers/Message';
import styles from "../css/main";
import ymtm from "../images/ymtm.png";
import favicon from "../images/favicon.png";
// import MEK from '../images/MEK.png';

var ReactBootstrap = require("react-bootstrap");
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;
var Nav = ReactBootstrap.Nav;
var MenuItem = ReactBootstrap.MenuItem;

// using SendGrid's v3 Node.js Library

// const cx = classNames.bind(styles);

/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
// const App = ({children}) => {
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cssHasLoaded: false,
    };
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    console.log("AppContainer componentDidMount");

    window.addEventListener("load", this.handleLoad);
  }
  handleLoad() {
    console.log("handleLoad"); //  $ is available here
    this.setState({
      cssHasLoaded: true,
    });
  }

  componentDidUpdate() {
    console.log("AppContainer componentDidUpdate");
    const ss = document.styleSheets;
    console.log("ss.length", ss.length);
  }

  render() {
    return (
      <div>
        {!this.state.cssHasLoaded ? (
          <div />
        ) : (
          <div className={styles.mainWrapper}>
            <div className={styles.headerWrapper2}>
              <div className={styles.headerWrapper}>
                <img src={ymtm} width="90" height="90" className="img-fluid" />
                <strong> Helpline: 0300-2182932</strong>
              </div>
            </div>
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
};

export default App;
