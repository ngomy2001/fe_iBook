import React from 'react';
import { Navbar, Text, Button, Link } from '@nextui-org/react';
import { librarianCollapseItems, items } from './LibrarianDataLink';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedInUser } from '../../../redux/features/auth';
import { useNavigate } from 'react-router-dom';
import './style.css';

const LibrarianMainLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userEmail = useSelector((state) => state.auth.payload.email);

  const handleLogOut = () => {
    try {
      dispatch(setLoggedInUser(''));
      navigate('/');
    } catch (error) {
      console.log('err', error);
    }
  };

  return (
    <div>
      <div>
        <Navbar isBordered variant="sticky">
          <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" />
            <Text b color="error" hideIn="xs">
              iBook
            </Text>
          </Navbar.Brand>
          <Navbar.Content enableCursorHighlight hideIn="xs">
            {items.map((item) => (
              <Navbar.Link label={item.label} href={item.path}>
                {item.label}
              </Navbar.Link>
            ))}
          </Navbar.Content>
          <Navbar.Content>
            <Navbar.Link color="inherit" href="#">
              Welcom {userEmail}
            </Navbar.Link>
            <Navbar.Item>
              <Button auto flat color="error" onClick={() => handleLogOut()}>
                Log out
              </Button>
            </Navbar.Item>
          </Navbar.Content>
          <Navbar.Collapse
            css={{
              background: 'white',
            }}
          >
            {librarianCollapseItems.map((item) => (
              <Navbar.CollapseItem key={item.label} activeColor="error">
                <Link
                  color="inherit"
                  css={{
                    minWidth: '100%',
                  }}
                >
                  {item.label}
                </Link>
              </Navbar.CollapseItem>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="bottom-side">
        <Outlet />
      </div>
    </div>
  );
};

export default LibrarianMainLayout;
