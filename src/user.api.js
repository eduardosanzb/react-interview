import { data } from "./data";
const TIME = 100000;
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
export const fullDogData = id =>
  new Promise(resolve => setTimeout(resolve(normalize(data)[id]), TIME));

/**
 * @promise {Array}
 * @example
 * [{ id: '2344' }, ...]
 *
 */
export const doggiesAPI = () =>
  new Promise(resolve =>
    setTimeout(resolve(data.map(({ id }) => ({ id }))), TIME)
  );
