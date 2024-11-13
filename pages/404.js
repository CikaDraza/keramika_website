import React from 'react';
import Link from 'next/link';

const statusCodes = {
  404: 'This page could not be found'
};

function getInitialProps( req, res) {
  const statusCode = req && req.statusCode ? req.statusCode : res ? err.statusCode : 404;
  return {
    statusCode
  };
}

export default function Error() {
  const status = getInitialProps();

  return (
    <main className="error-page">
      <div className="wrapper">
        <h2 className="error-page__status">
          {status.statusCode} | {statusCodes[status.statusCode]}
        </h2>
        <div className="buttons">
          <button className="buttons__action action--blue">
            <Link href="/" passHref>Nazad na sigurno</Link>
          </button>
        </div>
      </div>
    </main>
  )
}