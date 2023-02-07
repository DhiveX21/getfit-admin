import MDTypography from "components/MDTypography";
import React, { useRef } from "react";
import { appointmentStatusStep } from "_shareVar";
import * as actions from "../../../../MainAction";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import MDBadge from "components/MDBadge";

export default function ProgressStatus({ type, linkMeeting, status }) {
  const params = useParams();
  const linkMeetingInput = useRef();
  const dispatch = useDispatch();
  let flagCurrent = false;

  const addLinkMeetingHandle = () => {
    dispatch(actions.addMeetingLinkAction(params?.id, linkMeetingInput.current.value)).then(
      (response) => {
        dispatch(actions.detailAction(params?.id));
      }
    );
  };

  if (status === "cancel") {
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
    if (item.key === "cancel") {
      return "";
    }
    let color = "bg-green-500";
    if (flagCurrent === false && item.key === status) {
      color = "bg-blue-500";
      flagCurrent = true;
    } else if (flagCurrent === true && item.key !== status) {
      color = "bg-gray-500";
    } else {
      color = "bg-green-500";
    }
    return (
      <div className={`w-full ${color} rounded-xl p-[10px]`} key={index}>
        <MDTypography width="60%" color="white" fontSize="14px">
          {item.value}
        </MDTypography>

        {item.key === "treatment" && type === "tele_physio" && status !== "complete" ? (
          <>
            <MDTypography width="60%" marginTop="20px" color="white" fontSize="12px">
              Input Meeting Link
            </MDTypography>
            <div className="flex">
              {status === appointmentStatusStep[2].key ||
                (status === appointmentStatusStep[3].key && (
                  <>
                    <input
                      type="text"
                      ref={linkMeetingInput}
                      className="rounded-lg text-[14px] px-[10px] py-[5px]"
                      defaultValue={linkMeeting}
                    />
                    <button
                      onClick={() => addLinkMeetingHandle()}
                      className="bg-green-500 px-[5px] py-[3px] text-white text-[12px] rounded-lg ml-[5px]"
                    >
                      Lock
                    </button>
                  </>
                ))}
            </div>
          </>
        ) : null}
      </div>
    );
  });
  return (
    <div className="w-full p-[20px] flex flex-col justify-center">
      <MDTypography fontSize="20px" fontWeight="bold">
        Progress Status <MDBadge badgeContent={type} color="info" variant="gradient" size="sm" />
      </MDTypography>
      <div className="w-full flex gap-[10px]">{steps}</div>
    </div>
  );
}
