import * as yup from "yup";

export const productSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  price: yup.number().typeError("Price must be a number").required().positive("Price must be positive"),
  category: yup.string().required("Category is required"),
  image: yup.string().url("Invalid URL").required("Image is required"),
  description: yup.string().required("Description is required"),
});
