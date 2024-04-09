import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler"

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <StatusBar />
      <Slot />
    </GestureHandlerRootView>
  )
}
