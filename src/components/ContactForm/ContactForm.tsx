import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<null | string>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      return;
    }
    // Send form data
    // Your code to handle form submission goes here

    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setSubmitStatus("success");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <VStack as='form' spacing={4} onSubmit={handleSubmit}>
      <FormControl isInvalid={false}>
        <FormLabel htmlFor='name'>Name</FormLabel>
        <Input
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter your name'
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor='email'>Email Address</FormLabel>
        <Input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter your email'
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor='message'>Message</FormLabel>
        <Textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder='Enter your message'
        />
      </FormControl>
      <Button mt={4} colorScheme='teal' type='submit'>
        Submit
      </Button>
      {submitStatus === "error" && (
        <Alert status='error'>
          <AlertIcon />
          Please fill in all the fields.
        </Alert>
      )}
      {submitStatus === "success" && (
        <Alert status='success'>
          <AlertIcon />
          Your message has been sent successfully!
        </Alert>
      )}
    </VStack>
  );
};

export default ContactForm;
