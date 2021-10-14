import React from 'react'
import {InjectedFormProps, reduxForm,formValueSelector, Field} from 'redux-form'
import {createField, GetStringKeys, Input,Select} from '../../components/common/FormsControls/FormsControls'
import {required} from '../../utils/validators/validators'
import {connect, useDispatch, useSelector} from 'react-redux'
import { AppStateType } from '../../redux/redux'


import { addLabel } from '../../redux/label-reducer'
import { compose } from 'redux'
import { MainLayout } from '../../components/layout/MainLayout'


const LabelForm: React.FC<any> = ({handleSubmit, error,submitting}) => {
    const colorOptions = [
        {color: 'green'},
        {color: 'blue'},
        {color: 'red'}
    ]
    return (
        <form onSubmit={handleSubmit}>
            {createField<LabelFormValuesTypeKeys>('Name', 'name', [required], Input)}
            
            {createField<LabelFormValuesTypeKeys>(undefined, 'showOnMail', [], Input, {type: 'checkbox'}, 'Show on mail')}

            <Field name="favoriteColor" component="select">
            <option></option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
            <div>
                <button>Save</button>
            </div>
        </form>
    )
}
const selector = formValueSelector('selectingFormValues')

const mapStateToProps = (state: AppStateType) => {
    const colorValue = selector(state,"color")
    return ({
        colorValue
    })
}

//connect(mapStateToProps,{addLabel}),

const LabelFormReduxForm:any = reduxForm({form: 'selectingFormValues'})(LabelForm)

export type LabelFormValuesType = {
    name: string
    showOnMail: boolean | number
    favoriteColor: string
}
type LabelFormValuesTypeKeys = GetStringKeys<LabelFormValuesType>

export const NewLabel: React.FC = () => {
    const dispatch = useDispatch()

    const onSubmit = (formData: LabelFormValuesType) => {
        if(!!formData.showOnMail){
            formData.showOnMail = 1
        }else{
            formData.showOnMail = 0
        }
        console.log(formData,'formData')
        dispatch(addLabel(formData.name,formData.showOnMail,formData.favoriteColor))
    }
    return <div>
        <MainLayout>
        <LabelFormReduxForm onSubmit={onSubmit} />
        </MainLayout>
    </div>
}
