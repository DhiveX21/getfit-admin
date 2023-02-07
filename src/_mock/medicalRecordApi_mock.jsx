import { SuccessResponse } from "helpers/ResponseMockTemplate";
import { DatatableMedicalRecord, ListMedicalRecord } from "./datas/medicalRecordData_mock";

export default function mockMedicalRecord(mock) {
  // GetAllByUserId
  mock.onGet(/api\/records\/user\/\d+/).reply((config) => {
    const id = config.url.match(/api\/records\/user\/(\d+)/)[1];
    console.log(id);
    return [200, SuccessResponse("Success get records", "success", 200, ListMedicalRecord)];
  });

  // getOneById
  mock.onGet(/api\/records\/\d+/).reply((config) => {
    const id = config.url.match(/api\/records\/(\d+)/)[1];
    console.log(id);

    return [200, SuccessResponse("Success get records", "success", 200, ListMedicalRecord[0])];
  });

  // GetAllDatatable
  mock.onPost("api/records/datatable").reply((config) => {
    const data = JSON.parse(config.data);
    console.log(data);

    return [200, DatatableMedicalRecord];
  });

  // create
  mock.onPost("api/records").reply((config) => {
    const data = JSON.parse(config.data);
    console.log(data);

    return [200, SuccessResponse("Success create records", "success", 200, ListMedicalRecord[0])];
  });

  // deleteOne
  mock.onDelete(/api\/records\/\d+/).reply((config) => {
    const id = config.url.match(/api\/records\/(\d+)/)[1];
    console.log(id);

    return [200, SuccessResponse("Success delete record", "success", 200, { message: "deleted" })];
  });

  // update
  mock.onPut(/api\/records\/\d+/).reply((config) => {
    const data = JSON.parse(config.data);
    const id = config.url.match(/api\/records\/(\d+)/)[1];

    console.log({ data, id });

    return [200, SuccessResponse("Success update record", "success", 200, ListMedicalRecord[0])];
  });
}
