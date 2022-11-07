import React from "react";
import PropTypes from "prop-types";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

export const ProductDetail = ({ name, price, desc, facilities }) => {
  const compFacility = facilities.map((item, index) => {
    return (
      <MDTypography display="flex" color="text" fontSize="14px" key={index}>
        {item.name}
        <MDBadge badgeContent="1X" color="success" variant="gradient" size="sm" />
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
      <div className=" flex flex-col gap-[10px] ">
        <MDTypography color="text" fontSize="16px" fontWeight="bold">
          Fasilitas
        </MDTypography>
        <div className=" flex flex-wrap gap-[10px] ">{compFacility}</div>
      </div>
    </div>
  );
};

ProductDetail.defaultProps = {
  name: "",
  price: 0,
  desc: "",
  facilities: [],
};

ProductDetail.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  desc: PropTypes.string,
  facilities: PropTypes.array,
};
