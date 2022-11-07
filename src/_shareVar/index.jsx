export const initialParamsTable = {
  pageSize: 5,
  entries: ["5", "10", "15", "20", "25"],
  pageIndex: 0,
};

export const orderStatusStep = [
  { key: "cancel", value: "Cancel" },
  { key: "unpaid", value: "Waiting for Payment" },
  { key: "paid", value: "Settlement" },
];

export const appointmentStatusStep = [
  { key: "cancel", value: "Cancel" },
  { key: "finding", value: "Looking For Physio" },
  { key: "book", value: "Waiting the Appointment time" },
  { key: "treatment", value: "In Treatment" },
  { key: "complete", value: "Finish Treatment" },
];
