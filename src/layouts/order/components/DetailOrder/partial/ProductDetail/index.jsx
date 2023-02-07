import React from "react";
import PropTypes from "prop-types";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import { Badge } from "@mui/material";

export const ProductDetail = ({ name, price, desc, link, facilities, sub_products }) => {
  const compFacility = facilities.map((item, index) => {
    return (
      <MDTypography display="flex" color="text" fontSize="14px" key={index}>
        {item.name}
        {","}
      </MDTypography>
    );
  });
  const compSubProduct = sub_products?.map((item, index) => {
    return (
      <MDTypography display="flex" color="text" fontSize="14px" key={index}>
        {item.name}
        <MDBadge badgeContent={`${item.quota}X`} color="success" variant="gradient" size="sm" />
      </MDTypography>
    );
  });
  return (
    <div className="w-1/2 p-[20px]">
      <MDTypography fontSize="20px" fontWeight="bold">
        Product Detail
      </MDTypography>

      <div className=" flex gap-[10px] ">
        <MDTypography width="40%" color="text" fontSize="14px">
          Product Name
        </MDTypography>
        <MDTypography width="10%" color="text" fontSize="14px">
          :
        </MDTypography>
        <MDTypography width="50%" color="text" fontSize="14px">
          {name}
        </MDTypography>
      </div>
      <div className=" flex gap-[10px] ">
        <MDTypography width="40%" color="text" fontSize="14px">
          Price
        </MDTypography>
        <MDTypography width="10%" color="text" fontSize="14px">
          :
        </MDTypography>
        <MDTypography width="50%" color="text" fontSize="14px">
          <b>{price}</b>
        </MDTypography>
      </div>
      <div className=" flex gap-[10px] ">
        <MDTypography width="40%" color="text" fontSize="14px">
          Description
        </MDTypography>
        <MDTypography width="10%" color="text" fontSize="14px">
          :
        </MDTypography>
        <MDTypography width="50%" color="text" fontSize="14px">
          {desc}
        </MDTypography>
      </div>
      <div className=" flex gap-[10px] ">
        <MDTypography width="40%" color="text" fontSize="14px">
          Link Payment
        </MDTypography>
        <MDTypography width="10%" color="text" fontSize="14px">
          :
        </MDTypography>
        <MDTypography width="50%" color="text" fontSize="14px">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <MDBadge
              badgeContent="Link"
              color="primary"
              variant="gradient"
              size="sm"
            />
          </a>
        </MDTypography>
      </div>
      <div className=" flex flex-col gap-[10px] ">
        <MDTypography color="text" fontSize="16px" fontWeight="bold">
          Fasilitas
        </MDTypography>
        <div className=" flex flex-wrap gap-[10px] ">{compFacility}</div>
      </div>
      <div className=" flex flex-col gap-[10px] ">
        <MDTypography color="text" fontSize="16px" fontWeight="bold">
          Sub Product
        </MDTypography>
        <div className=" flex flex-wrap gap-[10px] ">{compSubProduct}</div>
      </div>
    </div>
  );
};

ProductDetail.defaultProps = {
  name: "",
  price: 0,
  desc: "",
  link: "",
  facilities: [],
  sub_products: [],
};

ProductDetail.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  desc: PropTypes.string,
  link: PropTypes.string,
  facilities: PropTypes.array,
  sub_products: PropTypes.array,
};
