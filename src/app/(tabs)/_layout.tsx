import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { spacing } from '@/core/constants/Spacing';
import { fonts } from '@/core/constants/Fonts';
import useTheme from '@/core/hooks/useTheme';

const TabsLayout = () => {
    const {colors} = useTheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textMuted,
                tabBarStyle: {
                    backgroundColor: colors.surface,
                    borderTopWidth: 1,
                    borderColor: colors.border,
                    height: 90,
                    paddingBottom: spacing.xl,
                    paddingTop: spacing.s,
                },
                tabBarLabelStyle: {
                    fontSize: fonts.label1.fontSize,
                    fontFamily: fonts.primaryRegular,
                },
                headerShown: false,
            }}
        >
            <Tabs.Screen 
                name='index'
                options={{
                    title: 'To Do',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name='flash-outline' size={size} color={color}/>
                    )
                }}
            />
            
            <Tabs.Screen 
                name='settings'
                options={{
                    title: 'Settings',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name='settings' size={size} color={color}/>
                    )
                }}
            />

        </Tabs>
    )
}

export default TabsLayout