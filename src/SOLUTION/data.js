/**
 * Simply solution is always better :)
 * But now what about a huge scale, or a hash?
 */
let lastIndex = 0;
const id = () => {
  return ++lastIndex;
};

export const data = [
  {
    id: id(),
    firstName: "Johannes",
    lastName: "Brahms"
  },
  {
    id: id(),
    firstName: "Erik",
    lastName: "Satie"
  },
  {
    id: id(),
    firstName: "Frederic",
    lastName: "Chopin"
  }
];
