import { dateFormater } from "helpers/DateHelpers";

export const requestFormat = (appointment, records) => {
  const body = {
    appointment_id: appointment._id,
    records: records,
    date: dateFormater(appointment.date_appointment),
    time: appointment.time_appointment,
    appointment_type: appointment.appointment_type,
  };
  return body;
};

export const requestFormatUpdate = (medicalRecord, records) => {
  const body = {
    appointment_id: medicalRecord.appointment_id,
    records: records,
    date: dateFormater(medicalRecord.date),
    time: medicalRecord.time,
    appointment_type: medicalRecord.appointment_type,
  };
  return body;
};