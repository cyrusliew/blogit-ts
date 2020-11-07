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
            <h1>New Blog</h1>
            <form>
                <Input placeholder="Title *" required />
                <TextArea placeholder="Body *" rows={20} required />
                <FormActions /> 
            </form>
        </FormWrapper>
    )
}

export default Form;