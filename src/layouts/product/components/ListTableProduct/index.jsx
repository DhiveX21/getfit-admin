import React, { useEffect, useMemo } from "react";
import DataTable from "components/extend/Tables/DataTable";
import productTableData from "./data/productTableData";
import { dataTableProduct } from "layouts/product/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useProductUIContext } from "layouts/product/productUIContext";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";

export default function ListTableProduct() {
  const { currentState } = useSelector((state) => ({ currentState: state.product.product }));
  const { totalCount, entities } = currentState;
  const dispatch = useDispatch();
  const productUIContext = useProductUIContext();
  const productUIProps = useMemo(() => {
    return {
      queryParams: productUIContext.queryParams,
      setQueryParams: productUIContext.setQueryParams,
    };
  }, [productUIContext]);

  useEffect(() => {
    dispatch(dataTableProduct(productUIProps.queryParams));
  }, [productUIProps.queryParams]); // eslint-disable-line react-hooks/exhaustive-deps

  const { columns, rows } = productTableData(entities);

  return (
    <>
      <MDBox
        mx={2}
        mt={-3}
        py={3}
        px={2}
        variant="gradient"
        bgColor="info"
        borderRadius="lg"
        coloredShadow="info"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <MDTypography variant="h6" color="white">
          Product
        </MDTypography>
        <Link to="/product/create">
          <MDTypography variant="caption" color="text" fontWeight="medium">
            <MDButton variant="gradient" color="success">
              Create New
            </MDButton>
          </MDTypography>
        </Link>
      </MDBox>
      <MDBox p={2}>
        <DataTable
          params={productUIProps.queryParams}
          totalCount={totalCount}
          setParams={productUIProps.setQueryParams}
          table={{ columns, rows }}
        />
      </MDBox>
    </>
  );
}
