export const RequestFormat = (patients, isImportant, categoryId, title, description) => {
  let valPatients = null;
  if (patients) {
    valPatients = patients.map((item,index) => item.value)
  }
  return {
    title: title,
    description: description,
    category_id: +categoryId,
    user_id: valPatients,
    is_important: isImportant,
  };
};

export const RequestFormatUpdate = (isImportant, categoryId, title, description) => {
  return {
    title: title,
    description: description,
    category_id: +categoryId,
    is_important: isImportant,
  };
};

export const RequestFormatCategory = (title, description) => {
  return {
    title: title,
    description: description,
  };
};
export const RequestFormatWA = (phoneNumber, message) => {
  return {
    phone: phoneNumber,
    messageType: "text",
    body: message,
  };
};
