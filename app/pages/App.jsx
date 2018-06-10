import React, { Component } from 'react';
import Page from '../pages/Page';
import AppContainer from '../containers/App';
import { title, meta, link } from './assets';

// const App = props => (

class App extends Component {


  componentDidMount() {
    console.log("AppPage componentDidMount");
  }
  componentDidUpdate() {
    console.log("AppPage componentDidUpdate");
  }

  render() {
    return (
      <Page title={title} meta={meta} link={link}>
        <AppContainer {...this.props} />
      </Page>
    )
  }

}
// );

export default App;
