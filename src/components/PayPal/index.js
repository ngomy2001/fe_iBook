import React, { useRef, useEffect } from 'react';

export default function Paypal() {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'Cool looking table',
                amount: {
                  currency_code: 'USD',
                  value: 5.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          //Note: Data = OrderId, PayerId
          const order = await actions.order.capture();
          const details = order.purchase_units[0].payments.captures[0];
          console.log(
            '🚀 ~ file: index.js ~ line 27 ~ onApprove: ~ details',
            details
          );
          return details;
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
