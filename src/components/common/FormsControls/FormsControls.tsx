import React from "react"
import styles from "./FormsControls.module.css"
import { FieldValidatorType } from "../../../utils/validators/validators"
import { Field, WrappedFieldProps, formValueSelector } from "redux-form"
import { WrappedFieldMetaProps } from 'redux-form/lib/Field'


import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

type FormControlPropsType = {
  meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({ meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>
        {children}
      </div>
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  //const {input, meta, child, ...restProps} = props;
  const { input, meta, ...restProps } = props;
  return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
  //const {input, meta, child, ...restProps} = props;
  const { input, meta, ...restProps } = props;
  return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const Select: React.FC<any> = (props) => {
  //const {input, meta, child, ...restProps} = props;
  const { input, options } = props;
  return <FormControl {...props}><select {...input} options={options} onChange={value => input.onChange(value)}
    onBlur={() => input.onBlur(input.value)} /></FormControl>
}

export function createField<FormKeysType extends string>(placeholder: string | undefined,
  name: FormKeysType,
  validators: Array<FieldValidatorType>,
  component: React.FC<WrappedFieldProps>,
  props = {}, text = "") {
  return <div>
    <Field placeholder={placeholder}
      name={name}
      validate={validators}
      component={component}
      {...props}
    /> {text}
  </div>
}

export type GetStringKeys<T> = Extract<keyof T, string>

export class FieldFileInput extends React.Component {
  constructor(props: any) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e: any) {
    // @ts-ignore
    const { input: { onChange } } = this.props
    onChange(e.target.files[0])
  }

  render() {
    // @ts-ignore
    const { input: { value } } = this.props
    // @ts-ignore
    const { input } = this.props
    return (<input
      type='file'
      onChange={this.onChange}
      id='upload__message'
    />
    )
  }
}

// @ts-ignore
export const ckEditorRender = ({ input }) => {
  return (
    <CKEditor
      data={input.value}
      editor={ClassicEditor}
      // @ts-ignore
      onChange={(event, editor) => {
        return input.onChange(editor.getData())
      }
      }
    />
  )
}

