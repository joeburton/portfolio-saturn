import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";

import { Formik, Form, Field, FieldProps } from "formik";

import {
  validateName,
  validateEmail,
  validatePhoneNumber,
  validateMessage,
} from "./validation";

export const FormikContactForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", phoneNumber: "", message: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Field name='name' validate={validateName}>
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={!!(form.errors?.name && form.touched?.name)}
                mb='27px'
              >
                <FormLabel htmlFor='name' fontWeight='normal' color='#393934'>
                  Name
                </FormLabel>
                <Input
                  {...field}
                  placeholder='name'
                  id='name'
                  autoComplete='off'
                />
                <FormErrorMessage position='absolute' m='4px 0 8px 0'>
                  {typeof form.errors?.name === "string"
                    ? form.errors.name
                    : ""}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='email' validate={validateEmail}>
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={!!(form.errors?.email && form.touched?.email)}
                mb='27px'
              >
                <FormLabel htmlFor='email' fontWeight='normal' color='#393934'>
                  Email
                </FormLabel>
                <Input
                  {...field}
                  id='email'
                  placeholder='email'
                  autoComplete='off'
                />
                <FormErrorMessage position='absolute' m='4px 0 8px 0'>
                  {typeof form.errors?.email === "string"
                    ? form.errors.email
                    : ""}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='phoneNumber' validate={validatePhoneNumber}>
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={
                  !!(form.errors?.phoneNumber && form.touched?.phoneNumber)
                }
                mb='27px'
              >
                <FormLabel
                  htmlFor='phoneNumber'
                  fontWeight='normal'
                  color='#393934'
                >
                  Phone Number
                </FormLabel>
                <Input
                  {...field}
                  id='phoneNumber'
                  placeholder='phone number'
                  autoComplete='off'
                  type='number'
                />
                <FormErrorMessage position='absolute' m='4px 0 8px 0'>
                  {typeof form.errors?.phoneNumber === "string"
                    ? form.errors.phoneNumber
                    : ""}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='message' validate={validateMessage}>
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={!!(form.errors?.message && form.touched?.message)}
                mb='27px'
              >
                <FormLabel
                  htmlFor='message'
                  fontWeight='normal'
                  color='#393934'
                >
                  Message
                </FormLabel>
                <Textarea
                  {...field}
                  id='message'
                  placeholder='message'
                  minHeight='150px'
                />
                <FormErrorMessage position='absolute' m='4px 0 8px 0'>
                  {typeof form.errors?.message === "string"
                    ? form.errors.message
                    : ""}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            m='1rem 1rem 0 0'
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
            variant='outline'
          >
            Submit
          </Button>
          <Button mt='1rem' colorScheme='teal' type='reset' variant='outline'>
            Reset
          </Button>
        </Form>
      )}
    </Formik>
  );
};
