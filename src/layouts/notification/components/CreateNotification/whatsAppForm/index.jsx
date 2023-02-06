import React, { useEffect, useMemo, useState } from "react";
import * as actions from "layouts/notification/MainAction";
import { useDispatch } from "react-redux";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Swal from "sweetalert2";
import makeAnimated from "react-select/animated";
import withReactContent from "sweetalert2-react-content";
import CreatableSelect from "react-select/creatable";
import { useMainUIContext } from "layouts/notification/MainUIContext";
import { Controller, useForm } from "react-hook-form";
import { FormHelperText } from "@mui/material";
import { RequestFormatWA } from "layouts/notification/MainUIHelper";

export default function WhatsappForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [patientOptions, setPatientOptions] = useState([]);
  const animatedComponents = makeAnimated();

  const MySwal = withReactContent(Swal);

  const mainUIContext = useMainUIContext();
  const { patientData } = useMemo(() => {
    return {
      patientData: mainUIContext.patientData,
    };
  }, [mainUIContext]);

  const dispatch = useDispatch();

  useEffect(() => {
    let tempOptions = [];
    patientData?.map((item, index) => {
      tempOptions = [
        ...tempOptions,
        {
          value: item.user.phone_number,
          label: item.user.name + " >>> " + item.user.phone_number,
        },
      ];
    });
    setPatientOptions(tempOptions);
  }, [patientData]);

  function onSubmit(data) {
    if (data.patient.length > 0) {
      let flag = true;
      for (let i = 0; i < data.patient.length; i++) {
        if (data.patient[i].value.charAt(0) !== "+") {
          MySwal.fire({
            title: `Please Change the first character on Phone Number with +62`,
            icon: "error",
          });
          flag = false;
          break;
        }
      }

      if (flag) {
        data.patient.map((item) => {
          dispatch(actions.createToWAAction(RequestFormatWA(item.value.substring(1), data.message)));
        });
      }
    } else {
      MySwal.fire({
        title: "Please Select Patient/Input Phone Number First",
        icon: "error",
      });
    }
  }
  return (
    <div className="animation-popup flex flex-col gap-[20px] mt-[20px]">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-[20px] flex-col">
        <MDBox display="flex" justifyContent="center" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            CREATE CATEGORY NOTIFICATION
          </MDTypography>
        </MDBox>
        {/* Patient Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Select Patient
          </MDTypography>
          {errors.patient && (
            <FormHelperText>
              {errors.patient.type === "required" && "Field is required"}
            </FormHelperText>
          )}
          <Controller
            name="patient"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <CreatableSelect
                {...field}
                className="basic-single text-[14px] z-10"
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={patientOptions}
              />
            )}
          />
        </MDBox>
        {/* Message Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Message
          </MDTypography>
          {errors.message && (
            <FormHelperText>
              {errors.message.type === "required" && "Field is required"}
            </FormHelperText>
          )}
          <Controller
            name="message"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <MDInput {...field} fullWidth required label="Message" multiline rows={5} />
            )}
          />
        </MDBox>

        <MDButton variant="gradient" color="success" type="submit">
          Send
        </MDButton>
      </form>
    </div>
  );
}
