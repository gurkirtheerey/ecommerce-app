// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import stripe from "stripe";
const stripeCheckout = stripe("sk_test_zeuoyefdeD1eyCzSMooHos3J00Sck7wMyT");

export default async (req, res) => {
  const data = req.body.data;

  const items = data.map((item) => {
    item.price_data = {};
    item.price_data.currency = "usd";
    item.price_data.unit_amount = Math.round(item.price) * 100;
    item.price_data.product_data = {
      name: item.product,
      images: [item.image],
    };
    item.quantity = data.filter((i) => i.product === item.product).length;
    delete item.id;
    delete item.price;
    delete item.product;
    delete item.image;
    return item;
  });

  const session = await stripeCheckout.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: items,
    mode: "payment",
    success_url: `http://localhost:3000?success=true`,
    cancel_url: `http://localhost:3000/cart`,
  });
  res.status(200).json({ id: session.id });
};
