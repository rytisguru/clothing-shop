import { InputHTMLAttributes, FC } from 'react';

import {
    Group,
    Input,
    InputLabel,
} from './form-input.styles';

type FormInputProps = {
    label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...props }) => {
    return (
        <Group>
            <Input {...props} />
            {label && <InputLabel shrink={
                Boolean(props.value && typeof props.value === 'string' && props.value.length)
            }>
                {label}
            </InputLabel>}
        </Group>
    )
}

export default FormInput;