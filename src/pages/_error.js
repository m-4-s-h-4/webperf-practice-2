import * as Sentry from "@sentry/react";
import React from 'react';

function Error({ statusCode }) {
  if (statusCode === 500) {
    Sentry.captureException(new Error(`Server Error: ${statusCode}`));
  }

  return (
    <div className="error-page">
      {statusCode === 500 ? (
        <p>server error</p>
      ) : (
        <p>error {statusCode} occurred </p>
      )}
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
