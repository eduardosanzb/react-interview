const id = () => Math.random().toFixed(1) * 10;

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
