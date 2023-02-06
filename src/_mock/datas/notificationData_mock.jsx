export const ListNotification = [
  {
    id: 4,
    user_id: 77,
    category_id: 1,
    title: "Anda Di Banned not important !!!",
    description: "HAHAHAHAHA",
    is_important: false,
    category: {
      id: 9,
      title: "Promo Akhir Tahun",
      description: "Promo Akhir Tahun",
      status: "active",
    },
    patient: [
      {
        id: 75,
        user_id: 77,
        name: "Muhammad Ardhiansyah",
        birth_date: "1997-06-12",
        gender: "male",
        age: 25,
        address: "gg haji nawawi",
        complaint: "",
      },
    ],
    created_at: "2022-10-27",
    updated_at: "0001-01-01",
  },
];

export const ListCategory = [
  {
    id: 1,
    title: "Promo",
    description: "Information for all user",
    status: "active",
  },
];

export const DatatableNotification = {
  meta: {
    message: "Success get records for datatable",
    status: "success",
    code: 200,
  },
  data: {
    entities: [
      {
        id: 27,
        user_id: -1,
        category_id: 9,
        title: "Potongan Harga",
        description: "Potongan Harga 50%",
        is_important: false,
        category: {
          id: 9,
          title: "Promo Akhir Tahun",
          description: "Promo Akhir Tahun",
          status: "active",
        },
        created_at: "2022-12-01",
        updated_at: "2022-12-06",
      },
    ],
    totalCount: 1,
    errorMessage: "",
  },
};
