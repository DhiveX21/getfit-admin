/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Card, SvgIcon } from "@mui/material";
import MDButton from "components/MDButton";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../orderAction";
import { ProductDetail, PatientDetail, Header } from "./partial";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function OrderDetail() {
  // Get Params
  const params = useParams();

  // Redux
  const dispatch = useDispatch();
  const { order } = useSelector(
    (state) => ({
      order: state.order?.order,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.detailOrder(params?.id));

    return () => {
      dispatch(actions.detailOrder(undefined));
    };
  }, [params.id, dispatch]);

  return (
    <MDBox pt={6} pb={3}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <Header title="Detail Order" />
            <div className="flex">
              <PatientDetail
                name={order?.patient?.name}
                address={order?.patient?.address}
                birth_date={order?.patient?.birth_date}
              />

              <ProductDetail
                name={order?.product?.name}
                price={order?.price_paid}
                desc={order?.product?.description}
                facilities={order?.product?.facilities}
              />
            </div>

            <div className="w-full p-[20px] flex flex-col justify-center">
              <MDTypography fontSize="20px" fontWeight="bold">
                Progress Status
              </MDTypography>
              <div className="w-full flex gap-[10px] items-center">
                <div className="w-full min-h-[100px] bg-green-500 rounded-xl p-[10px]">
                  <MDTypography width="60%" color="white" fontSize="14px">
                    Ordered via Websites.
                  </MDTypography>
                </div>
                <SvgIcon color="primary">
                  <path
                    fill="currentColor"
                    d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z"
                  />
                </SvgIcon>
                <div className="w-full min-h-[100px] bg-green-500 rounded-xl p-[10px]">
                  <MDTypography width="60%" color="white" fontSize="14px">
                    Generate VA Number.
                  </MDTypography>
                </div>
                <SvgIcon color="primary">
                  <path
                    fill="currentColor"
                    d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z"
                  />
                </SvgIcon>
                <div className="w-full min-h-[100px] bg-blue-500 rounded-xl p-[10px] animate-pulse">
                  <MDTypography width="60%" color="white" fontSize="14px">
                    Waiting for Payment
                  </MDTypography>
                </div>
                <SvgIcon color="primary">
                  <path
                    fill="currentColor"
                    d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z"
                  />
                </SvgIcon>
                <div className="w-full min-h-[100px] bg-gray-500 rounded-xl p-[10px]">
                  <MDTypography width="60%" color="white" fontSize="14px">
                    Settlement
                  </MDTypography>
                </div>
              </div>
            </div>

            <div className="w-full p-[20px] flex flex-col justify-center">
              <MDTypography fontSize="20px" fontWeight="bold">
                Action
              </MDTypography>
              <div className="w-full flex gap-[10px]">
                <MDButton variant="gradient" color="info">
                  Set To Paid
                </MDButton>
                <MDButton variant="gradient" color="primary">
                  Cancel Transaction
                </MDButton>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default OrderDetail;
