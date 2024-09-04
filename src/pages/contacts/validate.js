export const Validation = (values) => {
  let errors = {};
  console.log(values);
  // Kiểm tra email với miền @parent.com
  const email__require =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!email__require.test(values.email)) {
    errors.email = "Email must be a valid @parent.com address";
  }

  if (values.name === "") {
    errors.name = "Name is not empty !!";
  }
  if (values.subject === "") {
    errors.subject = "Subject is not empty !!";
  }
  // Các kiểm tra khác...

  return errors;
};
