import {FormikProps} from 'formik';

const defaultErrorMsg = 'Something was wrong';

export function parseErrorAPI(error: any) {
  if (!error) {
    return defaultErrorMsg;
  }
  if (!error.error) {
    return defaultErrorMsg;
  }

  if (
    Array.isArray(error.error.errors) &&
    error.error.errors.length > 0 &&
    error.error.errors[0].msg
  ) {
    return error.error.errors[0].msg;
  } else if (typeof error.error === 'string') {
    return error.error;
  }

  return defaultErrorMsg;
}

export function parseError(formik: FormikProps<any>, error: any) {
  return (name?: string) => {
    if (!name) {
      // Check is empty object touched
      const touched = Object.values(formik.touched);
      if (touched.length === 0) {
        return false;
      }

      // Change object to array and get first error value
      const errorsArray = Object.values(formik.errors);
      if (errorsArray.length > 0) {
        return errorsArray[0];
      }

      if (error) {
        return parseErrorAPI(error);
      }

      return false;
    }

    // return text if touched and have error
    if (!formik.touched[name]) {
      return false;
    }
    return formik.errors[name] || false;
  };
}
