import React from "react";
import { Button, ButtonSpinner, ButtonText } from "@gluestack-ui/themed";

export default function AppButton({
  children,
  backgroundColor,
  onPress,
  disabled,
  loading,
}) {
  return (
    <Button
      disabled={loading || disabled}
      opacity={disabled || loading ? "$50" : "$100"}
      backgroundColor={backgroundColor}
      onPress={onPress}
      gap={8}
    >
      {loading && <ButtonSpinner color="#FFFFFF" size="small"></ButtonSpinner>}
      <ButtonText>{children}</ButtonText>
    </Button>
  );
}
