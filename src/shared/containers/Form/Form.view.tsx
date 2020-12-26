import React from 'react';
import { FormViewProps } from './Form.types';

export const FormView: React.FC<FormViewProps> = ({ name, fields }) => {
  return (
    <form name={name}>
      <input
        name={fields.name.name}
        value={fields.name.value}
        onChange={fields.name.setValue}
      />
      <input
        name={fields.age.name}
        value={fields.age.value}
        onChange={fields.age.setValue}
      />
    </form>
  );
};