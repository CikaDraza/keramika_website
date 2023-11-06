import React from 'react';
import Link from 'next/link';

export default function Copyright() {
  return (
    <p>
      {`© ${new Date().getFullYear()}`}
      {'.'}
      {' '}
      Sva prava zadržava Keramičar Lale
      {' '}
      {' | '}
      Powerd By
      {' '}
      <Link href="https://www.linkedin.com/in/milan-dražić-1b64a1279/">
        DMDevelo
      </Link>
    </p>
  )
}
