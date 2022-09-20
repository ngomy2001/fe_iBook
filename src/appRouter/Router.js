import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LibrarianMainLayout from '../components/mainLayout/LibrarianMainLayout';
import CategoryPageForLibrarian from '../components/CategoryPage/index';
import AuthorPageForLibrarian from '../components/AuthorPage/index';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/librarian/category" element={<LibrarianMainLayout />}>
          <Route index element={<CategoryPageForLibrarian />}></Route>
        </Route>
        <Route path="/librarian/author" element={<LibrarianMainLayout />}>
          <Route index element={<AuthorPageForLibrarian />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
