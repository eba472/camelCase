import { Outlet } from 'react-router-dom';
import LessonListCustom from '../components/LessonListCustom';

const lessonNotes = () => {
  return (
    <div>
      <h1>Lecture notes</h1>
      <h4>
        We have knowledge sharing session at every Thursday and Sunday at 22:00
        JST 😀{' '}
      </h4>
      <div style={{display: 'flex'}}>
        <LessonListCustom />
        <div style={{ border: '1px solid black', width: '100%', margin: '0px 20px' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default lessonNotes;
