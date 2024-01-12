import { View, Text } from "@gluestack-ui/themed";
import React, { useState } from "react";
import InputFormField from "../../molecules/InputFormField/InputFormField";
import AppButton from "../../atoms/AppButton";
import { styles } from "../../../assets/Stylesheet";
import { Controller, useForm } from "react-hook-form";
import { login } from "../../../services/auth";

export default function LoginForm({ navigation }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [firstTime, setFirstTime] = useState(true);
  const [fbError, setFbError] = useState(null);
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    setFirstTime(false);
    try {
      setLoading(true);
      const resp = await login(data.email, data.password);
      resp.error ? setFbError(resp.error) : setFbError(null);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.loginform}>
      <Controller
        control={control}
        rules={{
          required: { message: "This field is required", value: true },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputFormField
            label="Email"
            placeholder="jan.janssens@gmail.com"
            type="text"
            onChangeText={onChange}
            onBlur={onBlur}
            error={errors.email}
          ></InputFormField>
        )}
        name="email"
      ></Controller>
      <Controller
        control={control}
        rules={{
          required: { message: "This field is required", value: true },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            message:
              "Invalid password, must contain 8 characters, 1 uppercase and 1 number",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputFormField
            label="Password"
            placeholder="*********"
            type="password"
            onChangeText={onChange}
            onBlur={onBlur}
            error={errors.password}
          ></InputFormField>
        )}
        name="password"
      ></Controller>
      {fbError && <Text style={styles.errorMessage}>Invalid credentials</Text>}
      <View style={styles.loginform_buttons}>
        <AppButton
          loading={loading}
          backgroundColor="#015C6F"
          onPress={handleSubmit(onSubmit)}
        >
          Login
        </AppButton>
        <AppButton
          disabled={false}
          backgroundColor="#70C031"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AppButton>
      </View>
    </View>
  );
}
