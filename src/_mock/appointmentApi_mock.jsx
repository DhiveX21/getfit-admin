import { SuccessResponse } from "helpers/ResponseMockTemplate";
import { ListAppointment } from "./datas/appointmentData_mock";

export default function mockApointment(mock) {
  mock.onGet(/api\/appointments\/user\/\d+/).reply((config) => {
    const id = config.url.match(/api\/appointments\/user\/(\d+)/)[1];

    return [200, SuccessResponse("Success get appointment", "success", 200, ListAppointment)];
  });
}
