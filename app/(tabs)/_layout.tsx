import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: 'white',
                    borderTopWidth: 1,
                    borderColor: 'gray',
                    height: 90,
                    paddingBottom: 30,
                    paddingTop: 10,
                }
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