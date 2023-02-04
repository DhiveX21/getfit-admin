import { SuccessResponse } from "helpers/ResponseMockTemplate";
import { ListBaseProduct } from "./datas/productData_mock";

export default function mockProduct(mock) {
  // getAll
  mock.onGet("api/base-products").reply((config) => {
    return [200, SuccessResponse("Success get base product", "success", 200, ListBaseProduct)];
  });
}
