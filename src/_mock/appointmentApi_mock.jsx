import { SuccessResponse, ValidationFailedResponse } from "helpers/ResponseMockTemplate";
import { datatableAppointment, ListAppointment } from "./datas/appointmentData_mock";

export default function mockApointment(mock) {
  // getAllAppointmentByIdUser
  mock.onGet(/api\/appointments\/user\/\d+/).reply((config) => {
    const id = config.url.match(/api\/appointments\/user\/(\d+)/)[1];
    console.log(id);

    return [200, SuccessResponse("Success get appointment", "success", 200, ListAppointment)];
  });
  // cancelById
  mock.onPut(/api\/appointments\/\d+\/cancel/).reply((config) => {
    const id = config.url.match(/api\/appointments\/(\d+)\/cancel/)[1];
    console.log(id);

    return [200, SuccessResponse("Success cancel appointment", "success", 200, ListAppointment[0])];
  });
  // updateStatus
  mock.onPut(/api\/appointments\/\d+\/status/).reply((config) => {
    const id = config.url.match(/api\/appointments\/\d+\/status/)[1];
    console.log(id);

    return [
      200,
      SuccessResponse("Success update status appointment", "success", 200, ListAppointment[0]),
    ];
  });
  // addLinkMeeting
  mock.onPut(/api\/appointments\/\d+\/link-meeting/).reply((config) => {
    const id = config.url.match(/api\/appointments\/(\d+)\/link-meeting/)[1];
    console.log(id);

    return [
      200,
      SuccessResponse("Success add link meeting appointment", "success", 200, ListAppointment[0]),
    ];
  });
  // getOneById
  mock.onGet(/api\/appointments\/\d+/).reply((config) => {
    const id = config.url.match(/api\/appointments\/(\d+)/)[1];
    console.log(id);

    return [200, SuccessResponse("Success get appointment", "success", 200, ListAppointment[0])];
  });
  // delete
  mock.onDelete(/api\/appointments\/\d+/).reply((config) => {
    const id = config.url.match(/api\/appointments\/(\d+)/)[1];
    console.log(id);

    return [
      200,
      SuccessResponse("Success delete appointment", "success", 200, { message: "Deleted" }),
    ];
  });
  // getDatatable
  mock.onPost("api/appointments/datatable").reply((config) => {
    return [200, datatableAppointment];
  });
  // create
  mock.onPost("api/appointments").reply((config) => {
    const data = JSON.parse(config.data);
    console.log(data);
    if (data.patient_id === 0) {
      return [
        400,
        ValidationFailedResponse([
          {
            type: "required",
            message: "The 'patient_id' field is required.",
            field: "patient_id",
          },
        ]),
      ];
    }
    return [200, SuccessResponse("Success create appointment", "success", 200, ListAppointment[0])];
  });
}
