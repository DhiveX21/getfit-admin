import { SuccessResponse } from "helpers/ResponseMockTemplate";
import { ListTherapist } from "./datas/therapistData_mock";

export default function mockTherapist(mock) {
  // getAll
  mock.onGet("api/teams").reply((config) => {
    return [200, SuccessResponse("Success get therapist", "success", 200, ListTherapist)];
  });
}
