import { SvgIcon } from "@mui/material";
import MDTypography from "components/MDTypography";
import React from "react";
import { orderStatusStep } from "_shareVar";

export default function index({ status }) {
  let flagCurrent = false;

  if (status == "cancel") {
    return (
      <div className="w-full p-[20px] flex flex-col justify-center">
        <MDTypography fontSize="20px" fontWeight="bold">
          Progress Status
        </MDTypography>
        <div className="w-full flex gap-[10px] items-center">
          <div className={`w-full min-h-[100px] bg-green-500 rounded-xl p-[10px]`}>
            <MDTypography width="60%" color="white" fontSize="14px">
              Cancel
            </MDTypography>
          </div>
        </div>
      </div>
    );
  }

  const steps = orderStatusStep.map((item, index) => {
    if (item.key == "cancel") {
      return "";
    }
    let color = "bg-green-500";
    if (flagCurrent == false && item.key == status) {
      color = "bg-blue-500";
      flagCurrent = true;
    } else if (flagCurrent == true && item.key != status) {
      color = "bg-gray-500";
    } else {
      color = "bg-green-500";
    }
    return (
      <>
        <div className={`w-full min-h-[100px] ${color} rounded-xl p-[10px]`}>
          <MDTypography width="60%" color="white" fontSize="14px">
            {item.value}
          </MDTypography>
        </div>

        {index != orderStatusStep.length - 1 ? (
          <SvgIcon color="primary">
            <path
              fill="currentColor"
              d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z"
            />
          </SvgIcon>
        ) : (
          ""
        )}
      </>
    );
  });

  return (
    <div className="w-full p-[20px] flex flex-col justify-center">
      <MDTypography fontSize="20px" fontWeight="bold">
        Progress Status
      </MDTypography>
      <div className="w-full flex gap-[10px] items-center">{steps}</div>
    </div>
  );
}
