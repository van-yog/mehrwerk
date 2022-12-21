import React from 'react';
import useToken from '../../../../hooks/useToken';
import Spinner from '../../../../components/Spinner';

const AccessToken = () => {
  const { token, error } = useToken();
  return (
    <div className="access_token">
      <h3 className="access_token__title">Response:</h3>
      {token === undefined ? (
        <Spinner />
      ) : (
        <div className="access_token__response">
          {error ? (
            error.message
          ) : (
            <>
              <b>Access token:</b> {token}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AccessToken;
