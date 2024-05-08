import axios from "axios";

import { useNavigate } from "react-router-dom";

import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";

import { useErrorBoundary } from "react-error-boundary";

import { Formik, Form, Field, FieldProps } from "formik";

import {
  validateName,
  validateEmail,
  validatePhoneNumber,
  validateMessage,
} from "./validation";

export const FormikContactForm = () => {
  const navigate = useNavigate();
  const { showBoundary } = useErrorBoundary();
  return (
    <Formik
      initialValues={{ name: "", email: "", phoneNumber: "", message: "" }}
      onSubmit={async (values, actions) => {
        console.log(actions);
        try {
          actions.setSubmitting(true);
          await new Promise((r) => setTimeout(r, 2000));

          // const response = await fetch(
          //   `${import.meta.env.VITE_PORTFOLIO_API}/enquiry`,
          //   {
          //     method: "POST",
          //     headers: {
          //       "Content-Type": "application/json",
          //     },
          //     body: JSON.stringify(values),
          //     credentials: "include",
          //   }
          // );
          // const data = await response.json();

          const data = await axios.post(
            `${import.meta.env.VITE_PORTFOLIO_API}/enquiry`,
            values
          );

          actions.setSubmitting(false);
          if (data) {
            console.log(data);
            navigate("/thankyou");
          }
        } catch (error) {
          showBoundary(error);
          actions.setSubmitting(false);
        }
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
                  disabled={props.isSubmitting}
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
                  disabled={props.isSubmitting}
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
                  disabled={props.isSubmitting}
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
                  disabled={props.isSubmitting}
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
