import React from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

export default function RelatedMenu() {
  return (
    <MDBox width="70%">
      <div className="flex bg-white rounded-lg p-[15px] opacity-30">
        <div className="w-full flex flex-col gap-[30px]">
          <div className="w-full">
            <MDTypography variant="h6" color="dark">
              Related Menu
            </MDTypography>
          </div>
          <div className="w-full flex flex-col bg-slate-200 p-3 rounded-lg">
            <div className="w-full">
              <MDTypography variant="h6" color="dark">
                Appointment
              </MDTypography>
            </div>
            <div className="flex flex-col gap-[10px] max-h-[200px] overflow-y-scroll">
              <div className="bg-slate-100 w-full rounded-lg p-1 flex gap-[20px] justify-between items-center">
                <h4 className="text-[18px]">appointment 1</h4>
                <div className="flex gap-[10px]">
                  <MDButton variant="gradient" color="info">
                    Detail
                  </MDButton>
                </div>
              </div>
              <div className="bg-slate-100 w-full rounded-lg p-1 flex gap-[20px] justify-between items-center">
                <h4 className="text-[18px]">appointment 1</h4>
                <div className="flex gap-[10px]">
                  <MDButton variant="gradient" color="info">
                    Detail
                  </MDButton>
                </div>
              </div>
              <div className="bg-slate-100 w-full rounded-lg p-1 flex gap-[20px] justify-between items-center">
                <h4 className="text-[18px]">appointment 1</h4>
                <div className="flex gap-[10px]">
                  <MDButton variant="gradient" color="info">
                    Detail
                  </MDButton>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col bg-slate-200 p-3 rounded-lg">
            <div className="w-full">
              <MDTypography variant="h6" color="dark">
                Medical Record
              </MDTypography>
            </div>
            <div className="flex flex-col gap-[10px] max-h-[200px] overflow-y-scroll">
              <div className="bg-slate-100 w-full rounded-lg p-1 flex gap-[20px] justify-between items-center">
                <h4 className="text-[18px]">Record1</h4>
                <div className="flex gap-[10px]">
                  <MDButton variant="gradient" color="info">
                    Detail
                  </MDButton>
                </div>
              </div>
              <div className="bg-slate-100 w-full rounded-lg p-1 flex gap-[20px] justify-between items-center">
                <h4 className="text-[18px]">Record1</h4>
                <div className="flex gap-[10px]">
                  <MDButton variant="gradient" color="info">
                    Detail
                  </MDButton>
                </div>
              </div>
              <div className="bg-slate-100 w-full rounded-lg p-1 flex gap-[20px] justify-between items-center">
                <h4 className="text-[18px]">Record1</h4>
                <div className="flex gap-[10px]">
                  <MDButton variant="gradient" color="info">
                    Detail
                  </MDButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MDBox>
  );
}
