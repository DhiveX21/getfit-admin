import MDTypography from "components/MDTypography";
import React from "react";
import { appointmentStatusStep } from "_shareVar";

export default function ProgressStatus({ status }) {
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

  const steps = appointmentStatusStep.map((item, index) => {
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
      <div className={`w-full ${color} rounded-xl p-[10px]`} key={index}>
        <MDTypography width="60%" color="white" fontSize="14px">
          {item.value}
        </MDTypography>
      </div>
    );
  });
  return (
    <div className="w-full p-[20px] flex flex-col justify-center">
      <MDTypography fontSize="20px" fontWeight="bold">
        Progress Status
      </MDTypography>
      <div className="w-full flex gap-[10px]">{steps}</div>
    </div>
  );
}
