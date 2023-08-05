import { toast } from "react-hot-toast";

export function setFormServerError(
  err: unknown,
  setErrors: (err: Record<string, string>) => void
) {
  let error = err as any;
  if (error?.status === 400 && error?.data) {
    const formError = Object.keys(error?.data).reduce((acc, curr) => {
      acc[curr] = error?.data[curr]?.join("");
      return acc;
    }, {} as Record<string, string>);

    setErrors(formError);
  } else {
    toast.error("Oops Something went wrong");
  }
}
