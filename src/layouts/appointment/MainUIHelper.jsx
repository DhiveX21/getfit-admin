export function createReqFormat(data) {
  const body = {
    patient_id: data.patient.value,
    therapist_id: data.therapist.value,
    date: data.date,
    time: data.time,
    appointment_type: data.appointmentType.label,
    address: data.address,
    complaints: data.complaints,
  };
  return body;
}
