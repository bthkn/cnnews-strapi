import { forwardRef, memo } from 'react';

import { Toggle, useComposedRefs, Field } from '@strapi/design-system';

import { useFocusInputField } from '../../../hooks/useFocusInputField';
import { useField } from '../Form';

import { InputProps } from './types';

const BooleanInput = forwardRef<HTMLInputElement, InputProps>(
  ({ name, required, label, hint, labelAction, ...props }, ref) => {
    const field = useField<boolean | null>(name);
    const fieldRef = useFocusInputField<HTMLInputElement>(name);

    const composedRefs = useComposedRefs(ref, fieldRef);

    return (
      <Field.Root error={field.error} name={name} hint={hint} required={required} maxWidth="320px">
        <Field.Label action={labelAction}>{label}</Field.Label>
        <Toggle
          ref={composedRefs}
          checked={field.value === null ? null : field.value || false}
          offLabel="False"
          onLabel="True"
          onChange={field.onChange}
          {...props}
        />
        <Field.Hint />
        <Field.Error />
      </Field.Root>
    );
  }
);

const MemoizedBooleanInput = memo(BooleanInput);

export { MemoizedBooleanInput as BooleanInput };
