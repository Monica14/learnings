export const handleChange = (e, field) => {
  console.log("Validation: ", e.target.value);
  if (field && field === "file") {
    return e.target.files[0];
  }
  if (e.target.value) {
    return e.target.value;
  }
  // if (field === "name") {
  //   return e.target.value;
  // }
};
