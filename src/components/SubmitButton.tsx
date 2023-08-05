import { Button, ButtonProps } from "flowbite-react";
import { FormikContext } from "formik";
import { useContext } from "react";

function SubmitButton({ isProcessing, ...props }: ButtonProps) {
  const formikContext = useContext(FormikContext);

  return (
    <Button
      {...props}
      isProcessing={formikContext?.isSubmitting || isProcessing}
      type="submit"
      disabled={
        formikContext
          ? !formikContext?.isValid || formikContext.isSubmitting
          : isProcessing || props?.disabled
      }
    >
      {props?.children}
    </Button>
  );
}

export default SubmitButton;
