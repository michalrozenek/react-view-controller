export enum FormFieldName {
  NAME = 'name',
  AGE = 'age',
}

interface FormField<T> {
  name: string,
  value: T,
  setValue: (e: any) => void,
}

export interface FormViewProps {
  name: string,
  fields: {
    [FormFieldName.NAME]: FormField<string>,
    [FormFieldName.AGE]: FormField<string>,
  }
}