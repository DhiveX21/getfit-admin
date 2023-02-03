import React from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { useDispatch } from "react-redux";
import * as actions from "layouts/patient/MainAction";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export default function PatientForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(
      actions.createAction({
        name: data.fullname,
        phone_number: data.phoneNumber,
        email: data.email,
        password: data.password,
        birth_date: data.birthdate,
        address: data.address,
        gender: data.gender,
      })
    ).then((result) => {
      navigate("/patient/list-patient");
    }).catch((err) => {
      console.log(err);
      MySwal.fire({
        title: "Can't Create patient",
        icon: "error",
      });
    });
  };

  return (
    <div className="animation-popup flex flex-col gap-[20px] w-full bg-white p-[10px] rounded-lg">
      <MDBox display="flex" justifyContent="center" alignItems="center" gap="20px">
        <MDTypography variant="h6" color="text">
          CREATE PATIENT
        </MDTypography>
      </MDBox>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-[20px] flex-col">
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Fullname
          </MDTypography>
          <MDInput className=" z-8" fullWidth required label="Fullname" {...register("fullname")} />
        </MDBox>
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Phone Number{" "}
            {errors.phoneNumber?.type === "required" ? (
              <span className="error-hint" role="alert">
                Phone Number is required
              </span>
            ) : errors.phoneNumber?.type === "pattern" ? (
              <span className="error-hint" role="alert">
                Phone Number must be formatted by +62
              </span>
            ) : errors.phoneNumber?.type === "maxLength" ? (
              <span className="error-hint" role="alert">
                Phone Number Max 20 Digit
              </span>
            ) : (
              ""
            )}
          </MDTypography>
          <MDInput
            className=" z-8"
            fullWidth
            required
            label="Phone Number"
            type="tel"
            {...register("phoneNumber", {
              required: true,
              maxLength: 20,
              pattern: /^(\+62)8[1-9][0-9]{6,11}$/,
            })}
          />
        </MDBox>
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Gender{" "}
            {errors.gender?.type === "required" ? (
              <span className="error-hint" role="alert">
                Gender is required
              </span>
            ) : (
              ""
            )}
          </MDTypography>

          <input
            type="radio"
            id="female"
            value="female"
            {...register("gender", {
              required: true,
            })}
          />
          <label htmlFor="female" className="text-[16px] ml-[3px] mr-[20px]">
            Female
          </label>
          <input
            type="radio"
            id="male"
            value="male"
            {...register("gender", {
              required: true,
            })}
          />
          <label htmlFor="male" className="text-[16px] ml-[3px]">
            Male
          </label>
        </MDBox>
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Email{" "}
            {errors.email?.type === "required" ? (
              <span className="error-hint" role="alert">
                Email is required
              </span>
            ) : errors.email?.type === "pattern" ? (
              <span className="error-hint" role="alert">
                Wrong Email Format
              </span>
            ) : (
              ""
            )}
          </MDTypography>
          <MDInput
            className=" z-8"
            fullWidth
            required
            label="Email"
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            })}
          />
        </MDBox>
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Password
          </MDTypography>
          <MDInput
            className=" z-8"
            fullWidth
            required
            label="Password"
            type="password"
            {...register("password")}
          />
        </MDBox>
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input birthdate
          </MDTypography>
          <MDInput className=" z-8" fullWidth required type="date" {...register("birthdate")} />
        </MDBox>
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Address
          </MDTypography>
          <MDInput
            className=" z-8"
            fullWidth
            required
            label="Address"
            type="text"
            {...register("address")}
            multiline
            rows={3}
          />
        </MDBox>

        <MDButton className="w-full" variant="gradient" color="success" type="submit">
          Submit
        </MDButton>
      </form>
    </div>
  );
}
