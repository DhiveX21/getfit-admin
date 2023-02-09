import React, { useEffect, useState } from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { useSelector, useDispatch } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import * as actions from "layouts/product/MainAction";
import DefaultSwitch from "components/extend/Switch/DefaultSwitch";
import { FormHelperText } from "@mui/material";
import SubProductForm from "../../SubProductForm";
import { requestFormat } from "layouts/product/MainUIHelper";
import { useNavigate } from "react-router-dom";

export default function ProductForm() {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [masterOptions, setMasterOptions] = useState([]);
  const [fieldSubProduct, setFieldSubProduct] = useState([{ id: "", amount: 0, quota: 0 }]);

  const { master, facilities } = useSelector((state) => ({
    master: state.product.master,
    facilities: state.product.facilities,
  }));

  // if redux master is not define , re fetch from action
  useEffect(() => {
    dispatch(actions.masterAction());
    dispatch(actions.facilitiesAction());
  }, []);

  //filling the options for master
  useEffect(() => {
    let tempOptions = [];
    master?.forEach((item, index) => {
      tempOptions = [...tempOptions, { value: item.id, label: item.name }];
    });
    setMasterOptions(tempOptions);
  }, [master]);

  useEffect(() => {
    setValue("sub_products", fieldSubProduct, { shouldDirty: true });
  }, [fieldSubProduct]);

  const onSubmit = (data) => {
    if (Array.isArray(data.facilities)) {
      data.facilities = data.facilities.map((item, index) => +item);
    } else {
      data.facilities = +data.facilities;
    }
    dispatch(actions.createAction(requestFormat(data))).then(() => {
      navigate("/product/list-product");
    });
  };

  function addFieldHandle() {
    setFieldSubProduct([...fieldSubProduct, { id: "", amount: 0, quota: 0 }]);
  }

  function editMasterField(index, masterValue) {
    let tempField = [...fieldSubProduct];
    if (masterValue) {
      let tempValue = {
        ...tempField[index],
        id: masterValue ? masterValue : fieldSubProduct[index].master,
      };

      tempField[index] = tempValue;
    }
    setFieldSubProduct(tempField);
  }

  function editQuotaField(index, quotaValue) {
    let tempField = [...fieldSubProduct];
    if (quotaValue) {
      let tempValue = {
        ...tempField[index],
        quota: quotaValue ? +quotaValue : +fieldSubProduct[index].quota,
      };

      tempField[index] = tempValue;
    }

    setFieldSubProduct(tempField);
  }

  function editAmountField(index, amountValue) {
    let tempField = [...fieldSubProduct];
    if (amountValue) {
      let tempValue = {
        ...tempField[index],
        amount: amountValue ? +amountValue : +fieldSubProduct[index].amount,
      };

      tempField[index] = tempValue;
    }
    setFieldSubProduct(tempField);
  }

  return (
    <div className="animation-popup flex flex-col gap-[20px] mt-[20px]">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-[20px] flex-col">
        <MDBox display="flex" justifyContent="center" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            CREATE PRODUCT
          </MDTypography>
        </MDBox>
        {/* Code Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Code
          </MDTypography>
          {errors.code && (
            <FormHelperText>
              {errors.code.type === "required" && "Field is required"}
            </FormHelperText>
          )}

          <Controller
            name="code"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <MDInput {...field} fullWidth required label="Code" multiline rows={1} />
            )}
          />
        </MDBox>
        {/* Name Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Name
          </MDTypography>
          {errors.name && (
            <FormHelperText>
              {errors.name.type === "required" && "Field is required"}
            </FormHelperText>
          )}

          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <MDInput {...field} fullWidth required label="Name" multiline rows={1} />
            )}
          />
        </MDBox>
        {/* Total Quota Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Total Quota
          </MDTypography>
          {errors.quota && (
            <FormHelperText>
              {errors.quota.type === "required" && "Field is required"}
            </FormHelperText>
          )}

          <Controller
            name="quota"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <MDInput
                {...field}
                type="number"
                fullWidth
                required
                label="Quota"
                multiline
                rows={1}
              />
            )}
          />
        </MDBox>
        {/* Description Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Description
          </MDTypography>

          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <MDInput {...field} fullWidth label="Description" multiline rows={5} />
            )}
          />
        </MDBox>
        {/* Amount Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Total Amount
          </MDTypography>
          {errors.amount && (
            <FormHelperText>
              {errors.amount.type === "required" && "Field is required"}
            </FormHelperText>
          )}

          <Controller
            name="amount"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <MDInput
                {...field}
                type="number"
                fullWidth
                required
                label="Amount"
                multiline
                rows={1}
              />
            )}
          />
        </MDBox>
        {/* Cost Paid Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Total Cost Paid
          </MDTypography>
          {errors.cost_paid && (
            <FormHelperText>
              {errors.cost_paid.type === "required" && "Field is required"}
            </FormHelperText>
          )}

          <Controller
            name="cost_paid"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <MDInput
                {...field}
                type="number"
                fullWidth
                required
                label="Cost Paid"
                {...register("cost_paid")}
                multiline
                rows={1}
              />
            )}
          />
        </MDBox>
        {/* Status Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Status Product
          </MDTypography>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <DefaultSwitch {...field} label={getValues("status") ? "Active" : "Non-Active"} />
            )}
          />
        </MDBox>
        {/* Facilities Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Facilities
          </MDTypography>
          {facilities?.map((item, index) => (
            <div key={index}>
              <input type="checkbox" id={item.slug} value={item.id} {...register("facilities")} />
              <label htmlFor={item.slug} className="text-[16px] ml-[3px] mr-[20px]">
                {item.name}
              </label>
            </div>
          ))}
        </MDBox>
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography color="text">Sub Product</MDTypography>
          {fieldSubProduct.map((item, index) => (
            <MDBox key={index} display="flex-column" alignItems="center" gap="20px">
              <SubProductForm
                masterData={masterOptions}
                editMasterHandle={(masterValue) => editMasterField(index, masterValue)}
                editQuotaHandle={(quotaValue) => editQuotaField(index, quotaValue)}
                editAmountHandle={(amountValue) => editAmountField(index, amountValue)}
              />
            </MDBox>
          ))}
        </MDBox>
        <MDButton
          variant="gradient"
          onClick={() => {
            addFieldHandle();
          }}
          color="info"
        >
          Add Record
        </MDButton>
        <MDButton variant="gradient" color="success" type="submit">
          Send
        </MDButton>
      </form>
    </div>
  );
}
