export const datatableExercise = {
  meta: {
    message: "Success get videos",
    status: "success",
    code: 200,
  },
  data: {
    entities: [
      {
        id: 1,
        category_id: 1,
        title: "Video 1",
        description: "About all",
        video_url: "https://www.youtube.com/watch?v=YdtBEFK_HgI&t=6120s",
        repeat: 5,
        is_active: true,
        today_watch: false,
        category: {
          id: 1,
          title: "Khusus Wanita",
          description: "Untuk latihan wanita",
          status: "active",
        },
      },
    ],
    errorMessage: "",
    totalCount: 1,
  },
};

export const ListCategory = [
  {
    id: 1,
    title: "Khusus Wanita",
    description: "Untuk latihan wanita",
    status: "active",
  },
];

export const ListExercise = [
  {
    id: 1,
    category_id: 1,
    title: "Video 1",
    description: "About all",
    video_url: "https://www.youtube.com/watch?v=YdtBEFK_HgI&t=6120s",
    repeat: 5,
    is_active: true,
    today_watch: false,
    category: {
      id: 2,
      title: "Lutut",
      description: "Untuk latihan Lutut",
      status: "active",
    },
    video_watches: [
      {
        user_id: 77,
        is_watch: true,
        daily_note: "Latihan awal check",
        created_at: "2022-10-29",
        user: {
          id: 77,
          name: "Ardhi Test",
          role: "patient",
          phone_number: "2",
          email: "ardhi@mail.com",
          verification_date: "2022-10-22",
        },
      },
    ],
  },
];
