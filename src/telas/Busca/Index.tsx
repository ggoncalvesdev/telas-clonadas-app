import React, { useState } from "react";
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { styles } from "./styles";

import topo from "../../../assets/topo.png";
import calendar from "../../../assets/calendar.png";
import perfil from "../../../assets/perfil.png";
import seta from "../../../assets/seta.png";
import circulo from "../../../assets/circulo.png";
import iconRelogio from "../../../assets/icon-relogio.png";
import { StatusBar } from "expo-status-bar";
import { Navbar } from "../../components/Nav/Navbar";

export function Busca() {
    const [selectedDate, setSelectedDate] = useState("");
    const state = {
        data: "",
    };
    return (
        <>
            <Navbar />
            <ScrollView>
                <View style={styles.topo}>
                    <Image source={topo} style={styles.imagemTopo} />
                    <Text style={styles.titulo}>
                        Viagens com preços baixos {"\n"} para você
                    </Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.container}>
                        {/* esse é o fundo */}
                        <View style={styles.floatingCard}>
                            <View style={styles.cardEndereco}>
                                <View style={styles.circuloImagem}>
                                    <Image
                                        source={circulo}
                                        style={styles.circulo}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholderTextColor="#879296"
                                        placeholder="De (endereço completo)"
                                    />
                                </View>
                                <View style={styles.circuloImagem}>
                                    <Image
                                        source={circulo}
                                        style={styles.circulo}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholderTextColor="#879296"
                                        placeholder="Para (endereço completo)"
                                    />
                                </View>
                                <View style={styles.inputDate}>
                                    <View style={styles.inputDateInside}>
                                        <Image
                                            source={calendar}
                                            style={styles.imagemIcon}
                                        />
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
                                        <Image
                                            source={perfil}
                                            style={styles.imagemIcon}
                                        />
                                        <TextInput
                                            style={styles.textoIcon}
                                            placeholderTextColor="#45636B"
                                            placeholder="1"
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>
                                        Procurar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <StatusBar style="auto" backgroundColor={"#fff"} />

                        <View style={styles.busca}>
                            <View style={styles.posicaoBusca}>
                                <Image
                                    source={iconRelogio}
                                    style={styles.iconRelogio}
                                />
                                <Text style={styles.textoCardBusca}>
                                    Via Expressa Pres. João Goulart - Galeão,
                                    Rio de Janeiro - RJ, Brasil {"->"} Cabo Frio
                                    RJ, Brasil
                                </Text>
                                <Image source={seta} style={styles.iconSeta} />
                            </View>
                            <Text style={styles.textoPassageiro}>
                                1 passageiro
                            </Text>
                        </View>
                        <View style={styles.busca}>
                            <View style={styles.posicaoBusca}>
                                <Image
                                    source={iconRelogio}
                                    style={styles.iconRelogio}
                                />
                                <Text style={styles.textoCardBusca}>
                                    Galeão, Rio de Janeiro - RJ, Brasil {"->"}{" "}
                                    Cabo Frio, RJ Brasil
                                </Text>
                                <Image source={seta} style={styles.iconSeta} />
                            </View>
                            <Text style={styles.textoPassageiro}>
                                1 passageiro
                            </Text>
                        </View>
                        <View style={styles.busca}>
                            <View style={styles.posicaoBusca}>
                                <Image
                                    source={iconRelogio}
                                    style={styles.iconRelogio}
                                />
                                <Text style={styles.textoCardBusca}>
                                    Petrópolis - Cascatinha, Petrópolis - RJ,
                                    Brasil {"->"} Cabo Frio RJ, Brasil
                                </Text>
                                <Image source={seta} style={styles.iconSeta} />
                            </View>
                            <Text style={styles.textoPassageiro}>
                                1 passageiro
                            </Text>
                        </View>
                        <View style={styles.busca}>
                            <View style={styles.posicaoBusca}>
                                <Image
                                    source={iconRelogio}
                                    style={styles.iconRelogio}
                                />
                                <Text style={styles.textoCardBusca}>
                                    Cabo Frio, RJ, Brasil {"->"} Rio de Janeiro
                                    RJ, Brasil
                                </Text>
                                <Image source={seta} style={styles.iconSeta} />
                            </View>
                            <Text style={styles.textoPassageiro}>
                                1 passageiro
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}
