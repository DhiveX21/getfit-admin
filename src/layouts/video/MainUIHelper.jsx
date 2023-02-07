export const requestFormatCategory = (title, description) => {
  return {
    title: title,
    description: description,
  };
};

export const requestFormat = (categoryId, title, description, videoUrl) => {
  return {
    title: title,
    description: description,
    category_id: +categoryId,
    video_url: videoUrl,
  };
};

export const requestFormatUpdate = (categoryId, title, description, videoUrl, is_active) => {
  return {
    title: title,
    description: description,
    category_id: +categoryId,
    video_url: videoUrl,
    is_active: is_active,
  };
};
