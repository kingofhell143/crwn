import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51JayuOSGE4xjgLR1aKSGT41Z5sGCeW1rfB1JhutK0b6mwiztCVuwslNrhTIl37wRpbG59G3eI6B9WSKJeO6RiwlB00DYa8ZZ0U";

  const onToken = (token) => {
    console.log(token);
    console.log("Payment successfull");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
