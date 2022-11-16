import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const Botao = () => {
    const clickHandler = () => {
        alert("Botão Clicado");
    };
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={clickHandler}
            style={styles.touchableOpacityStyle}
        >
            <Text style={styles.floatingButtonStyle}>Filtros</Text>
        </TouchableOpacity>
    );
};
