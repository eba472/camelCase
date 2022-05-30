interface lessonsType {
  index: number;
  title: string;
  owner: string;
  date: Date;
}
export const lessons: lessonsType[] = [
  {
    index: 1,
    title: 'Python String operations',
    owner: 'Eba',
    date: new Date('2019-05-04'),
  },
  {
    index: 2,
    title: 'Python Array operations',
    owner: 'Eba',
    date: new Date('2019-05-07'),
  },
  {
    index: 3,
    title: 'Binary search',
    owner: 'Eba',
    date: new Date('2019-05-11'),
  },
  {
    index: 4,
    title: 'Frequency counter',
    owner: 'Tseso',
    date: new Date('2019-05-15'),
  },
  {
    index: 5,
    title: 'Greedy algorithm',
    owner: 'Jagaa',
    date: new Date('2019-05-19'),
  },
  {
    index: 6,
    title: 'Link shortener',
    owner: 'Eba',
    date: new Date('2019-05-23'),
  },
  {
    index: 7,
    title: 'Linked list + LRU caching',
    owner: 'Eba',
    date: new Date('2019-05-26'),
  },
  {
    index: 8,
    title: 'Binary tree and BFS',
    owner: 'Tseso',
    date: new Date('2019-05-29'),
  },
  {
    index: 9,
    title: 'Bit manipulations',
    owner: 'Eba',
    date: new Date('2019-06-02'),
  },
];
