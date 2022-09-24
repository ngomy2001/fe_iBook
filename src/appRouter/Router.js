import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LibrarianMainLayout from '../components/mainLayout/LibrarianLayout/LibrarianMainLayout';
import CategoryPageForLibrarian from '../components/CategoryPage/index';
import AuthorPageForLibrarian from '../components/AuthorPage/index';
import PublisherPageForLibrarian from '../components/PublisherPage/index';
import UserPageForLibrarian from '../components/UserPage/index';
import BookPageForLibrarian from '../components/BookPage/index';
import MemberMainLayout from '../components/mainLayout/MemberLayout/MemberMainLayout';
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
        <Route path="/librarian/publisher" element={<LibrarianMainLayout />}>
          <Route index element={<PublisherPageForLibrarian />}></Route>
        </Route>
        <Route path="/librarian/user" element={<LibrarianMainLayout />}>
          <Route index element={<UserPageForLibrarian />}></Route>
        </Route>
        <Route path="/librarian/book" element={<LibrarianMainLayout />}>
          <Route index element={<BookPageForLibrarian />}></Route>
        </Route>
        <Route path="/member/" element={<MemberMainLayout />}>
          <Route index element={<BookPageForLibrarian />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
