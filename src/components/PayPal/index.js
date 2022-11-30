import { PayPalButtons } from '@paypal/react-paypal-js';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createTransaction } from '../../api/transactionAPI';
import { createInvoice } from '../../api/invoiceAPI';
import { updateBookCopy } from '../../api/bookCopyAPI';
import { getBookCopyAvailable } from '../../api/bookAPI';
import { useNavigate } from 'react-router-dom';
import sendEmail from '../../api/sendGmail';
const PaypalCheckoutButton = (props) => {
  const { product, bookId } = props;
  console.log(
    '🚀 ~ file: index.js ~ line 12 ~ PaypalCheckoutButton ~ bookId',
    bookId
  );
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const [availableBook, setAvailableBook] = useState();
  console.log(
    '🚀 ~ file: index.js ~ line 15 ~ PaypalCheckoutButton ~ availableBook',
    availableBook
  );
  const [bookCopyAvailable, setBookCopyAvailable] = useState();

  if (bookCopyAvailable) {
    const bookCopy = bookCopyAvailable[0];
  }

  const userLoggedIn = useSelector((state) => state.auth.payload.id);
  const dataUserLoggedIn = useSelector((state) => state.auth.payload);
  const checkAvailableBook = async () => {
    const availableBook = await getBookCopyAvailable(bookId);
    setBookCopyAvailable(availableBook.data);
    setAvailableBook(availableBook.data.length);
  };
  useEffect(() => {
    checkAvailableBook();
  }, []);
  const Navigate = useNavigate();

  const handleNavigation = () => {
    <Navigate to="/member/book"></Navigate>;
  };

  const handleCreateInvoice = async () => {
    try {
      const userId = userLoggedIn;

      const bookId = bookCopyAvailable[0]._id;

      const status = 'Waiting';
      const bookCopyId = bookId;

      const data = { userId, bookCopyId, status };

      const createNewInvoice = await createInvoice(data);
      const statusBookCopy = 'Reserved';

      const updateBookCopyStatus = await updateBookCopy(bookId, statusBookCopy);
    } catch (error) {
      console.log('createInvoice', error);
    }
  };

  const handleCreateTransaction = async (transactionId, statusTransaction) => {
    try {
      const id = transactionId;
      const amount = product.price;
      const status = statusTransaction;
      const payload = { transactionId, amount, statusTransaction };
      console.log(
        '🚀 ~ file: LoginPage.js ~ line 20 ~ LoginPage ~ payload',
        payload
      );
      await createTransaction(id, amount, status);
    } catch (error) {
      console.log(
        '🚀 ~ file: LoginPage.js ~ line 20 ~ LoginPage ~ error',
        error
      );
    }
  };

  const handleSendEmail = async () => {
    console.log('heloo');
    const email = dataUserLoggedIn.email;
    const userid = dataUserLoggedIn.id;

    await sendEmail({ memberEmail: { email }, memberId: { userid } });
  };

  return availableBook > 0 ? (
    <PayPalButtons
      style={{
        color: 'gold',
        layout: 'horizontal',
        height: 40,
        tagline: false,
        shape: 'pill',
      }}
      onClick={(data, actions) => {
        //Validate on button click, client or server side

        const hasAlreadyBorrowedBook = false;

        if (hasAlreadyBorrowedBook) {
          setError(
            'You already borrowed this book. Go to your account to view your list of books.'
          );

          return actions.reject();
        } else {
          return actions.resolve();
        }
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: product.description,
              amount: {
                currency_code: 'USD',
                value: product.price,
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();

        const createTransaction = await handleCreateTransaction(
          order.id,
          order.status
        );

        const createInvoice = await handleCreateInvoice();
        const createNofication = await handleSendEmail();
        // handleApprove(order);
      }}
      onCancel={() => {}}
      onError={(err) => {
        setError(err);
      }}
    />
  ) : (
    <div>
      <p>Don't have Book</p>,<button onClick={handleNavigation}></button>
    </div>
  );
};

export default PaypalCheckoutButton;
