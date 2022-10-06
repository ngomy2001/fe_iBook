import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

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
      <PayPalScriptProvider
        option={{ 'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID }}
      >
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>

          <Route path="/member" element={<MemberMainLayout />}>
            <Route path="category" element={<CategoryPageForMember />}></Route>
            <Route path="author" element={<AuthorPageForMember />}></Route>
            <Route
              path="publisher"
              element={<PublisherPageForMember />}
            ></Route>
            <Route path="book" element={<BookPageForMember />}></Route>
          </Route>
          <Route path="/librarian" element={<LibrarianMainLayout />}>
            <Route path="author" element={<AuthorPageForLibrarian />}></Route>
            <Route
              path="category"
              element={<CategoryPageForLibrarian />}
            ></Route>
            <Route
              path="publisher"
              element={<PublisherPageForLibrarian />}
            ></Route>
            <Route path="book" element={<BookPageForLibrarian />}></Route>
            <Route path="user" element={<UserPageForLibrarian />}></Route>
          </Route>
        </Routes>
      </PayPalScriptProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
