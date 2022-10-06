import { PayPalButtons } from '@paypal/react-paypal-js';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const PaypalCheckoutButton = (props) => {
  const { product } = props;
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  // const userLoggedIn = useSelector((state) => state.auth.payload.id);
  // console.log(
  //   '🚀 ~ file: LoginPage.js ~ line 20 ~ LoginPage ~ userLoggedIn',
  //   userLoggedIn
  // );

  const handleApprove = (orderID) => {
    //Call backend func to fullfill order

    //if response is success
    setPaidFor(true);
    //Refresh user account

    //If response is error
    //Alert user

    if (paidFor) {
      // Display success message, modal or redirect user to success page
      alert('Thank you!');
    }

    if (error) {
      alert(error);
    }
  };
  return (
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
        console.log('order:', order);

        handleApprove(order);
      }}
      onCancel={() => {}}
      onError={(err) => {
        setError(err);
      }}
    />
  );
};

export default PaypalCheckoutButton;
// import React, { useRef, useEffect } from 'react';

// export default function Paypal() {
//   const paypal = useRef();

//   useEffect(() => {
//     window.paypal
//       .Buttons({
//         createOrder: (data, actions, err) => {
//           return actions.order.create({
//             intent: 'CAPTURE',
//             purchase_units: [
//               {
//                 description: 'Cool looking table',
//                 amount: {
//                   currency_code: 'USD',
//                   value: 5.0,
//                 },
//               },
//             ],
//           });
//         },
//         onApprove: async (data, actions) => {
//           //Note: Data = OrderId, PayerId
//           const order = await actions.order.capture();
//           const details = order.purchase_units[0].payments.captures[0];
//           console.log(
//             '🚀 ~ file: index.js ~ line 27 ~ onApprove: ~ details',
//             details
//           );
//           return details;
//         },
//         onError: (err) => {
//           console.log(err);
//         },
//       })
//       .render(paypal.current);
//   }, []);

//   return (
//     <div>
//       <div ref={paypal}></div>
//     </div>
//   );
// }
