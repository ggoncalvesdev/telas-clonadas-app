import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

import topo from "../../../assets/topo.png";

export const CardTopo = () => {
    return (
        <View style={styles.topo}>
            <Image source={topo} style={styles.imagemTopo} />
            {/* <Text style={styles.titulo}>
                Viagens com preços baixos {"\n"} para você
            </Text> */}
        </View>
    );
};
