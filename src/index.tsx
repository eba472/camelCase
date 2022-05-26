import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Members from './routes/Members';
import LectureNotes from './routes/LectureNotes';
import UsefulLinks from './routes/Useful';
import Others from './routes/Others';
import Lecture from './components/Lecture';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='members' element={<Members />} />
          <Route path='lectures' element={<LectureNotes />}>
            <Route path=':lectureId' element={<Lecture />} />
          </Route>
          <Route path='useful' element={<UsefulLinks />} />
          <Route path='others' element={<Others />} />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
