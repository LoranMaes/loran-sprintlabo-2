import {
  ChevronDownIcon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  Icon,
} from "@gluestack-ui/themed";
import React from "react";

export default function AppSelect({
  items = [],
  selectedValue = null,
  onChange = () => {},
  placeholder = "Select your item",
}) {
  return (
    <Select
      selectedValue={selectedValue ? selectedValue : items[0].label}
      onValueChange={onChange}
    >
      <SelectTrigger variant="outline" size="md">
        <SelectInput
          placeholder={placeholder}
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
        ></SelectInput>
        <SelectIcon mr="$3">
          <Icon as={ChevronDownIcon}></Icon>
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop></SelectBackdrop>
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator></SelectDragIndicator>
          </SelectDragIndicatorWrapper>
          {items.map((item, index) => {
            return (
              <SelectItem
                key={index}
                label={item.label}
                value={item.value}
              ></SelectItem>
            );
          })}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}
