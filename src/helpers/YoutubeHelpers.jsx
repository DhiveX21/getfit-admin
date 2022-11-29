export function getIdYoutubeUrl(videoUrl) {
  console.log(videoUrl);
  var video_id = videoUrl.split("v=")[1];
  if (video_id) {
    var ampersandPosition = video_id.indexOf("&");
    if (ampersandPosition !== -1) {
      video_id = video_id.substring(0, ampersandPosition);
    }
  }

  return video_id;
}
