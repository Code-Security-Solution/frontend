import authHandler from './auth';
import semgrepHandler from './semgrep';

const handlers = [...authHandler, ...semgrepHandler];

export default handlers;
