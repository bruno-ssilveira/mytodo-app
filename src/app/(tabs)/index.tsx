//import { colors } from '@/core/constants/Colors';
import { Text, View, TouchableOpacity } from "react-native";
import { fonts } from '@/core/constants/Fonts';
import { StyleSheet } from 'react-native';
import useTheme, { ColorScheme } from '@/core/hooks/useTheme';
import { useQuery } from 'convex/react';
import { api } from 'convex/_generated/api';

export default function Index() {
    const { toggleDarkMode, colors } = useTheme();
    const styles = createStyles(colors);

    return (
        <View style={styles.container}>
            <Text style={styles.content}>Edit app/index.tsx to edit this screen.</Text>
            <TouchableOpacity onPress={toggleDarkMode}><Text style={styles.content}>Change Color Mode</Text></TouchableOpacity>
        </View>
    );
}

const createStyles = (colors: ColorScheme) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.bg,
        },
        content: {
            color: colors.text,
        }
    });
    return styles;
}