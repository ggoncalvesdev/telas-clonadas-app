import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { styles } from "./styles";

import { StatusBar } from "expo-status-bar";
import { Navbar } from "../../components/Nav/index";
import { CardEndereco } from "../../components/CardEndereco";
import { CardTopo } from "../../components/CardTopo";
import FiltroBusca from "../../components/FiltroBusca/index";

export function Busca({ navigation }) {
    const [selectedDate, setSelectedDate] = useState("");
    const state = {
        data: "",
    };
    return (
        <>
            <StatusBar style="auto" backgroundColor={"#fff"} />
            <Navbar />
            <ScrollView>
                <CardTopo />
                <View style={styles.body}>
                    <CardEndereco navigation={navigation} />
                    <FiltroBusca />
                </View>
            </ScrollView>
        </>
    );
}
