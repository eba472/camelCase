import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';

interface lecture {
  index: number;
  title: string;
}
const lectures: lecture[] = [
  {
    index: 1,
    title: 'Python String operations',
  },
  {
    index: 2,
    title: 'Python Array operations',
  },
  {
    index: 3,
    title: 'Binary search',
  },
  {
    index: 4,
    title: 'Frequency counter',
  },
  {
    index: 5,
    title: 'Greedy algorithm',
  },
  {
    index: 6,
    title: 'Link shortener',
  },
  {
    index: 7,
    title: 'Linked list + LRU caching',
  },
];
const LectureList = () => {
  return (
    <div style={{ padding: 20, border: '1px solid black' }}>
      <List dense={true}>
        {lectures.map((lecture) => (
          <ListItem key={lecture.index}>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText>
              <a
                style={{ textDecoration: 'None', color: 'blue' }}
                href={`/lectures/${lecture.index}`}
              >{`${lecture.index}. ${lecture.title}`}</a>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default LectureList;
