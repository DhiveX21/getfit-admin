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
import { Card } from "@mui/material";
import MDButton from "components/MDButton";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../MainAction";
import { ProductDetail, PatientDetail, Header } from "./partial";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ProgressStatus from "./partial/ProgressStatus";

function OrderDetail() {
  // Get Params
  const params = useParams();

  // Redux
  const dispatch = useDispatch();
  const { obj } = useSelector(
    (state) => ({
      obj: state.order?.obj,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.detailAction(params?.id));

    return () => {
      dispatch(actions.detailAction(undefined));
    };
  }, [params.id, dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

  const cancelOrder = () => {
    if (window.confirm("Are you sure to cancel order this data ?")) {
      dispatch(actions.cancelAction(params?.id)).then((response) => {
        dispatch(actions.detailAction(params?.id));
      });
    }
  };
  const completeOrder = () => {
    if (window.confirm("Are you sure to complete order this data ?")) {
      dispatch(actions.completeAction(params?.id)).then((response) => {
        dispatch(actions.detailAction(params?.id));
      });
    }
  };
  return (
    <>
      {obj && (
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <Header title="Detail Order" />
                <div className="flex">
                  <PatientDetail
                    name={obj.patient?.name}
                    address={obj.patient?.address}
                    birth_date={obj.patient?.birth_date}
                    phone_number={obj.patient?.user?.phone_number}
                  />

                  <ProductDetail
                    name={obj.product?.name}
                    price={obj.price_paid}
                    desc={obj.product?.description}
                    link={obj.payment_url}
                    facilities={obj.product?.facilities}
                    sub_products={obj.product?.sub_products}
                  />
                </div>

                <ProgressStatus status={obj.status} />

                <div className="w-full p-[20px] flex flex-col justify-center">
                  <MDTypography fontSize="20px" fontWeight="bold">
                    Action
                  </MDTypography>
                  <div className="w-full flex gap-[10px]">
                    {obj.status === "unpaid" ? (
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
      )}
    </>
  );
}

export default OrderDetail;
