import { SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../assets/Stylesheet";
import AppSelect from "../components/molecules/AppSelect";
import AppButton from "../components/atoms/AppButton";
import { doc, onSnapshot } from "firebase/firestore";
import { db, auth } from "../services/config/firebaseConfig";
import { Text } from "@gluestack-ui/themed";

export default function HomeScreen({ navigation }) {
  const select_options = [
    { label: "Today", value: "today" },
    { label: "Week", value: "week" },
    { label: "Month", value: "month" },
    { label: "Year", value: "year" },
  ];
  const [selectedValue, setSelectedValue] = useState("Select a time period");
  const [workouts, setWorkouts] = useState([]);

  const unsubscribe = onSnapshot(
    doc(db, "workouts", auth?.currentUser?.uid),
    (doc) => {
      if (doc.exists()) {
        setWorkouts(doc.data());
      } else {
        console.log("No such document!");
      }
    }
  );

  useEffect(() => {
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <SafeAreaView style={[styles.container, styles.p_16, styles.gap_16]}>
      <AppSelect
        items={select_options}
        onChange={(e) => {
          setSelectedValue(e);
        }}
        selectedValue={selectedValue}
        placeholder="Select a time period"
      ></AppSelect>

      {workouts.length ? (
        [
          workouts.map((wk) => {
            <Text>{wk?.name}</Text>;
          }),
        ]
      ) : (
        <Text>No workouts found</Text>
      )}

      <AppButton
        backgroundColor="#015C6F"
        onPress={() => navigation.navigate("AddWorkoutScreen")}
      >
        ADD WORKOUT
      </AppButton>
    </SafeAreaView>
  );
}
