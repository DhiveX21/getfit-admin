import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getIdYoutubeUrl } from "helpers/YoutubeHelpers";
import { useDispatch } from "react-redux";
import * as actions from "layouts/video/MainAction";

export default function Detail({ obj }) {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDelete = () => {
    if (window.confirm("Are you sure to delete this video ?")) {
      dispatch(actions.deleteAction(params.id));
      navigate("/video/list-video");
    }
  };
  return (
    <>
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
              {obj.title}
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
              {obj.description}
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
              {obj.is_active ? "Active" : "Non-Active"}
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
              {obj.video_url}
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
              {obj.category?.title}
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
            {obj.video_watches?.length > 0 ? (
              <div className="ml-auto w-full flex flex-col overflow-y-scroll max-h-[200px] bg-slate-200 p-1 rounded-lg">
                {obj.video_watches?.map((item) => {
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
            {obj.title}
          </MDTypography>
          <MDTypography color="dark" fontSize="16px" fontWeight="medium">
            {obj.description}
          </MDTypography>

          {obj.video_url ? (
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${getIdYoutubeUrl(obj.video_url)}`}
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
          <MDButton variant="outlined" color="primary" onClick={() => handleDelete()}>
            DELETE
          </MDButton>
        </div>
      </div>
    </>
  );
}
