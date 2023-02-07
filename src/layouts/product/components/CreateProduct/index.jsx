import React, { useState } from "react";
import MDBox from "components/MDBox";
import BackButton from "components/extend/Button/BackButton";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import ProductForm from "./productForm";
import MasterProductForm from "./masterProductForm";
import FacilityProductForm from "./facilityProductForm";
import { Card, Grid } from "@mui/material";

export default function CreateProduct() {
  const [mode, setMode] = useState("product");
  return (
    <MDBox pt={6} pb={3}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <MDBox
              mx={2}
              mt={-3}
              py={3}
              px={2}
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="info"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <MDBox display="flex" alignItems="center" gap="20px">
                <BackButton to="/product/list-product" />
                <MDTypography variant="h6" color="white">
                  Create Product
                </MDTypography>
              </MDBox>
              <div className="flex gap-[10px]">
                <MDButton
                  variant="gradient"
                  onClick={() => setMode("master")}
                  color={mode === "master" ? "success" : "secondary"}
                >
                  Create Master Product
                </MDButton>
                <MDButton
                  variant="gradient"
                  onClick={() => setMode("product")}
                  color={mode === "product" ? "success" : "secondary"}
                >
                  Create Product
                </MDButton>
                <MDButton
                  variant="gradient"
                  onClick={() => setMode("facility")}
                  color={mode === "facility" ? "success" : "secondary"}
                >
                  Create Facility
                </MDButton>
              </div>
            </MDBox>
            <Card>
              <div className="w-full flex flex-col justify-center items-center gap-[20px] px-[20px] my-[40px]">
                <div className="w-2/3  p-2 rounded-xl flex flex-col gap-[10px] relative ">
                  {mode === "product" ? <ProductForm /> : null}
                  {mode === "master" ? <MasterProductForm /> : null}
                  {mode === "facility" ? <FacilityProductForm /> : null}
                </div>
              </div>
            </Card>
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
}
