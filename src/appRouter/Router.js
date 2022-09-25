import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* Main Layout */
import LibrarianMainLayout from '../components/mainLayout/LibrarianLayout/LibrarianMainLayout';
import MemberMainLayout from '../components/mainLayout/MemberLayout/MemberMainLayout';

/* Category Page */
import CategoryPageForLibrarian from '../components/CategoryPage/index';
import CategoryPageForMember from '../components/CategoryPage/memberIndex';

/* Author Page */
import AuthorPageForLibrarian from '../components/AuthorPage/index';
import AuthorPageForMember from '../components/AuthorPage/memberIndex';

/* Publisher Page */
import PublisherPageForLibrarian from '../components/PublisherPage/index';
import PublisherPageForMember from '../components/PublisherPage/memberIndex';

/* User Page */
import UserPageForLibrarian from '../components/UserPage/index';

/* Book Page */
import BookPageForLibrarian from '../components/BookPage/index';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/librarian/category" element={<LibrarianMainLayout />}>
          <Route index element={<CategoryPageForLibrarian />}></Route>
        </Route>
        <Route path="/member/category" element={<MemberMainLayout />}>
          <Route index element={<CategoryPageForMember />}></Route>
        </Route>
        <Route path="/librarian/author" element={<LibrarianMainLayout />}>
          <Route index element={<AuthorPageForLibrarian />}></Route>
        </Route>
        <Route path="/member/author" element={<MemberMainLayout />}>
          <Route index element={<AuthorPageForMember />}></Route>
        </Route>
        <Route path="/librarian/publisher" element={<LibrarianMainLayout />}>
          <Route index element={<PublisherPageForLibrarian />}></Route>
        </Route>
        <Route path="/member/publisher" element={<MemberMainLayout />}>
          <Route index element={<PublisherPageForMember />}></Route>
        </Route>
        <Route path="/librarian/user" element={<LibrarianMainLayout />}>
          <Route index element={<UserPageForLibrarian />}></Route>
        </Route>
        <Route path="/librarian/book" element={<LibrarianMainLayout />}>
          <Route index element={<BookPageForLibrarian />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
