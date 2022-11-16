import React from "react";
import { SafeAreaView } from "react-native";
import { Busca } from "./src/telas/Busca/Index";
import { Carona } from "./src/telas/Carona/Index";

export default function App() {
    return (
        <SafeAreaView>
            {/* <Busca /> */}
            <Carona />
        </SafeAreaView>
    );
}
