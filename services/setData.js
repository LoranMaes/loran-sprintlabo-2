import { ref, uploadBytes } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import { auth, db, storage } from "./config/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const createWorkout = async (workout) => {
  console.log(workout);
  try {
    const img = await uploadImage(workout.image_url);

    const docRef = doc(db, `workouts`, auth.currentUser.uid);
    await setDoc(
      docRef,
      {
        "workouts": {
          image_url: img,
          name: workout.name,
          calories: workout.calories_per_10,
          starting_minutes: workout.starting_minutes,
        },
      },
      {
        merge: true,
      }
    );
  } catch (err) {
    console.error(err);
    return false;
  }

  return true;
};

const uploadImage = async (uri) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  const fileName = uri.split("/")[uri.split("/").length - 1];
  const storRef = ref(storage, `images/${auth.currentUser.uid}/${fileName}`);
  try {
    const snapshot = await uploadBytes(storRef, blob);
    return fileName;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    quality: 1,
  });

  if (!result.canceled) return result.assets[0].uri;
  return null;
};

export { createWorkout, pickImage };
