import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton= ({price})=>{
    const priceForStripe = price * 100;
    const publishableKey ='pk_test_51GsQJuGe95DLmQyzoV2tZ8zEHvUT5lZmBBHaqSELi0M5oRQKlJEHpCbetkhl2e3FUJIa8tBPUO5Jh7vxwAXZ49W000rhAoOsF3';


    const onToken =token =>{
        alert('Payment sussesfull');
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name ='REACT clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://inkscape.org/gallery/item/12424/DIGIDOWN034-welded-svg.svg'
            description={`Your total is $${price}`}
            amount ={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );


};

export default StripeCheckoutButton;