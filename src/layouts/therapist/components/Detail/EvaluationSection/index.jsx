import React from "react";
import MDTypography from "components/MDTypography";

export default function EvaluationSection({ evaluations }) {
  return (
    <>
      <div className="w-full flex flex-col justify-center gap-[20px] px-[20px] border-blue-500 border-solid border-l-4">
        {evaluations.map((item, index) => {
          return (
            <div key={index} className="w-full flex flex-col gap-[5px] py-[20px]">
              <MDTypography color="dark" fontSize="14px" fontWeight="bold">
                {item.rating.rating_value}
              </MDTypography>
              <div className="w-full bg-gray-100 p-2 rounded-xl">
                <MDTypography color="dark" fontSize="14px" fontWeight="regular">
                  {item.rating.comment}
                </MDTypography>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
