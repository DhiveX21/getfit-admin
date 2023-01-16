import React from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

export default function RelatedMenu({ subProducts, facilities }) {
  return (
    <div className="animation-popup flex flex-col gap-[20px] w-full bg-white p-[10px] rounded-lg">
      <MDBox width="100%">
        <div className="flex bg-white rounded-lg p-[15px]">
          <div className="w-full flex flex-col gap-[30px]">
            <div className="w-full">
              <MDTypography variant="h6" color="dark">
                Related Menu
              </MDTypography>
            </div>
            <div className="w-full flex flex-col bg-slate-200 p-3 rounded-lg">
              <div className="w-full">
                <MDTypography variant="h6" color="dark">
                  Sub Product
                </MDTypography>
              </div>
              <div className="flex flex-col gap-[10px] max-h-[200px] overflow-y-scroll">
                {subProducts?.map((item, index) => (
                  <div
                    className="bg-slate-100 w-full rounded-lg p-1 flex gap-[20px] justify-between items-center"
                    key={item.id}
                  >
                    <h4 className="text-[16px] px-[10px]">{item.name}</h4>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col bg-slate-200 p-3 rounded-lg">
              <div className="w-full">
                <MDTypography variant="h6" color="dark">
                  Facilities
                </MDTypography>
              </div>
              <div className="flex flex-col gap-[10px] max-h-[200px] overflow-y-scroll">
                {facilities?.map((item, index) => (
                  <div
                    className="bg-slate-100 w-full rounded-lg p-1 flex gap-[20px] justify-between items-center"
                    key={item.id}
                  >
                    <h4 className="text-[16px] px-[10px]">{item.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MDBox>
    </div>
  );
}
