import React, { Component } from 'react';
import Page from '../pages/Page';
import ShowDocsContainer from '../containers/ShowDocsContainer';

class ShowDocsPage extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'YMTM | Documents';
  };

  pageMeta = () => {
    return [
      {
        name: 'description',
        content: 'generate a list of application documents required by YMTM'
      }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <ShowDocsContainer {...this.props} />
      </Page>
    );
  }
}

export default ShowDocsPage;

