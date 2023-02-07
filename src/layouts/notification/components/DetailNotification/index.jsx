import React, { useEffect, useState } from "react";
import MDBox from "components/MDBox";
import BackButton from "components/extend/Button/BackButton";
import MDTypography from "components/MDTypography";
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";
import { useParams } from "react-router-dom";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import * as actions from "layouts/notification/MainAction";
import Detail from "./detail";
import { Card, Grid } from "@mui/material";
// import CategoryForm from "../CreateNotification/categoryForm";
import UpdateForm from "./updateForm";

export default function DetailNotification() {
  const params = useParams();
  const [mode, setMode] = useState("detail");

  const dispatch = useDispatch();
  const { obj } = useSelector(
    (state) => ({
      obj: state.notification.obj,
      actionLoading: state.notification.actionLoading,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.detailAction(params.id));

    return () => {
      dispatch(actions.detailAction(undefined));
    };
  }, [params.id]); // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <MDBox pt={6} pb={3}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
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
                <BackButton to="/notification/list-notification" />
                <MDTypography variant="h6" color="white">
                  Detail Notification
                </MDTypography>
              </MDBox>
              <div className="flex gap-[10px]">
                {mode !== "update" && mode !== "detail" && (
                  <Link to="/notification/create">
                    <MDTypography variant="caption" color="text" fontWeight="medium">
                      <MDButton variant="gradient" color="success">
                        Create New
                      </MDButton>
                    </MDTypography>
                  </Link>
                )}
                {mode === "detail" && !obj?.is_important && (
                  <MDTypography variant="caption" color="text" fontWeight="medium">
                    <MDButton variant="gradient" onClick={() => setMode("update")} color="warning">
                      Edit Notification
                    </MDButton>
                  </MDTypography>
                )}
                {(mode === "update" || mode === "category") && (
                  <MDTypography variant="caption" color="text" fontWeight="medium">
                    <MDButton variant="gradient" onClick={() => setMode("detail")} color="warning">
                      Detail Notification
                    </MDButton>
                  </MDTypography>
                )}

                {mode !== "update" && mode !== "detail" && (
                  <MDTypography variant="caption" color="text" fontWeight="medium">
                    <MDButton
                      variant="gradient"
                      onClick={() => setMode("category")}
                      color="success"
                    >
                      New Category
                    </MDButton>
                  </MDTypography>
                )}
              </div>
            </MDBox>
            {mode === "detail" && obj && <Detail obj={obj} />}
            {mode === "update" && (
              <div className="w-full flex flex-col justify-center items-center gap-[20px] px-[20px] my-[40px]">
                <div className="w-2/3  p-2 rounded-xl flex flex-col gap-[10px] relative ">
                  <UpdateForm obj={obj} />
                </div>
              </div>
            )}
            {mode === "category" && (
              <></>
              // <div className="w-full flex flex-col justify-center items-center gap-[20px] px-[20px] my-[40px]">
              //   <div className="w-2/3  p-2 rounded-xl flex flex-col gap-[10px] relative ">
              //     <CategoryForm />
              //   </div>
              // </div>
            )}
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
}
