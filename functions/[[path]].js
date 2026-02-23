// For Vercel deployment
import { createRequestHandler } from '@remix-run/node';
import * as build from '../build/server/index.js';

const handler = createRequestHandler({ build });

export default handler;


