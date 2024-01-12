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
}) {
  return (
    <Select
      selectedValue={selectedValue ? selectedValue : items[0].label}
      onValueChange={onChange}
    >
      <SelectTrigger variant="outline" size="md">
        <SelectInput placeholder={items[0].label}></SelectInput>
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
          {items.map((item) => {
            return (
              <SelectItem label={item.label} value={item.value}></SelectItem>
            );
          })}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}
