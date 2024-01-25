import React from "react";

const FormField = ({title}) => {
  return (
    <div >
      <div className="contact-form__row">
        <div className="contact-form__input">
          <div className="form-input">
            <label className="form-input__label" for="id_name">
              <span className="form-input__label-text">{title}</span>&nbsp;
              <span className="form__asterisk">*</span>
            </label>

            <div className="form-input__input">
              <span className="boxed-input  ">
                <span className="boxed-input__wrapper">
                  <input
                    type="text"
                    name="name"
                    className="boxed-input__input input px-3 h-full w-[98%] mx-auto text-gray-600 bg-transparent outline-none border-none py-3"
                    autocomplete="off"
                    required=""
                    id="id_name"
                  />
                  <span className="boxed-input__box">
                    <span className="boxed-input__side boxed-input__side--rear"></span>
                    <span className="boxed-input__side boxed-input__side--bottom"></span>
                    <span className="boxed-input__side boxed-input__side--top"></span>
                    <span className="boxed-input__side boxed-input__side--front"></span>
                  </span>

                  <span className="boxed-input__errors"></span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormField;
