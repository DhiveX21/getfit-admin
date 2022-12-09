import React, { useEffect, useState } from "react";
import MDBox from "components/MDBox";
import BackButton from "components/extend/Button/BackButton";
import MDTypography from "components/MDTypography";
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";
import { useParams } from "react-router-dom";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import * as actions from "layouts/video/videoAction";

import Detail from "./detail";
import UpdateForm from "./updateForm";
import CategoryForm from "../CreateVideo/categoryForm";

export default function DetailVideo() {
  const params = useParams();
  const [mode, setMode] = useState("detail");

  const dispatch = useDispatch();
  const { video } = useSelector(
    (state) => ({
      video: state.exercise.video.video,
      videoActionLoading: state.exercise.actionLoading,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.detailVideo(params.id));

    return () => {
      dispatch(actions.detailVideo(undefined));
    };
  }, [params.id]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-col">
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
          <BackButton to="/video/list-video" />
          <MDTypography variant="h6" color="white">
            Detail Video
          </MDTypography>
        </MDBox>
        <div className="flex gap-[10px]">
          {mode !== "detail" && mode !== "update" && (
            <Link to="/video/create">
              <MDButton variant="gradient" color="success">
                Create New
              </MDButton>
            </Link>
          )}
          {mode === "detail" && (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              <MDButton variant="gradient" onClick={() => setMode("update")} color="warning">
                Edit Video
              </MDButton>
            </MDTypography>
          )}
          {(mode === "update" || mode === "category") && (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              <MDButton variant="gradient" onClick={() => setMode("detail")} color="warning">
                Detail Video
              </MDButton>
            </MDTypography>
          )}
          {mode !== "detail" && mode !== "update" && (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              <MDButton variant="gradient" onClick={() => setMode("category")} color="success">
                New Category
              </MDButton>
            </MDTypography>
          )}
        </div>
      </MDBox>
      {mode === "detail" && <Detail video={video} />}
      {mode === "update" && <UpdateForm video={video} />}
      {mode === "category" && (
        <div className="w-full flex flex-col justify-center items-center gap-[20px] px-[20px] my-[40px]">
          <div className="w-2/3  p-2 rounded-xl flex flex-col gap-[10px] relative ">
            <CategoryForm />
          </div>
        </div>
      )}
    </div>
  );
}
