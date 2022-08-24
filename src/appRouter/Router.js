import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../components/homePage/HomePage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
