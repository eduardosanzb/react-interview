import { data } from "./data";
const TIME = 10000;
const normalize = () => data.reduce((seed, u) => ({ ...seed, [u.id]: u }), {});

/**
 * Returns
 * @param {string} id
 * @promise {Object}
 * @example
 * {
 *   id: '2344',
 *   firstName: 'Chet',
 *   lastName: 'Baker',
 * }
 */
export const user = id =>
  new Promise(resolve => setTimeout(resolve(normalize(data)[id]), TIME));

/**
 * @promise {Array}
 * @example
 * [{
 *   id: '2344',
 *   firstName: 'Chet',
 *   lastName: 'Baker',
 *   }, ...]
 *
 */
export const users = () =>
  new Promise(resolve => setTimeout(resolve(data), TIME));
