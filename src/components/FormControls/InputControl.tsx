"use client";
import React from "react";
import { Field } from "formik";
import { IBasicFormProps, IFieldProps } from "@/types";
import type { TextInputProps } from "flowbite-react";
import { TextInput, Label } from "flowbite-react";
import EyeOff from "@/assets/icons/eye-off.svg";
import EyeOn from "@/assets/icons/eye.svg";
import cx from "classnames";

type InputControlProps = IBasicFormProps & TextInputProps;

function InputControl({
  name,
  label,
  labelClassName,
  type = "text",
  ...rest
}: InputControlProps) {
  return (
    <Field name={name}>
      {({ field, meta }: IFieldProps) => {
        const isFailure = meta.touched && meta.error;
        return (
          <div className="my-4 w-full">
            <Label
              className={cx("font-semibold text-body-1", labelClassName)}
              color={isFailure ? "failure" : "success"}
              htmlFor={name}
              value={label}
            />
            <TextInput
              color={isFailure ? "failure" : "success"}
              helperText={isFailure ? meta.error : ""}
              id={name}
              {...field}
              {...rest}
              type={type}
            />
          </div>
        );
      }}
    </Field>
  );
}

export function PasswordControl(props: InputControlProps) {
  const [show, setShow] = React.useState(false);

  const toggle = () => setShow((prev) => !prev);

  const EyeIcon = () =>
    show ? <EyeOff onClick={toggle} /> : <EyeOn onClick={toggle} />;

  return (
    <InputControl
      {...props}
      rightIcon={EyeIcon}
      type={show ? "text" : "password"}
    />
  );
}

export default InputControl;
