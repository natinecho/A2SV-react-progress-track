# README

## Project Overview

This project is a simple React application featuring a contact form with input validation using the `react-hook-form` library. The form collects a user's name, email, message, and social media handles (Telegram and Instagram).

## Features
![alt text](<Screenshot 2024-08-01 152141.png>)

### Form Initialization and State Management

- **useForm Hook:** The `useForm` hook from `react-hook-form` is used to initialize the form. It sets up the form with default values and provides methods to manage form state and handle submissions.

### Input Fields
![alt text](<Screenshot 2024-08-01 152159.png>)

1. **Name Field:**
   - **Type:** Text
   - **Validation:** 
     - **Required:** The name field is mandatory. If left empty, an error message "name is required" is displayed.
   
2. **Email Field:**
   - **Type:** Text
     ![alt text](<Screenshot 2024-08-01 152253.png>)
   - **Validation:** 
     - **Required:** The email field is mandatory. If left empty, an error message "email is required" is displayed.
     - **Pattern:** The email must match a specific pattern (i.e., a valid email format). If it doesn't, an error message "invalid email format" is shown.
     ![alt text](<Screenshot 2024-08-01 152321.png>)
     - **Custom Validation:** Emails ending with "gmail.com" are not accepted. If the email ends with "gmail.com", an error message "this email is not supported" is displayed.

3. **Message Field:**
   - **Type:** Textarea
   - **Validation:** 
     - **Required:** The message field is mandatory. If left empty, an error message "message is required" is displayed.

4. **Social Media Fields:**
   - **Telegram Handle:**
     - **Type:** Text
     - **Validation:** No validation rules are applied.
   - **Instagram Profile:**
     - **Type:** Text
     - **Validation:** No validation rules are applied.

### Form Handling

- **Register:** The `register` function is used to link each input field with the form's state management. It ensures that the form data is captured and validated according to the defined rules.
- **handleSubmit:** The `handleSubmit` function is used to manage form submission. It calls the `onSubmit` function with the form data if all validations pass.
- **Form State:** 
  - **Errors:** The `errors` object holds the validation errors for each field. Error messages are displayed conditionally based on the presence of errors in the respective fields.
  - **isSubmitSuccessful:** A boolean indicating if the form was successfully submitted.

### Form Reset

- **useEffect Hook:** The `useEffect` hook monitors the `isSubmitSuccessful` state. If the form is successfully submitted, it triggers the `reset` function to clear the form and reset it to its default values.

### Submission Handling

- **onSubmit:** The `onSubmit` function is called when the form is submitted and all validations pass. It logs the form data to the console.

### Error Display

- **Error Messages:** Conditional rendering is used to display error messages below the respective input fields. If a field has a validation error, the corresponding error message is shown to guide the user.

