import { SuccessResponse } from "helpers/ResponseMockTemplate";
import { datatablePatient, ListPatient } from "./datas/patientData_mock";

export default function mockPatient(mock) {
  mock.onPost("api/patients/datatable").reply((config) => {
    return [200, datatablePatient];
  });
  mock.onPost("api/users").reply((config) => {
    return [200, SuccessResponse("Success create user", "success", 200, ListPatient[0].user)];
  });
  mock.onPost("api/patients").reply((config) => {
    return [200, SuccessResponse("Success create patient", "success", 200, ListPatient[0])];
  });
  mock.onGet(/api\/patients\/\d+/).reply((config) => {
    const id = config.url.match(/api\/patients\/(\d+)/)[1];

    return [200, SuccessResponse("Success get patient", "success", 200, ListPatient[0])];
  });
  mock.onPut(/api\/patients\/\d+/).reply((config) => {
    const id = config.url.match(/api\/patients\/(\d+)/)[1];

    return [200, SuccessResponse("Success update patient", "success", 200, ListPatient[0])];
  });
  mock.onDelete(/api\/patients\/\d+/).reply((config) => {
    const id = config.url.match(/api\/patients\/(\d+)/)[1];

    return [200, SuccessResponse("Success delete patient", "success", 200, {message: "deleted"})];
  });
}
