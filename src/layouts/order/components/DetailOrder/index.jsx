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
import ProgressStatus from "./partial/ProgressStatus";

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

  const cancelOrder = () => {
    dispatch(actions.cancelOrderAction(params?.id)).then((response) => {
      dispatch(actions.detailOrder(params?.id));
    });
  };
  const completeOrder = () => {
    dispatch(actions.completeOrderAction(params?.id)).then((response) => {
      dispatch(actions.detailOrder(params?.id));
    });
  };
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

            <ProgressStatus status={order?.status} />

            <div className="w-full p-[20px] flex flex-col justify-center">
              <MDTypography fontSize="20px" fontWeight="bold">
                Action
              </MDTypography>
              <div className="w-full flex gap-[10px]">
                {order?.status == "unpaid" ? (
                  <>
                    <MDButton variant="gradient" color="info" onClick={completeOrder}>
                      Set To Paid
                    </MDButton>
                    <MDButton variant="gradient" color="primary" onClick={cancelOrder}>
                      Cancel Transaction
                    </MDButton>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default OrderDetail;
