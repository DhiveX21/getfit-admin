export const ListBaseProduct = [
  {
    id: 1,
    code: "HC",
    name: "Home Care",
    status: "active",
    description: "",
  },
];

export const datatableProduct = {
  meta: {
    message: "Success get products",
    status: "success",
    code: 200,
  },
  data: {
    entities: [
      {
        id: 1,
        code: "PRD1",
        name: "Product 1 update",
        quota: 5,
        image_url: "http://image.com",
        description: "desc",
        amount: 2000,
        cost_paid: 1000,
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
            id: 3,
            code: "HC",
            name: "Home Care Update",
            status: "active",
            description: "",
            amount: 2000,
            quota: 2,
          },
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
    ],
    errorMessage: "",
    totalCount: 3,
  },
};

export const ListProduct = [
  {
    id: 1,
    code: "PRD1",
    name: "Product 1 update",
    quota: 5,
    image_url: "http://image.com",
    description: "desc",
    amount: 2000,
    cost_paid: 1000,
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
        id: 3,
        code: "HC",
        name: "Home Care Update",
        status: "active",
        description: "",
        amount: 2000,
        quota: 2,
      },
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
];

export const ListFacility = [
  {
    id: 1,
    name: "Pemberian Obat Update",
    slug: "pemberian-obat-update",
    status: "non-active",
    description: "desc",
  },
];
