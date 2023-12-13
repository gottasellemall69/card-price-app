import { next } from 'next';
import { NextResponse } from 'next/server';
const allowedOrigins=[
  'http://localhost:3000',
  'https://sportscardspro.com',
  'https://db.ygoprodeck.com/api/v7/cardinfo.php?tcgplayer_data=true'
];

export function middleware ( req, res )
{
  const nonce = Buffer.from( crypto.randomUUID() ).toString( 'base64' )
  const res=next();
  const origin = req.headers.get( 'origin' );
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${ nonce }' 'strict-dynamic';
    style-src 'self' 'nonce-${ nonce }';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
`
  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace( /\s{2,}/g, ' ' )
    .trim();

  const requestHeaders = new Headers( request.headers );
  requestHeaders.set( 'x-nonce', nonce );
  requestHeaders.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  )

  if(allowedOrigins.includes(origin,)) {
    res.headers.set('Content-Security-Policy','script-src ...; object-src \'none\'');
    res.headers.set('Access-Control-Allow-Origin',origin);
    res.headers.set('Content-Type','application/json');
    res.headers.set('Content-Encoding','*');
    res.headers.set('Access-Control-Allow-Credentials','false');
    res.headers.set('Accept-Encoding','gzip, deflate, br');
    res.headers.set('Access-Control-Allow-Methods','GET');
    res.headers.set(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
  }

  return res;
}

export const config={
  api: {
    bodyParser: false,
  },
};