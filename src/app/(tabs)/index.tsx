//import { colors } from '@/core/constants/Colors';
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import useTheme from "@/core/hooks/useTheme";
import { createHomeStyles } from "@assets/styles/home.styles";
import { api } from "convex/_generated/api";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const homeStyles = createHomeStyles(colors);

  const todo = useQuery(api.todo.getTodo);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={homeStyles.container}>
        <Header />
        <TodoInput />

        {todo?.map((todo) => <Text key={todo._id}>{todo.text}</Text>)}
      </SafeAreaView>
    </LinearGradient>
  );
}
