import React from "react";
import {
    Image,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { styles } from "./styles";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import circulo from "../../../assets/circulo.png";
import calendar from "../../../assets/calendar.png";
import perfil from "../../../assets/perfil.png";

import config from "../../../config/index.json";

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
                    <GooglePlacesAutocomplete
                        placeholder="De (endereço completo)"
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            console.log(data, details);
                        }}
                        query={{
                            key: config.googleApi,
                            language: "pt-BR",
                        }}
                        fetchDetails={true}
                        styles={{
                            textInputContainer: {
                                backgroundColor: "#ffff",
                                padding: Platform.OS === "ios" ? 15 : 10,
                                marginVertical: 10,
                            },
                            textInput: {
                                height: 38,
                                color: "#5d5d5d",
                                fontSize: 20,
                            },
                            listView: { height: 100 },
                        }}
                    />
                </View>
                <View style={styles.circuloImagem}>
                    <Image source={circulo} style={styles.circulo} />
                    <GooglePlacesAutocomplete
                        placeholder="Para (endereço completo)"
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            console.log(data, details);
                        }}
                        query={{
                            key: config.googleApi,
                            language: "pt-BR",
                        }}
                        fetchDetails={true}
                        styles={{
                            textInputContainer: {
                                backgroundColor: "#ffff",
                                padding: Platform.OS === "ios" ? 15 : 10,
                                marginVertical: 10,
                            },
                            textInput: {
                                height: 38,
                                color: "#5d5d5d",
                                fontSize: 20,
                            },
                            listView: { height: 100 },
                        }}
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
