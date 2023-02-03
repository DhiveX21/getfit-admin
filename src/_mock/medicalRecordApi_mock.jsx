import { SuccessResponse } from "helpers/ResponseMockTemplate";
import { ListMedicalRecord } from "./datas/medicalRecordData_mock";

export default function mockMedicalRecord(mock) {
  mock.onGet(/api\/records\/user\/\d+/).reply((config) => {
    const id = config.url.match(/api\/records\/user\/(\d+)/)[1];

    return [200, SuccessResponse("Success get records", "success", 200, ListMedicalRecord)];
  });
}
