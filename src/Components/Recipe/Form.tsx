import React from 'react';
import FormActions from '../FormActions';
import {
    FormWrapper,
    Input,
    TextArea
} from '../formStyles';

const Form = () => {
    // const [formData, setFormData] = useState({});

    return (
        <FormWrapper>
            <h1>New Recipe</h1>
            <form>
                <Input placeholder="Name *" required />
                <TextArea placeholder="Ingedients *" rows={20} required />
                <TextArea placeholder="Steps *" rows={20} required />
                <FormActions /> 
            </form>
        </FormWrapper>
    )
}

export default Form;