import React, { useEffect, useState } from "react";
import MDBox from "components/MDBox";
import BackButton from "components/extend/Button/BackButton";
import MDTypography from "components/MDTypography";
// import { Link } from "react-router-dom";
import MDButton from "components/MDButton";
import { useNavigate, useParams } from "react-router-dom";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import * as actions from "layouts/product/MainAction";
import ProductProfile from "./productProfile";
import RelatedMenu from "./RelatedMenu";
import UpdateForm from "./updateForm";
import FacilityProductForm from "../CreateProduct/facilityProductForm";
import MasterProductForm from "../CreateProduct/masterProductForm";

export default function DetailProduct() {
  const params = useParams();
  const [mode, setMode] = useState("detail");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { product } = useSelector(
    (state) => ({
      product: state.product.obj,
      actionLoading: state.product.actionLoading,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.detailAction(params.id));

    return () => {
      dispatch(actions.detailAction(undefined));
    };
  }, [params.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDeleteProduct = () => {
    if (window.confirm("Are you sure Delete this product?")) {
      dispatch(actions.deleteAction(params.id));
      navigate("/product/list-product");
    }
  };

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
        <MDBox display="flex" alignItems="center" gap="20px">
          <BackButton to="/product/list-product" />
          <MDTypography variant="h6" color="white">
            Detail Product
          </MDTypography>
        </MDBox>

        <MDTypography variant="caption" color="text" fontWeight="medium" display="flex" gap="20px">
          {mode === "detail" && (
            <MDButton variant="gradient" color="warning" onClick={() => setMode("update")}>
              Edit
            </MDButton>
          )}
          {mode === "update" && (
            <MDButton variant="gradient" color="warning" onClick={() => setMode("detail")}>
              Cancel Edit
            </MDButton>
          )}
          {(mode === "facility" || mode === "master") && (
            <MDButton variant="gradient" color="warning" onClick={() => setMode("detail")}>
              Back
            </MDButton>
          )}
          {mode === "detail" && (
            <MDButton variant="gradient" color="primary" onClick={() => handleDeleteProduct()}>
              Delete
            </MDButton>
          )}
          {(mode === "detail" || mode === "facility") && (
            <MDButton
              variant="gradient"
              color={mode === "facility" ? "success" : "secondary"}
              onClick={() => setMode("facility")}
            >
              Create Facility
            </MDButton>
          )}
          {(mode === "detail" || mode === "master") && (
            <MDButton
              variant="gradient"
              color={mode === "master" ? "success" : "secondary"}
              onClick={() => setMode("master")}
            >
              Create Master
            </MDButton>
          )}
        </MDTypography>
      </MDBox>
      <MDBox p={2} display="flex" gap="20px">
        <MDBox width="30%" height="100%">
          <ProductProfile product={product} />
        </MDBox>
        {mode === "detail" && (
          <RelatedMenu subProducts={product?.sub_products} facilities={product?.facilities} />
        )}
        {mode === "update" && <UpdateForm product={product} />}
        {mode === "facility" && <FacilityProductForm />}
        {mode === "master" && <MasterProductForm />}
      </MDBox>
    </>
  );
}
