import { View, Text } from "react-native";
import React, { useState } from "react";
import { createWorkout, pickImage } from "../services/setData";
import { Controller, useForm } from "react-hook-form";
import InputFormField from "../components/molecules/InputFormField/InputFormField";
import { styles } from "../assets/Stylesheet";
import AppButton from "../components/atoms/AppButton";
import { Image } from "@gluestack-ui/themed";

export default function AddWorkoutScreen({ navigation }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image_url: "",
      name: "",
      calories_per_10: "",
      starting_minutes: "",
    },
  });

  const [firstTime, setFirstTime] = useState(true);
  const [fbError, setFbError] = useState(null);
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    setFirstTime(false);
    try {
      setLoading(true);
      const resp = await createWorkout(data);
      resp.error ? setFbError(resp.error) : setFbError(null);
      setLoading(false);
      return navigation.navigate("HomeScreen");
    } catch (error) {
      console.log(error);
    }
  };

  const handleImagePicker = async () => {
    const img = await pickImage();
    if (img) {
      setValue("image_url", img);
    }
  };

  return (
    <View style={[styles.container, styles.p_16, styles.gap_16]}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
        {watch("image_url") ? (
          <>
            <Image
              source={{ uri: watch("image_url") }}
              style={{ width: 64, height: 64 }}
              role="img"
              alt="image for workout"
            />
          </>
        ) : null}
        <Controller
          control={control}
          name="image_url"
          rules={{
            required: { message: "This field is required", value: true },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <AppButton backgroundColor="#015C6F" onPress={handleImagePicker}>
              Pick icon
            </AppButton>
          )}
        ></Controller>
        {errors.image_url && (
          <Text style={styles.errorMessage}>Please select an image</Text>
        )}
      </View>
      <Controller
        control={control}
        name="name"
        rules={{
          required: { message: "This field is required", value: true },
          minLength: {
            value: 3,
            message: "Minimum length is 3 characters",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputFormField
            label="Name"
            placeholder=""
            type="text"
            onChangeText={onChange}
            onBlur={onBlur}
            error={errors.name}
          ></InputFormField>
        )}
      ></Controller>
      <Controller
        control={control}
        name="calories_per_10"
        rules={{
          required: { message: "This field is required", value: true },
          pattern: {
            value: /^[0-9]*$/,
            message: "Invalid number",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputFormField
            label="Calories per 10 minutes"
            placeholder=""
            type="text"
            onChangeText={onChange}
            onBlur={onBlur}
            error={errors.calories_per_10}
          ></InputFormField>
        )}
      ></Controller>
      <Controller
        control={control}
        name="starting_minutes"
        rules={{
          required: { message: "This field is required", value: true },
          pattern: {
            value: /^[0-9]*$/,
            message: "Invalid number",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputFormField
            label="Starting minutes"
            placeholder=""
            type="text"
            onChangeText={onChange}
            onBlur={onBlur}
            error={errors.starting_minutes}
          ></InputFormField>
        )}
      ></Controller>

      {fbError && (
        <Text style={styles.errorMessage}>
          Something went wrong, please try again later.
        </Text>
      )}

      <AppButton
        backgroundColor="#015C6F"
        loading={loading}
        onPress={handleSubmit(onSubmit)}
      >
        ADD WORKOUT
      </AppButton>
    </View>
  );
}
