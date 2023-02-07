import { SuccessResponse } from "helpers/ResponseMockTemplate";
import {
  datatableProduct,
  ListBaseProduct,
  ListFacility,
  ListProduct,
} from "./datas/productData_mock";

export default function mockProduct(mock) {
  // getAll
  mock.onGet("api/base-products").reply((config) => {
    return [200, SuccessResponse("Success get base product", "success", 200, ListBaseProduct)];
  });
  // create base product
  mock.onPost("api/base-products").reply((config) => {
    const data = JSON.parse(config.data);
    console.log(data);

    return [
      200,
      SuccessResponse("Success create base product", "success", 200, ListBaseProduct[0]),
    ];
  });
  // getAll
  mock.onGet("api/facilities").reply((config) => {
    return [200, SuccessResponse("Success get facilities", "success", 200, ListFacility)];
  });
  // create
  mock.onPost("api/facilities").reply((config) => {
    const data = JSON.parse(config.data);
    console.log(data);

    return [200, SuccessResponse("Success create facilities", "success", 200, ListFacility[0])];
  });
  // getDatatable
  mock.onPost("api/products/datatable").reply((config) => {
    const data = JSON.parse(config.data);
    console.log(data);

    return [200, datatableProduct];
  });
  // create
  mock.onPost("api/products").reply((config) => {
    const data = JSON.parse(config.data);
    console.log(data);

    return [200, SuccessResponse("Success create product", "success", 200, ListProduct[0])];
  });
  // getOneById
  mock.onGet(/api\/products\/\d+/).reply((config) => {
    const id = config.url.match(/api\/products\/(\d+)/)[1];
    console.log(id);

    return [200, SuccessResponse("Success get product", "success", 200, ListProduct[0])];
  });
  // update
  mock.onPut(/api\/products\/\d+/).reply((config) => {
    const id = config.url.match(/api\/products\/(\d+)/)[1];
    console.log(id);

    return [200, SuccessResponse("Success update product", "success", 200, ListProduct[0])];
  });
  // deleteOne
  mock.onDelete(/api\/products\/\d+/).reply((config) => {
    const id = config.url.match(/api\/products\/(\d+)/)[1];
    console.log(id);

    return [200, SuccessResponse("Success delete product", "success", 200, {message: "deleted"})];
  });
}
