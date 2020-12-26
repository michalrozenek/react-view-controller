import React from 'react';

import { FormView } from './Form.view';
import { FormFieldName } from './Form.types';

const FormController: React.FC = () => {
  const [name, setName] = React.useState<string>('');
  const [age, setAge] = React.useState<string>('');

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  }

  const getFields = () => ({
    [FormFieldName.NAME]: {
      name: FormFieldName.NAME,
      value: name,
      setValue: handleName,
    },
    [FormFieldName.AGE]: {
      name: FormFieldName.AGE,
      value: age,
      setValue: handleAge,
    }
  });

  return (
    <FormView
      name={'test'}
      fields={getFields()}
    />
  );
};

export const Form = FormController;