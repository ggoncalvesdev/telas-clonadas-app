import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Busca } from "./src/telas/Busca/index";
import { Carona } from "./src/telas/Carona/index";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="busca"
                    component={Busca}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="carona"
                    component={Carona}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
