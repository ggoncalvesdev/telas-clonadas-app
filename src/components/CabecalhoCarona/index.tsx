import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

import seta from "../../../assets/seta-esquerda.png";
import carro from "../../../assets/carro.png";
import onibus from "../../../assets/onibus.png";

export const CabecalhoCarona = () => {
    return (
        <View style={styles.cabecalho}>
            <View style={styles.busca}>
                <View style={styles.posicaoBusca}>
                    <Image source={seta} style={styles.iconSeta} />
                    <Text style={styles.textoCardBusca}>
                        Via Expressa Pres. João Goulart - G... {"->"} Cabo Frio
                        RJ
                    </Text>
                </View>
                <Text style={styles.textoPassageiro}>Hoje, 1 passageiro</Text>
            </View>
            <View style={styles.transporte}>
                <View style={styles.border}>
                    {/* Tirar a tag text e colocar TouchableOpacity */}
                    <Text style={{ fontWeight: "bold", color: "#355E5D" }}>
                        Tudo
                    </Text>
                    <Text style={{ fontWeight: "bold", color: "#355E5D" }}>
                        180
                    </Text>
                </View>
                <View style={styles.displayTransporte}>
                    {/* Tirar a tag text e colocar TouchableOpacity */}
                    <Image source={carro} style={styles.iconCarro} />
                    <Text style={styles.texto}>18</Text>
                </View>
                <View style={styles.displayTransporte}>
                    {/* Tirar a tag text e colocar TouchableOpacity */}
                    <Image source={onibus} style={styles.iconOnibus} />
                    <Text style={styles.texto}>___</Text>
                </View>
            </View>
        </View>
    );
};
