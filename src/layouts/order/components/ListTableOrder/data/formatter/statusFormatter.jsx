import MDBadge from "components/MDBadge";

export const StatusColumnFormatter = ({ status }) => {
  return (
    <>
      {status === "complete" ? (
        <MDBadge badgeContent="completed" color="success" variant="gradient" size="sm" />
      ) : (
        <MDBadge badgeContent="active" color="warning" variant="gradient" size="sm" />
      )}
    </>
  );
};
