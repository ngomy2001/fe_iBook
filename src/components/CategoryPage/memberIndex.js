import React, { useState, useEffect } from 'react';

/* import NextUI component */
import { Table } from '@nextui-org/react';
import { Button } from '@nextui-org/react';

/* import service */
import { getCategories } from '../../api/categoryAPI';

const CategoryPage = () => {
  const [category, setCategoryData] = useState([]);

  const getCategoryData = async () => {
    const categories = await getCategories();
    setCategoryData(categories);
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  return (
    <div className="table-space">
      <div>
        <Button.Group color="error" flat>
          <Button>Search</Button>
        </Button.Group>
      </div>
      <div>
        <Table
          css={{
            height: 'auto',
            minWidth: '100%',
            backgroundColor: '#ffffff',
          }}
        >
          <Table.Header>
            <Table.Column>NAME</Table.Column>
            <Table.Column>DESCRIPTION</Table.Column>
          </Table.Header>
          <Table.Body>
            {category &&
              category.map((row) => (
                <Table.Row key={row._id}>
                  <Table.Cell>{row.name}</Table.Cell>
                  <Table.Cell>{row.description}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default CategoryPage;
