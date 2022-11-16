import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import circulo from "../../../assets/circulo.png";
import calendar from "../../../assets/calendar.png";
import perfil from "../../../assets/perfil.png";

export const CardEndereco = ({ navigation }) => {
    const buscar = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "carona" }],
        });
    };

    return (
        <View style={styles.floatingCard}>
            <View style={styles.cardEndereco}>
                <View style={styles.circuloImagem}>
                    <Image source={circulo} style={styles.circulo} />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#879296"
                        placeholder="De (endereço completo)"
                    />
                </View>
                <View style={styles.circuloImagem}>
                    <Image source={circulo} style={styles.circulo} />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#879296"
                        placeholder="Para (endereço completo)"
                    />
                </View>
                <View style={styles.inputDate}>
                    <View style={styles.inputDateInside}>
                        <Image source={calendar} style={styles.imagemIcon} />
                        {/*  <DatePicker
            onSelectedChange={(date) =>
                setSelectedDate(date)
            }
        /> */}
                        <TextInput
                            style={styles.textoIcon}
                            placeholderTextColor="#45636B"
                            placeholder="Hoje"
                        />
                    </View>
                    <View style={styles.inputDateInsidePeople}>
                        <Image source={perfil} style={styles.imagemIcon} />
                        <TextInput
                            style={styles.textoIcon}
                            placeholderTextColor="#45636B"
                            placeholder="1"
                        />
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => buscar()}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Procurar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
