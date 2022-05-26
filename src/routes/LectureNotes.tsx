import { Outlet } from 'react-router-dom';
import LectureList from '../components/LectureList';

const LectureNotes = () => {
  return (
    <div>
      <h1>Lecture notes</h1>
      <h4>
        We have knowledge sharing session at every Thursday and Sunday at 22:00
        JST 😀{' '}
      </h4>
      <LectureList />
      <Outlet />
    </div>
  );
};

export default LectureNotes;
