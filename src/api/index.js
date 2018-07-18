import moduleOne from './module-1';

function merge(...sources) {
  return Object.assign({}, ...sources);
}
const api = merge(
  { ...moduleOne },
);
export default api;

