export const ListOrder = [
  {
    id: 4,
    product_id: 3,
    user_id: 77,
    amount: 2000,
    price_paid: 1000,
    status: "unpaid",
    quota: 5,
    code_promo: "",
    created_at: "2022-11-18",
    updated_at: "0001-01-01",
    product: {
      id: 3,
      code: "PRD2",
      name: "Product 2 update",
      quota: 5,
      image_url: "http://image.com",
      description: "desc",
      amount: 10000,
      cost_paid: 10000,
      discount: 0.5,
      status: "active",
      facilities: [
        {
          id: 1,
          name: "Pemberian Obat Update",
          slug: "pemberian-obat-update",
          status: "non-active",
          description: "desc",
        },
        {
          id: 2,
          name: "Bimbingan Physio",
          slug: "bimbingan-physio",
          status: "active",
          description: "Desc",
        },
      ],
      sub_products: [
        {
          id: 4,
          code: "HC",
          name: "Home Care Update",
          status: "active",
          description: "",
          amount: 2000,
          quota: 2,
        },
      ],
    },
    patient: {
      id: 81,
      user_id: 77,
      name: "Muhammad Ardhiansyah",
      birth_date: "1997-06-12",
      gender: "male",
      age: 25,
      address: "Link harum manis , Rt.04/02, Kel.Cirimekar, Kec.Cibinong , Kab,Bogor",
      complaint: "",
      user: {
        id: 77,
        name: "Muhammad Ardhiansyah",
        role: "patient",
        phone_number: "+62895619258715",
        email: "ardhi.ansyah2662@gmail.com",
      },
    },
    payment_url: "https://checkout-staging.xendit.co/web/63bc2fdd6a32076e7632536d",
  },
];

export const datatableOrder = {
  meta: {
    message: "Success get orders",
    status: "success",
    code: 200,
  },
  data: {
    entities: [
      {
        id: 1,
        product_id: 3,
        user_id: 77,
        amount: 2000,
        price_paid: 1000,
        status: "paid",
        quota: 1,
        code_promo: "",
        created_at: "2022-10-25",
        updated_at: "0001-01-01",
        payment_url: "",
        user: {
          id: 77,
          name: "Muhammad Ardhiansyah",
          role: "patient",
          phone_number: "2",
          email: "ardhi@mail.com",
        },
      },
    ],
  },
};