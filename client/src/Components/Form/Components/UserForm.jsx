import React from "react";
import { Formik, Form } from "formik";
import { validationSchema } from "../validation";
import { useDispatch } from "react-redux";
import { formClose } from "../../../reducers/modal.reducer";
import ConfirmButton from "../../Buttons/ConfirmButton/ConfirmButton";
import { RxCross2 } from "react-icons/rx";
import { modalSubmitOpen } from "../../../reducers";

import Input from "./Input/Input";
import "./UserForm.scss";

const UserForm = () => {
  const dispatch = useDispatch();

  const formInfo = (values) => {
    const userCartInfo = JSON.parse(localStorage.getItem("cart"));
    console.log(userCartInfo);
    dispatch(formClose());
    dispatch(modalSubmitOpen());
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
              <RxCross2
                className="close-icon"
                onClick={() => {
                  dispatch(formClose());
                }}
              />

              <h1 className="form-title">Please, fill the form</h1>

              <Input
                name="name"
                placeholder="Name"
                error={errors.name && touched.name}
                type="text"
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                error={errors.lastName && touched.lastName}
                type="text"
              />
              <Input
                name="age"
                placeholder="age"
                error={errors.age && touched.age}
                type="number"
              />
              <Input
                name="address"
                placeholder="address"
                error={errors.address && touched.address}
                type="text"
              />
              <Input
                name="phone"
                placeholder="phone number"
                error={errors.phone && touched.phone}
                type="tel"
              />
              <ConfirmButton
                text="Submit"
                type="submit"
                className="confirm-btn"
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UserForm;
