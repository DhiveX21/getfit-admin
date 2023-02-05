import { SuccessResponse } from "helpers/ResponseMockTemplate";
import { datatableOrder, ListOrder } from "./datas/orderData_mock";

export default function mockOrder(mock) {
  // getDatatable
  mock.onPost("api/orders/datatable").reply((config) => {
    const data = JSON.parse(config.data)

    console.log(data);
    return [200, datatableOrder];
  });

  // getAll
  mock.onGet("api/orders").reply((config) => {
    return [200, SuccessResponse("Success get orders", "success", 200, ListOrder)];
  });
  
  // getOneById
  mock.onGet(/api\/orders\/\d+/).reply((config) => {
    const id = config.url.match(/api\/orders\/(\d+)/)[1];

    console.log(id);

    return [200, SuccessResponse("Success get patient", "success", 200, ListOrder[0])];
  });

  // cancel
  mock.onPut(/api\/orders\/cancel\/\d+/).reply((config) => {
    const id = config.url.match(/api\/orders\/cancel\/(\d+)/)[1];

    console.log(id);

    return [200, SuccessResponse("Success get patient", "success", 200, ListOrder[0])];
  });

  // complete
  mock.onPut(/api\/orders\/complete\/\d+/).reply((config) => {
    const id = config.url.match(/api\/orders\/complete\/(\d+)/)[1];

    console.log(id);

    return [200, SuccessResponse("Success get patient", "success", 200, ListOrder[0])];
  });
}
