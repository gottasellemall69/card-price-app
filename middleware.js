import { next } from 'next';

const allowedOrigins=[
  'http://localhost:3000',
  'https://sportscardspro.com'
];

export function middleware(req,res) {
  const res=next();
  const origin=req.headers.get('origin');

  if(allowedOrigins.includes(origin)) {
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