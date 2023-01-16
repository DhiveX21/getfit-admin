import React, { useEffect, useState } from "react";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { updateProductAction } from "layouts/product/productAction";
import DefaultSwitch from "components/extend/Switch/DefaultSwitch";
import { masterProductAction } from "layouts/product/productAction";
import { facilitiesProductAction } from "layouts/product/productAction";
import SubProductForm from "../../SubProductForm";

export default function UpdateForm({ product }) {
  const dispatch = useDispatch();
  const [inputStatus, setInputStatus] = useState(false);
  const [masterOptions, setMasterOptions] = useState([]);
  const [fieldSubProduct, setFieldSubProduct] = useState([{ id: "", amount: 0, quota: 0 }]);
  // define react hook form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { master, facilities } = useSelector((state) => ({
    master: state.product.product.master,
    facilities: state.product.product.facilities,
  }));

  // if redux master is not define , re fetch from action
  useEffect(() => {
    dispatch(masterProductAction());
    dispatch(facilitiesProductAction());
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
      updateProductAction({
        code: data.code,
        name: data.name,
        quota: +data.quota,
        description: data.description,
        amount: +data.amount,
        cost_paid: +data.cost_paid,
        status: data.status ?? "non-active",
        sub_products: data.sub_products,
        facilities: data.facilities,
      }, product.id)
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
    setInputStatus(product.status === "active" ? true : false);
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

  function handleChangeStatus(e) {
    setValue("status", e.target.checked ? "active" : "non-active", { shouldDirty: true });
    setInputStatus(e.target.checked);
  }

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

  // define Category  to select to field
  // let defaultCategoryOption;
  // let defaultCategoryValue;

  // defaultCategoryOption = { value: video.category.id, label: video.category.title };
  // defaultCategoryValue = video.category.id;

  // const [categoryOptions, setCategoryOptions] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState(defaultCategoryValue);
  // const { category } = useSelector((state) => ({ category: state.exercise.video.category }));
  return (
    <div className="animation-popup flex flex-col gap-[20px] w-full bg-white p-[10px] rounded-lg">
      <MDBox display="flex" justifyContent="center" alignItems="center" gap="20px">
        <MDTypography variant="h6" color="text">
          UPDATE VIDEO
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
            Input Quota{" "}
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
            Input Amount
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
            Input Cost Paid
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
        {/* <MDBox display="flex-column" alignItems="center" gap="20px" className="z-8">
          <MDTypography variant="h6" color="text">
            Input Status{" "}
            {errors.status?.type === "required" ? (
              <span className="error-hint" role="alert">
                Status is required
              </span>
            ) : (
              ""
            )}
          </MDTypography>
          <input
            type="radio"
            id="active"
            value="active"
            {...register("status", {
              required: true,
            })}
          />
          <label htmlFor="active" className="text-[16px] ml-[3px] mr-[20px]">
            Active
          </label>
          <input
            type="radio"
            id="non_active"
            value="non-active"
            {...register("status", {
              required: true,
            })}
          />
          <label htmlFor="non_active" className="text-[16px] ml-[3px]">
            Non Active
          </label>
        </MDBox> */}

        <MDButton className="w-full" variant="gradient" color="success" type="submit">
          Submit
        </MDButton>
      </form>
    </div>
  );
}
