import React from 'react';
import { api } from '../../../../assets/api/api';

const RequestInfo = () => {
  const { url } = api.token;

  return (
    <div className="request_info">
      <h3 className="request_info__title">Request:</h3>
      <p>
        <b>POST:</b> {url}
      </p>
      <p>
        <b>Header API Key: </b>
        X-API-KEY : {process.env.REACT_APP_X_API_KEY}
      </p>
      <p>
        <b>Body JSON:</b>
      </p>
      <pre>
        {`{
client_id: 'bewerber',
client_secret: 'hj52Ws4kF',
grant_type: 'client_credentials',
}
`}
      </pre>
    </div>
  );
};

export default RequestInfo;
