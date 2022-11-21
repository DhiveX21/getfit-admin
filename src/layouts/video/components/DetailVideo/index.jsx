import React, { useEffect } from "react";
import MDBox from "components/MDBox";
import BackButton from "components/extend/Button/BackButton";
import MDTypography from "components/MDTypography";
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";
import { useParams } from "react-router-dom";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import * as actions from "layouts/video/videoAction";
import { useNavigate } from "react-router-dom";
import { getIdYoutubeUrl } from "helpers/YoutubeHelpers";

export default function DetailVideo() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { video, videoActionLoading } = useSelector(
    (state) => ({
      video: state.exercise.video.video,
      videoActionLoading: state.exercise.actionLoading,
    }),
    shallowEqual
  );

  const handleVideoDelete = () => {
    if (window.confirm("Are you sure to delete this video?")) {
      dispatch(actions.deleteVideoAction(params.id));
      navigate("/video/list-video");
    }
  };
  useEffect(() => {
    dispatch(actions.detailVideo(params.id));

    return () => {
      dispatch(actions.detailVideo(undefined));
    };
  }, [params.id]);
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
        <Link to="/video/create">
          <MDTypography variant="caption" color="text" fontWeight="medium">
            <MDButton variant="gradient" color="success">
              Create New
            </MDButton>
          </MDTypography>
        </Link>
      </MDBox>
      <div className="flex">
        <div className="w-1/2 p-[20px]">
          <MDTypography fontSize="20px" fontWeight="bold">
            Video Detail
          </MDTypography>

          <div className=" flex gap-[10px] ">
            <MDTypography width="40%" color="text" fontSize="14px">
              Video Title
            </MDTypography>
            <MDTypography width="10%" color="text" fontSize="14px">
              :
            </MDTypography>
            <MDTypography width="50%" color="text" fontSize="14px">
              {video?.title}
            </MDTypography>
          </div>

          <div className=" flex gap-[10px] ">
            <MDTypography width="40%" color="text" fontSize="14px">
              Video Description
            </MDTypography>
            <MDTypography width="10%" color="text" fontSize="14px">
              :
            </MDTypography>
            <MDTypography width="50%" color="text" fontSize="14px">
              {video?.description}
            </MDTypography>
          </div>

          <div className=" flex gap-[10px] ">
            <MDTypography width="40%" color="text" fontSize="14px">
              Video Status
            </MDTypography>
            <MDTypography width="10%" color="text" fontSize="14px">
              :
            </MDTypography>
            <MDTypography width="50%" color="text" fontSize="14px">
              {video?.is_active ? "Active" : "inActive"}
            </MDTypography>
          </div>

          <div className=" flex gap-[10px] ">
            <MDTypography width="40%" color="text" fontSize="14px">
              Video Url
            </MDTypography>
            <MDTypography width="10%" color="text" fontSize="14px">
              :
            </MDTypography>
            <MDTypography width="50%" color="text" fontSize="14px">
              {video?.video_url}
            </MDTypography>
          </div>
          <div className=" flex gap-[10px] ">
            <MDTypography width="40%" color="text" fontSize="14px">
              Category
            </MDTypography>
            <MDTypography width="10%" color="text" fontSize="14px">
              :
            </MDTypography>
            <MDTypography width="50%" color="text" fontSize="14px">
              {video?.category_id}
            </MDTypography>
          </div>
        </div>
        <div className="w-1/2 p-[20px]">
          <MDTypography fontSize="20px" fontWeight="bold">
            User Detail
          </MDTypography>

          <div className=" flex gap-[10px] ">
            <MDTypography width="40%" color="text" fontSize="14px">
              Patient is watching
            </MDTypography>
            <MDTypography width="10%" color="text" fontSize="14px">
              :
            </MDTypography>
            {video?.video_watches?.length > 0 ? (
              <div className="flex flex-col overflow-y-scroll max-h-[200px] bg-slate-200 p-1 rounded-lg">
                {video?.video_watches?.map((item) => {
                  return (
                    <MDTypography width="50%" color="text" fontSize="14px" className="text-left">
                      <p className="break-keep">{item.user.name}</p>
                    </MDTypography>
                  );
                })}
              </div>
            ) : (
              <MDTypography width="50%" color="text" fontSize="14px" className="text-left">
                <p className="break-keep">None</p>
              </MDTypography>
            )}
          </div>
        </div>
      </div>
      <div className="w-full p-[20px] flex flex-col justify-center">
        <MDTypography color="dark" fontSize="20px" fontWeight="bold">
          Video
        </MDTypography>
        <MDBox
          display="flex"
          flexDirection="column"
          bgColor="lightGray"
          borderRadius="10px"
          alignItems="center"
          gap="20px"
          padding="20px"
        >
          <MDTypography color="primary" fontSize="16px" fontWeight="medium">
            {video?.title}
          </MDTypography>
          <MDTypography color="dark" fontSize="16px" fontWeight="medium">
            {video?.description}
          </MDTypography>

          {video?.video_url ? (
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${getIdYoutubeUrl(video.video_url)}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          ) : null}
        </MDBox>
      </div>

      <div className="w-full p-[20px] flex flex-col justify-center">
        <MDTypography color="dark" fontSize="20px" fontWeight="bold">
          Action
        </MDTypography>
        <div className="w-full flex gap-[10px]">
          <MDButton variant="outlined" color="primary" onClick={() => handleVideoDelete()}>
            DELETE
          </MDButton>
        </div>
      </div>
    </div>
  );
}
