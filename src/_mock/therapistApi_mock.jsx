import { SuccessResponse } from "helpers/ResponseMockTemplate";
import { datatableThearpist, ListEvaluation, ListTherapist } from "./datas/therapistData_mock";

export default function mockTherapist(mock) {
  // getAll
  mock.onGet("api/teams").reply((config) => {
    return [200, SuccessResponse("Success get therapist", "success", 200, ListTherapist)];
  });

  // getAllByUserId
  mock.onGet(/api\/evaluations\/\d+/).reply((config) => {
    const id = config.url.match(/api\/evaluations\/(\d+)/)[1];
    console.log(id);

    return [200, SuccessResponse("Success get evaluations", "success", 200, ListEvaluation)];
  });

  // getDatatable
  mock.onPost("api/teams/datatable").reply((config) => {
    const data = JSON.parse(config.data);
    console.log(data);

    return [200, datatableThearpist];
  });

  // createUser
  mock.onPost("api/users").reply((config) => {
    const data = JSON.parse(config.data);
    console.log(data);

    return [200, SuccessResponse("Success create user", "success", 200, ListTherapist[0].user)];
  });

  // createTehrapist
  mock.onPost("api/teams").reply((config) => {
    const data = JSON.parse(config.data);
    console.log(data);

    return [
      200,
      SuccessResponse("Success create therapist", "success", 200, ListTherapist[0].user),
    ];
  });

  // getOneById
  mock.onGet(/api\/teams\/\d+/).reply((config) => {
    const id = config.url.match(/api\/teams\/(\d+)/)[1];
    console.log(id);

    return [200, SuccessResponse("Success get therapist", "success", 200, ListTherapist[0])];
  });

  // update
  mock.onPut(/api\/teams\/\d+/).reply((config) => {
    const id = config.url.match(/api\/teams\/(\d+)/)[1];
    const data = JSON.parse(config.data);
    console.log({ id, data });

    return [200, SuccessResponse("Success update therapist", "success", 200, ListTherapist[0])];
  });

  // deleteOne
  mock.onDelete(/api\/teams\/\d+/).reply((config) => {
    const id = config.url.match(/api\/teams\/(\d+)/)[1];
    console.log(id);

    return [
      200,
      SuccessResponse("Success delete therapist", "success", 200, { message: "deleted" }),
    ];
  });
}
