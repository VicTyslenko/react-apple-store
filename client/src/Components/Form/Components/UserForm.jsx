import { Formik, Form } from "formik";
import { useState } from "react";
import { validationSchema } from "../validation";
import { useDispatch } from "react-redux";
import { formClose } from "../../../reducers/modal.reducer";
import ConfirmButton from "../../Buttons/ConfirmButton/ConfirmButton";
import sendRequest from "../../../Helpers/sendRequest";
import { API_URL } from "../../../config/API";
import { RxCross2 } from "react-icons/rx";
import { openModal, closeModal } from "../../../reducers";

import Input from "./Input/Input";
import "./UserForm.scss";

const UserForm = () => {
  const dispatch = useDispatch();
  const [serverError, setServerError] = useState(null);

  const formInfo = async (values) => {
    try {
      const result = await sendRequest(`${API_URL}/api/register`, "POST", values);
      if (result.status >= 200 && result.status < 300) {
        console.log(result.data.message);
        setServerError(null);
        dispatch(formClose());
        dispatch(openModal("isModalSubmit"));
        dispatch(closeModal("isDescriptionModal"));
      } else {
        setServerError(result.data);
        console.log(result.data);
      }
    } catch (error) {
      console.error("Network or server error:", error);
      setServerError("An unexpected error occurred");
    }
  };

  return (
    <div className="form-container">
      <div
        className="form-wrapper"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Formik
          initialValues={{
            name: "",
            lastName: "",
            age: "",
            address: "",
            phone: "",
          }}
          onSubmit={(values) => formInfo(values)}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="close-icon-wrapp">
                <RxCross2
                  className="close-icon"
                  onClick={() => {
                    dispatch(formClose());
                  }}
                />
              </div>

              <h1 className="form-title">Please, fill the form</h1>

              <Input name="name" placeholder="Name" error={errors.name && touched.name} type="text" />
              <Input name="lastName" placeholder="Last Name" error={errors.lastName && touched.lastName} type="text" />
              <Input name="age" placeholder="age" error={errors.age && touched.age} type="number" />
              <Input name="address" placeholder="address" error={errors.address && touched.address} type="text" />
              <Input name="phone" placeholder="phone number" error={errors.phone && touched.phone} type="tel" />
              <ConfirmButton text="Submit" type="submit" className="confirm-btn" />
            </Form>
          )}
        </Formik>
        {serverError && <p className="error-message">{serverError}</p>}
      </div>
    </div>
  );
};

export default UserForm;
