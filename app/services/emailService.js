import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
  const client = createRestApiClient().withConfig({
    baseURL: apiEndpoint
  });
  return {
    sendEmailWithDocs: ({data}) => client.request({
      method: 'POST',
      url: '/senddocstoemail',
      data
    })
  // ,
  // sendTestEmail: () => client.request({
  //   method: 'GET',
  //   url: '/testemail'
  // })
  };
};

