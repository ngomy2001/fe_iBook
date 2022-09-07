import { Table } from '@nextui-org/react';
import getCategories from '../../api/categoryAPI';
import { useState } from 'react';
import { useEffect } from 'react';

const BookPage = () => {
  const [category, setData] = useState([]);
  // console.log('abc: ', category);
  const getData = async () => {
    const categories = await getCategories();
    // console.log(
    //   '🚀 ~ file: BookPage.js ~ line 10 ~ getData ~ categories',
    //   JSON.stringify(categories)
    // );
    setData(categories);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Table
        aria-label="Example table with static content"
        css={{
          height: 'auto',
          minWidth: '100%',
        }}
      >
        <Table.Header>
          <Table.Column>NAME</Table.Column>
          <Table.Column>DESCRIPTION</Table.Column>
          <Table.Column>ACTION</Table.Column>
        </Table.Header>
        <Table.Body>
          {category.data &&
            category.data.map((row) => (
              <Table.Row key={row._id}>
                <Table.Cell>{row.name}</Table.Cell>
                <Table.Cell>{row.description}</Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default BookPage;
