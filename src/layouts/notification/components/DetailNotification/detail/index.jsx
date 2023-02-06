import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import React from "react";
import * as actions from "layouts/notification/MainAction";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import MDBadge from "components/MDBadge";

export default function Detail({ obj }) {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNotificationDelete = () => {
    if (window.confirm("Are you sure to delete this notification?")) {
      dispatch(actions.deleteAction(params.id)).then(() => {
        navigate("/notification/list-notification");
      });
    }
  };

  return (
    <>
      <div className="flex">
        <div className="w-1/2 p-[20px]">
          <MDTypography fontSize="20px" fontWeight="bold">
            Notification Detail
          </MDTypography>

          <div className=" flex gap-[10px] ">
            <MDTypography width="40%" color="text" fontSize="14px">
              Notification Created At
            </MDTypography>
            <MDTypography width="10%" color="text" fontSize="14px">
              :
            </MDTypography>
            <MDTypography width="50%" color="text" fontSize="14px">
              {obj?.created_at}
            </MDTypography>
          </div>

          <div className=" flex gap-[10px] ">
            <MDTypography width="40%" color="text" fontSize="14px">
              Priority
            </MDTypography>
            <MDTypography width="10%" color="text" fontSize="14px">
              :
            </MDTypography>
            <MDTypography width="50%" color="text" fontSize="14px">
              {obj?.is_important ? "Prioritas" : "Normal"}
            </MDTypography>
          </div>
          <div className=" flex gap-[10px] ">
            <MDTypography width="40%" color="text" fontSize="14px">
              Category
            </MDTypography>
            <MDTypography width="10%" color="text" fontSize="14px">
              :
            </MDTypography>
            <MDTypography width="50%" color="text" fontSize="14px">
              {obj?.category?.title}
            </MDTypography>
          </div>
        </div>
        <div className="w-1/2 p-[20px]">
          <MDTypography fontSize="20px" fontWeight="bold">
            User Detail
          </MDTypography>

          <div className=" flex gap-[10px] ">
            <MDTypography width="40%" color="text" fontSize="14px">
              Target
            </MDTypography>
            <MDTypography width="10%" color="text" fontSize="14px">
              :
            </MDTypography>
            <MDTypography width="50%" color="text" fontSize="14px">
              {obj?.user_id === -1 ? (
                "All Patient"
              ) : (
                <div className="flex flex-col overflow-y-scroll max-h-[200px] bg-slate-200 p-1 rounded-lg">
                  {obj?.patient?.map((item) => {
                    return (
                      <MDTypography width="50%" color="text" fontSize="14px" className="text-left">
                        <p className="break-keep">{item.name}</p>
                      </MDTypography>
                    );
                  })}
                </div>
              )}
            </MDTypography>
          </div>
        </div>
      </div>
      <div className="w-full p-[20px] flex flex-col justify-center">
        <MDTypography color="dark" fontSize="20px" fontWeight="bold">
          Notification{" "}
          <MDBadge
            badgeContent={obj?.is_important ? "Prioritas": "Reguler"}
            color={obj?.is_important ? "Primary": "Warning"}
            variant="gradient"
            size="sm"
          />
        </MDTypography>
        <MDBox
          display="flex"
          flexDirection="column"
          bgColor="lightGray"
          borderRadius="10px"
          alignItems="center"
          gap="20px"
          padding="20px"
        >
          <MDTypography color="primary" fontSize="16px" fontWeight="medium">
            {obj?.title}
          </MDTypography>
          <MDTypography color="dark" fontSize="16px" fontWeight="medium">
            {obj?.description}
          </MDTypography>
        </MDBox>
      </div>

      <div className="w-full p-[20px] flex flex-col justify-center">
        <MDTypography color="dark" fontSize="20px" fontWeight="bold">
          Action
        </MDTypography>
        <div className="w-full flex gap-[10px]">
          <MDButton variant="outlined" color="primary" onClick={() => handleNotificationDelete()}>
            DELETE
          </MDButton>
        </div>
      </div>
    </>
  );
}
