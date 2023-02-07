export const ListTherapist = [
  {
    id: 1,
    name: "Faizah Abdullah, S.St., S.Ft., M.Biomed.",
    gender: "female",
    position: "physio",
    description: "Master of physioterapist",
    image_url: "",
    user: {
      id: 1,
      name: "Faizah Abdullah, S.St., S.Ft., M.Biomed.",
      role: "therapist",
      phone_number: "08973241745",
      email: "f@mail.com",
      verification_date: "2022-08-27",
    },
  },
];

export const ListEvaluation = [
  {
    patient_detail: {
      user_id: 2,
      name: "Abdul",
      phone_number: "08973241745",
      email: "abdul@mail.com",
    },
    therapist_detail: {
      user_id: 1,
      name: "Budi Update",
    },
    rating: {
      rating_value: 5,
      comment: "Mantap",
    },
    _id: "63112cdbf5a35c7f6413f5bb",
    appointment_id: "631124f6266d220dbd7bccf0",
    deleted: false,
    created_at: "2022-09-01T22:06:19.980Z",
    updated_at: "2022-09-01T22:06:19.980Z",
    __v: 0,
  },
];
export const datatableThearpist = {
  meta: {
    message: "Success get therapists",
    status: "success",
    code: 200,
  },
  data: {
    entities: [
      {
        id: 1,
        name: "Faizah Abdullah, S.St., S.Ft., M.Biomed.",
        gender: "female",
        position: "physio",
        description: "Master of physioterapist",
        image_url: "",
        user: {
          id: 1,
          name: "Faizah Abdullah, S.St., S.Ft., M.Biomed.",
          role: "therapist",
          phone_number: "08973241745",
          email: "f@mail.com",
          verification_date: "2022-08-27",
        },
      },
    ],
    errorMessage: "",
    totalCount: 79,
  },
};
