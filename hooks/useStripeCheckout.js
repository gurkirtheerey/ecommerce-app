import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
const stripePromise = loadStripe("pk_test_XOf0XArkLI9qQDKK7unsnEXB00YZwpLBn7");

// strip checkout

const useStripeCheckout = async (url, cart) => {
  try {
    const stripe = await stripePromise;
    try {
      const res = await axios.post(`${url}`, { data: cart });
      try {
        const session = await res.data.id;
        try {
          const result = await stripe.redirectToCheckout({
            sessionId: session,
          });

          return result;
        } catch (e) {
          console.log("unable to redirect to checkout");
        }
      } catch (e) {
        console.log("unable to receive stripe session");
      }
    } catch (e) {
      console.log("unable to send API request ", e);
    }
  } catch (e) {
    console.log("unable to create promise");
  }
};

export default useStripeCheckout;
