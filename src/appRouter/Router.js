import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Login Page */
import LoginPage from '../components/loginPage/LoginPage';
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
import BookPageForMember from '../components/BookPage/memberIndex';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
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
        <Route path="/member/book" element={<MemberMainLayout />}>
          <Route index element={<BookPageForMember />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
