import { message } from "antd";

export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => {
    if (value) return undefined;

    return "Field is required";
}

export const maxLengthCreator = (maxLength: number): FieldValidatorType => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

// const fileMinSize = 1 * 1000 * 1000; // 1MB
// const fileMaxSize = 50 * 1000 * 1000; // 50MB

// export const uploadValidate =  (values:any) => {
//     debugger
//   let errors:any = {};

//   console.log(values);

//   if (!values) {
//     errors.file = 'Required';
    
//   } else {
//     let file = values

//     if (!file.name.endsWith('.stl') || !file.name.endsWith('.obj')) {
//       errors.file = 'Scan file must be an .STL or .OBJ file';
//     } else if (file.size < fileMinSize) {
//       errors.file = 'Scan file must be atleast 1MB';
//     } else if (file.size > fileMaxSize) {
//       errors.file = 'Scan file cannot exceed 50MB size';
//     }
//   }

//   console.log(errors);
//   // Object {file: "Required"}

//   return errors;
// }