//For uploaded files, edit file to fileName-Date format
export const editStudentsFileName = (req, file, callback) => {
  const name = `${file.originalFileName}-${Date.now().toLocaleString()}`;
  callback(null, name);
};
