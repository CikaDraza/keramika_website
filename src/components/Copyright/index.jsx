import React from 'react';
import Link from 'next/link';

export default function Copyright() {
  return (
    <p>
      {`© ${new Date().getFullYear()}`}
      {'.'}
      {' '}
      Sva prava zadržava Keramika Živojinov
      {' '}
      {' | '}
      Powerd By
      {' '}
      <Link href="">
        DMDevelo.com
      </Link>
    </p>
  )
}
