import React, { useEffect, useState } from "react";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
// import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { createProductAction } from "layouts/product/productAction";
import { masterProductAction } from "layouts/product/productAction";
import DefaultSwitch from "components/extend/Switch/DefaultSwitch";
import SubProductForm from "../../SubProductForm";
import { facilitiesProductAction } from "layouts/product/productAction";

export default function ProductForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const [inputStatus, setInputStatus] = useState(false);
  const [masterOptions, setMasterOptions] = useState([]);
  const [fieldSubProduct, setFieldSubProduct] = useState([{ id: "", amount: 0, quota: 0 }]);

  const { master, facilities } = useSelector((state) => ({
    master: state.product.product.master,
    facilities: state.product.product.facilities,
  }));

  // if redux master is not define , re fetch from action
  useEffect(() => {
    dispatch(masterProductAction());
    dispatch(facilitiesProductAction());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

  const onSubmit = (data) => {
    data.facilities = data.facilities.map((item, index) => +item);
    dispatch(
      createProductAction({
        code: data.code,
        name: data.name,
        quota: +data.quota,
        description: data.description,
        amount: +data.amount,
        cost_paid: +data.cost_paid,
        status: data.status ?? "non-active",
        sub_products: data.sub_products,
        facilities: data.facilities,
      })
    );
  };
  function handleChangeStatus(e) {
    setValue("status", (e.target.checked ? "active" : "non-active"), { shouldDirty: true });
    setInputStatus(e.target.checked);
  }
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
      <MDBox display="flex" justifyContent="center" alignItems="center" gap="20px">
        <MDTypography variant="h6" color="text">
          CREATE PRODUCT
        </MDTypography>
      </MDBox>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-[20px] flex-col">
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Code{" "}
            {errors.code?.type === "required" ? (
              <span className="error-hint" role="alert">
                Code is required
              </span>
            ) : (
              ""
            )}
          </MDTypography>
          <MDInput
            fullWidth
            required
            label="Code"
            {...register("code", {
              required: true,
            })}
            multiline
            rows={1}
          />
        </MDBox>
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Name{" "}
            {errors.name?.type === "required" ? (
              <span className="error-hint" role="alert">
                Name is required
              </span>
            ) : (
              ""
            )}
          </MDTypography>
          <MDInput
            fullWidth
            required
            label="Name"
            {...register("name", {
              required: true,
            })}
            multiline
            rows={1}
          />
        </MDBox>
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Total Quota{" "}
            {errors.quota?.type === "required" ? (
              <span className="error-hint" role="alert">
                Quota is required
              </span>
            ) : (
              ""
            )}
          </MDTypography>
          <MDInput
            type="number"
            fullWidth
            required
            label="Quota"
            {...register("quota", {
              required: true,
            })}
            multiline
            rows={1}
          />
        </MDBox>
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Description
          </MDTypography>
          <MDInput fullWidth label="Description" {...register("description")} multiline rows={5} />
        </MDBox>
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Total Amount
          </MDTypography>
          <MDInput
            type="number"
            fullWidth
            required
            label="Amount"
            {...register("amount")}
            multiline
            rows={1}
          />
        </MDBox>
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Input Total Cost Paid
          </MDTypography>
          <MDInput
            type="number"
            fullWidth
            required
            label="Cost Paid"
            {...register("cost_paid")}
            multiline
            rows={1}
          />
        </MDBox>
        <MDBox display="flex-column" alignItems="center" gap="20px">
          <MDTypography variant="h6" color="text">
            Status Product
          </MDTypography>
          <DefaultSwitch
            name="status"
            label={inputStatus ? "Active" : "Non-Active"}
            onchange={handleChangeStatus}
            value={inputStatus}
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
