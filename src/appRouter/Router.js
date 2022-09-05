import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LibrarianMainLayout from '../components/mainLayout/LibrarianMainLayout';
import BookPage from '../components/bookPage/BookPage';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LibrarianMainLayout />}>
          <Route index element={<BookPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
