import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
  const client = createRestApiClient().withConfig({
    baseURL: apiEndpoint //apiEndpoint is http://localhost:5000 
  });
  return {
    getSelectedOptionsRequests: () => client.request({
      method: 'GET',
      url: '/selectedoptions'
    }),
    deleteSelectedOptionsRequest: ({id}) => client.request({
      method: 'DELETE',
      url: `/selectedoptions/${id}`
    }),
    updateSelectedOptionsRequest: ({id, data}) => client.request({
      method: 'PUT',
      url: `/selectedoptions/${id}`,
      data
    }),
    createSelectedOptionsRequest: ({id, data}) => client.request({
      method: 'POST',
      url: `/selectedoptions/${id}`,
      data
    })
  };
};

