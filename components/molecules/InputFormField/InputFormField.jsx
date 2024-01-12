import React from "react";
import {
  AlertCircleIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import input_field from "./InputFormFieldStylesheet";
import { FormControlErrorText } from "@gluestack-ui/themed";

export default function InputFormField({
  label,
  type,
  placeholder,
  onBlur,
  onChangeText,
  error,
}) {
  return (
    <FormControl isInvalid={error?.message}>
      <FormControlLabel>
        <FormControlLabelText>{label}</FormControlLabelText>
      </FormControlLabel>
      <Input>
        <InputField
          type={type || "text"}
          placeholder={placeholder || ""}
          placeholderTextColor={"rgba(0, 0, 0, .5)"}
          onChangeText={onChangeText}
          onBlur={onBlur}
        ></InputField>
      </Input>
      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon}></FormControlErrorIcon>
        <FormControlErrorText>{error?.message}</FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}
