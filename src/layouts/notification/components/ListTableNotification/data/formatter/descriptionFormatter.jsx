export const DescriptionColumnFormatter = ({ description }) => {
  const truncate = (str) => {
    return str.length > 100 ? str.substring(0, 7) + "..." : str;
  };
  return (
    <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{truncate(description)}</span>
  );
};
