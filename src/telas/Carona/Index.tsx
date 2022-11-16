import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

import bullet from "../../../assets/bullet.png";
import linha from "../../../assets/linha.png";
import estrela from "../../../assets/icon-estrela.png";
import mulherMaravilha from "../../../assets/mulher-maravilha.jpg";
import batman from "../../../assets/batman.jpg";
import anime from "../../../assets/anime.jpg";
import { Botao } from "../../components/Botao/index";
import { CabecalhoCarona } from "../../components/CabecalhoCarona/index";

import { StatusBar } from "expo-status-bar";

export function Carona() {
    return (
        <>
            <StatusBar style="auto" backgroundColor={"#fff"} />
            <ScrollView>
                <CabecalhoCarona />
                <View style={styles.body}>
                    <View style={styles.card}>
                        <View style={styles.corrida}>
                            <View style={styles.tempoCorrida}>
                                <View>
                                    <View style={styles.tempoPosicao}>
                                        <View>
                                            <Text style={styles.textoTempo}>
                                                19:30
                                            </Text>
                                            <Text
                                                style={styles.textoHoraViagem}
                                            >
                                                3h10
                                            </Text>
                                        </View>
                                        <View style={styles.posicaoBullet}>
                                            <Image
                                                source={bullet}
                                                style={styles.bullet}
                                            ></Image>
                                            <Image
                                                source={linha}
                                                style={styles.linha}
                                            ></Image>
                                        </View>
                                        <View>
                                            <Text style={styles.textoTempo}>
                                                Nova Iguaçu
                                            </Text>
                                            <Image
                                                source={{
                                                    uri: "https://s3-eu-west-1.amazonaws.com/blogstatics/images/icons/PROXIMITY-IND_03ORN%402x.png",
                                                }}
                                                style={
                                                    styles.iconDistanciaLaranja
                                                }
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.tempoPosicao}>
                                        <Text style={styles.textoTempo}>
                                            22:40
                                        </Text>
                                        <Image
                                            source={bullet}
                                            style={styles.bullet}
                                        ></Image>
                                        <View>
                                            <Text style={styles.textoTempo}>
                                                Cabo Frio
                                            </Text>
                                            <Image
                                                source={{
                                                    uri: "https://s3-eu-west-1.amazonaws.com/blogstatics/images/icons/PROXIMITY-IND_01GRN%402x.png",
                                                }}
                                                style={
                                                    styles.iconDistanciaVerde
                                                }
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.textoTempo}>R$ 39,00</Text>
                            </View>
                        </View>
                        <View style={styles.motorista}>
                            <View style={styles.bodarFotoMotorista}>
                                <Image
                                    source={mulherMaravilha}
                                    style={styles.fotoMotorista}
                                />
                            </View>
                            <View>
                                <View>
                                    <Text style={styles.nomeMotorista}>
                                        Rebeca
                                    </Text>
                                </View>
                                <View style={styles.pontuacao}>
                                    <Image
                                        source={estrela}
                                        style={styles.estrela}
                                    />
                                    <Text style={styles.pontoMotorista}>
                                        5,0
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.corrida}>
                            <View style={styles.tempoCorrida}>
                                <View>
                                    <View style={styles.tempoPosicao}>
                                        <View>
                                            <Text style={styles.textoTempo}>
                                                19:40
                                            </Text>
                                            <Text
                                                style={styles.textoHoraViagem}
                                            >
                                                2h30
                                            </Text>
                                        </View>
                                        <View style={styles.posicaoBullet}>
                                            <Image
                                                source={bullet}
                                                style={styles.bullet}
                                            ></Image>
                                            <Image
                                                source={linha}
                                                style={styles.linha}
                                            ></Image>
                                        </View>
                                        <View>
                                            <Text style={styles.textoTempo}>
                                                Rio de Janeiro
                                            </Text>
                                            <Image
                                                source={{
                                                    uri: "https://s3-eu-west-1.amazonaws.com/blogstatics/images/icons/PROXIMITY-IND_02YEL%402x.png",
                                                }}
                                                style={
                                                    styles.iconDistanciaLaranja
                                                }
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.tempoPosicao}>
                                        <Text style={styles.textoTempo}>
                                            22:10
                                        </Text>
                                        <Image
                                            source={bullet}
                                            style={styles.bullet}
                                        ></Image>
                                        <View>
                                            <Text style={styles.textoTempo}>
                                                Cabo Frio
                                            </Text>
                                            <Image
                                                source={{
                                                    uri: "https://s3-eu-west-1.amazonaws.com/blogstatics/images/icons/PROXIMITY-IND_01GRN%402x.png",
                                                }}
                                                style={
                                                    styles.iconDistanciaVerde
                                                }
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.textoTempo}>R$ 45,00</Text>
                            </View>
                        </View>
                        <View style={styles.motorista}>
                            <View style={styles.fotoMotoristaSemBordar}>
                                <Image
                                    source={anime}
                                    style={styles.fotoMotorista}
                                />
                            </View>
                            <View>
                                <View>
                                    <Text style={styles.nomeMotorista}>
                                        Gabriella
                                    </Text>
                                </View>
                                <View style={styles.pontuacao}>
                                    <Image
                                        source={estrela}
                                        style={styles.estrela}
                                    />
                                    <Text style={styles.pontoMotorista}>
                                        4,9
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.corrida}>
                            <View style={styles.tempoCorrida}>
                                <View>
                                    <View style={styles.tempoPosicao}>
                                        <View>
                                            <Text style={styles.textoTempo}>
                                                20:00
                                            </Text>
                                            <Text
                                                style={styles.textoHoraViagem}
                                            >
                                                2h30
                                            </Text>
                                        </View>
                                        <View style={styles.posicaoBullet}>
                                            <Image
                                                source={bullet}
                                                style={styles.bullet}
                                            ></Image>
                                            <Image
                                                source={linha}
                                                style={styles.linha}
                                            ></Image>
                                        </View>
                                        <View>
                                            <Text style={styles.textoTempo}>
                                                Niterói
                                            </Text>
                                            <Image
                                                source={{
                                                    uri: "https://s3-eu-west-1.amazonaws.com/blogstatics/images/icons/PROXIMITY-IND_03ORN%402x.png",
                                                }}
                                                style={
                                                    styles.iconDistanciaLaranja
                                                }
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.tempoPosicao}>
                                        <Text style={styles.textoTempo}>
                                            22:30
                                        </Text>
                                        <Image
                                            source={bullet}
                                            style={styles.bullet}
                                        ></Image>
                                        <View>
                                            <Text style={styles.textoTempo}>
                                                Cabo Frio
                                            </Text>
                                            <Image
                                                source={{
                                                    uri: "https://s3-eu-west-1.amazonaws.com/blogstatics/images/icons/PROXIMITY-IND_03ORN%402x.png",
                                                }}
                                                style={
                                                    styles.iconDistanciaVerde
                                                }
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.textoTempo}>R$ 45,00</Text>
                            </View>
                        </View>
                        <View style={styles.motorista}>
                            <View style={styles.fotoMotoristaSemBordar}>
                                <Image
                                    source={batman}
                                    style={styles.fotoMotorista}
                                />
                            </View>
                            <View>
                                <View>
                                    <Text style={styles.nomeMotorista}>
                                        Robson Pereira
                                    </Text>
                                </View>
                                <View style={styles.pontuacao}>
                                    <Image
                                        source={estrela}
                                        style={styles.estrela}
                                    />
                                    <Text style={styles.pontoMotorista}>
                                        4,7
                                    </Text>
                                    <View style={styles.icons}>
                                        <Image
                                            source={{
                                                uri: "https://s3-eu-west-1.amazonaws.com/blogstatics/images/icons/ICONS_INSTANTAPPROVAL%402x.png",
                                            }}
                                            style={styles.icon}
                                        />
                                        <Image
                                            source={{
                                                uri: "https://s3-eu-west-1.amazonaws.com/blogstatics/images/icons/ICONS_2MAX%402x.png",
                                            }}
                                            style={styles.icon}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.botaoFlutuate}>
                <Botao />
            </View>
        </>
    );
}
