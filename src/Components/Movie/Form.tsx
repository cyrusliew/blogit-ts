import React from 'react';
import FormActions from '../FormActions';
import {
    FormWrapper,
    Input,
    TextArea
} from '../formStyles';
import StarRating from './StarRating';

const Form = () => {
    // const [formData, setFormData] = useState({});

    return (
        <FormWrapper>
            <h1>New Movie</h1>
            <form>
                <Input placeholder="Title *" required />
                <div>
                    {[...Array(5)].map((e, index) => (
                        <StarRating
                            index={index}
                            required
                        />
                    ))}
                    *
                </div>
                <Input placeholder="IMDB Link" />
                <Input placeholder="Release date" type="date" />
                <TextArea placeholder="Review *" rows={20} required />
                <FormActions /> 
            </form>
        </FormWrapper>
    )
}

export default Form;