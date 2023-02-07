import React, { useEffect, useState } from "react";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import DefaultSwitch from "components/extend/Switch/DefaultSwitch";
import * as actions from "layouts/product/MainAction";
import SubProductForm from "../../SubProductForm";
import { FormHelperText } from "@mui/material";

export default function UpdateForm({ product }) {
  const dispatch = useDispatch();

  const [masterOptions, setMasterOptions] = useState([]);
  const [fieldSubProduct, setFieldSubProduct] = useState([{ id: "", amount: 0, quota: 0 }]);

  // define react hook form
  const {
    control,
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const { master, facilities } = useSelector((state) => ({
    master: state.product.master,
    facilities: state.product.facilities,
  }));

  // if redux master is not define , re fetch from action
  useEffect(() => {
    dispatch(actions.masterAction());
    dispatch(actions.facilitiesAction());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // handle submit for react hook form
  const onSubmit = (data) => {
    // dispatching to update patient action
    data.facilities = data.facilities ? data.facilities.map((item, index) => +item) : [];
    data.sub_products = data.sub_products
      ? data.sub_products?.map((item, index) => {
          return {
            id: item.id,
            amount: +item.amount,
            quota: +item.quota,
          };
        })
      : [];
    dispatch(
      actions.updateAction(
        {
          code: data.code,
          name: data.name,
          quota: +data.quota,
          description: data.description,
          amount: +data.amount,
          cost_paid: +data.cost_paid,
          status: data.status ?? "non-active",
          sub_products: data.sub_products,
          facilities: data.facilities,
        },
        product.id
      )
    );
  };

  // filling the form with current patient Data
  useEffect(() => {
    let tmpFacilities = product?.facilities?.map((item, index) => String(item.id));
    let tmpSubProduct = product?.sub_products?.map((item, index) => ({
      id: item.master_id,
      label: item.name,
      amount: item.amount,
      quota: item.quota,
    }));
    setFieldSubProduct(tmpSubProduct);
    setValue("code", product.code, { shouldDirty: true });
    setValue("name", product.name, { shouldDirty: true });
    setValue("quota", product.quota, { shouldDirty: true });
    setValue("description", product.description, { shouldDirty: true });
    setValue("amount", product.amount, { shouldDirty: true });
    setValue("cost_paid", product.cost_paid, { shouldDirty: true });
    setValue("status", product.status, { shouldDirty: true });
    setValue("facilities", tmpFacilities, { shouldDirty: true });
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
  }, [fieldSubProduct]); // eslint-disable-line react-hooks/exhaustive-deps

  function addFieldHandle() {
    setFieldSubProduct([...fieldSubProduct, { id: 0, amount: 0, quota: 0 }]);
  }

  function editQuotaField(index, quotaValue) {
    let tempField = [...fieldSubProduct];
    let tempValue = {
      ...tempField[index],
      quota: quotaValue,
    };

    tempField[index] = tempValue;
    setFieldSubProduct(tempField);
  }
  function editAmountField(index, amountValue) {
    let tempField = [...fieldSubProduct];
    let tempValue = {
      ...tempField[index],
      amount: amountValue,
    };

    tempField[index] = tempValue;

    setFieldSubProduct(tempField);
  }
  function editMasterField(index, masterValue) {
    let tempField = [...fieldSubProduct];
    let tempValue = {
      ...tempField[index],
      id: masterValue,
    };

    tempField[index] = tempValue;
    setFieldSubProduct(tempField);
  }

  return (
    <div className="animation-popup flex flex-col gap-[20px] w-full bg-white p-[10px] rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-[20px] flex-col">
        <MDBox display="flex" justifyContent="center" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            UPDATE VIDEO
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
        {/* Quota Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Quota
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
            render={({ field }) => <MDInput {...field} fullWidth multiline rows={5} />}
          />
        </MDBox>
        {/* Amount Field */}
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Amount
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
            Input Cost Paid
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
                multiline
                rows={1}
              />
            )}
          />
        </MDBox>
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Status Product
          </MDTypography>

          <Controller
            name="status"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <DefaultSwitch {...field} label={getValues("status") ? "Active" : "Non-Active"} />
            )}
          />
        </MDBox>
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
          {fieldSubProduct.map((item, index) => {
            if (item.id === "") {
              return null;
            }
            return (
              <MDBox key={index} display="flex-column" alignItems="center" gap="20px">
                <SubProductForm
                  masterData={masterOptions}
                  item={item}
                  editMasterHandle={(masterValue) => editMasterField(index, masterValue)}
                  editQuotaHandle={(quotaValue) => editQuotaField(index, quotaValue)}
                  editAmountHandle={(amountValue) => editAmountField(index, amountValue)}
                />
              </MDBox>
            );
          })}
        </MDBox>
        <MDButton
          variant="gradient"
          color="info"
          onClick={() => {
            addFieldHandle();
          }}
        >
          Add Record
        </MDButton>
        <MDButton className="w-full" variant="gradient" color="success" type="submit">
          Submit
        </MDButton>
      </form>
    </div>
  );
}
