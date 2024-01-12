import { SafeAreaView } from "react-native";
import React, { useState } from "react";
import { styles } from "../assets/Stylesheet";
import AppSelect from "../components/molecules/AppSelect";

export default function HomeScreen() {
  const select_options = [
    { label: "Today", value: "today" },
    { label: "Week", value: "week" },
    { label: "Month", value: "month" },
    { label: "Year", value: "year" },
  ];
  const [selectedValue, setSelectedValue] = useState(select_options[0].value);

  return (
    <SafeAreaView style={styles.container}>
      <AppSelect
        items={select_options}
        onChange={(e) => setSelectedValue(e)}
        selectedValue={selectedValue}
      ></AppSelect>
    </SafeAreaView>
  );
}
