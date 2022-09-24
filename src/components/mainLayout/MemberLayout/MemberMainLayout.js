import React from 'react';
import { Navbar, Text, Button, Link } from '@nextui-org/react';
import { memberCollapseItems, items } from './MemberData';
import { Outlet } from 'react-router-dom';
import './style.css';

const MemberMainLayout = () => {
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
              <Navbar.Link label={item.label}>{item.label}</Navbar.Link>
            ))}
          </Navbar.Content>
          <Navbar.Content>
            <Navbar.Link color="inherit" href="#">
              Welcom member
            </Navbar.Link>
            <Navbar.Item>
              <Button auto flat color="error" href="#">
                Log out
              </Button>
            </Navbar.Item>
          </Navbar.Content>
          <Navbar.Collapse
            css={{
              background: '#FFFFFF', // colors.pink800
            }}
          >
            {memberCollapseItems.map((item) => (
              <Navbar.CollapseItem key={item.label} activeColor="error">
                <Link
                  color="inherit"
                  css={{
                    minWidth: '100%',
                  }}
                  href="#"
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

export default MemberMainLayout;
