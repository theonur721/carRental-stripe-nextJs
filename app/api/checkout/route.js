import { NextResponse as Res } from "next/server";
import { metadata } from "../../layout";
const stripe = require("stripe")(process.env.STRIPE_SEC_KEY);

// frontend satın alınacak ürünü bilgileriyle buraya istek atacak

//TODO -- ürün fiyatı güncellenince fiyat bilgisi de güncellenmelidir

const getActiveProducts = async () => {
  //katalogtaki ürünleri alığ aktifleri filtreler
  let stripeProducts = await stripe.products.list();

  return stripeProducts.data.filter((i) => i.active);
};

export const POST = async (req) => {
  //1- isteğin body kısmında gelen satın alıncak araç verisini al
  const car = await req.json();

  //2- stripe kataloğuna kaydedilmiş ürünü al
  const stripeProducts = await getActiveProducts();
  //3- satın alınacak ürün katalokta varrmı kontrol et?
  let foundProduct = stripeProducts.find(
    (i) => i.metadata.product_id === car._id
  );

  console.log(car);
  //4- yoksa kataloğa ekle
  // cent olarak aldığı için x 100
  if (!foundProduct) {
    foundProduct = await stripe.products.create({
      name: car.make + " " + car.model,
      images: [car.imageUrl],
      default_price_data: {
        unit_amount: car.price * 100,
        currency: "USD",
      },
      metadata: {
        product_id: car._id,
      },
    });
  }

  //5- ürünün stripe tarafından oluşturlan idsini vemiktarını nesne yap
  const product_info = {
    price: foundProduct.default_price,
    quantity: 1,
  };

  //6- ödeme oturumu (url) oluştur
  const session = await stripe.checkout.sessions.create({
    line_items: [product_info],
    mode: "payment",
    success_url: "http://localhost:3000" + "/success",
    cancel_url: "http://localhost:3000" + "/cancel",
  });

  console.log(session);

  //7- satın alım urlsini clienta döndür
  return Res.json({ url: session.url });
};
