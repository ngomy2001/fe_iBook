import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, Col, Row, Button, Text } from '@nextui-org/react';
import PrimaryButton from '../customButtonComponent/Button';
import CommentPopup from '../../BookPage/CommentPopup';
import PaypalCheckoutButton from '../../PayPal';
import { getComments } from '../../../api/commentAPI';
const CardComponent = ({ title, category, item, rowId }) => {
  const [visibleCommentPopup, setVisibleCommentPopup] = useState(false);
  const userId = useSelector((state) => state.auth.payload.id);
  const [comment, setComment] = useState([]);
  const getCommentsData = async () => {
    const comments = await getComments();
    setComment(comments);
  };
  return (
    <div>
      <Card css={{ w: '100%', h: '400px' }}>
        <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
          <Col>
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              color="#ffffffAA"
            >
              {category}
            </Text>
            <Text h3 color="black">
              {title}
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src="https://firebasestorage.googleapis.com/v0/b/finalproject-afaa4.appspot.com/o/bookSamples%2F001-book-brand-cover-back-presentation-mockup-psd.jpeg?alt=media"
            width="100%"
            height="100%"
            objectFit="cover"
            alt="Card example background"
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: 'absolute',
            bgBlur: '#ffffff66',
            borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row justify="center" css={{ gap: '15px' }}>
            <PrimaryButton label="Details"></PrimaryButton>
            <PrimaryButton
              label="Write reviews"
              onClick={() => setVisibleCommentPopup(true)}
            ></PrimaryButton>
            <PrimaryButton label="Read sample"></PrimaryButton>
            <PaypalCheckoutButton product={item} bookId={rowId}>
              {' '}
            </PaypalCheckoutButton>
          </Row>
        </Card.Footer>
      </Card>
      <CommentPopup
        visible={visibleCommentPopup}
        closeModal={setVisibleCommentPopup}
        onCreate={getCommentsData}
        userId={userId}
        bookId={rowId}
      />
    </div>
  );
};

export default CardComponent;
