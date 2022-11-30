import { FormControlLabel, Switch } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

export default function DefaultSwitch({ name, value, onchange, label, ...args }) {
  return (
    <FormControlLabel
      control={<Switch name={name} checked={value} onChange={onchange} />}
      label={label}
      {...args}
    />
  );
}

DefaultSwitch.defaultProps = {
  name: "name",
  value: false,
  label: "Switch",
};
DefaultSwitch.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  label: PropTypes.string,
  onchange: PropTypes.func,
};
