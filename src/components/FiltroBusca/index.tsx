import React from "react";
import { Image, Text, View, ViewBase } from "react-native";
import { styles } from "./styles";

import seta from "../../../assets/seta.png";
import iconRelogio from "../../../assets/icon-relogio.png";

export default function FiltroBusca() {
    return (
        <>
            <View>
                <View style={styles.busca}>
                    <View style={styles.posicaoBusca}>
                        <Image
                            source={iconRelogio}
                            style={styles.iconRelogio}
                        />
                        <Text style={styles.textoCardBusca}>
                            Via Expressa Pres. João Goulart - Galeão, Rio de
                            Janeiro - RJ, Brasil {"->"} Cabo Frio RJ, Brasil
                        </Text>
                        <Image source={seta} style={styles.iconSeta} />
                    </View>
                    <Text style={styles.textoPassageiro}>1 passageiro</Text>
                </View>
                <View style={styles.busca}>
                    <View style={styles.posicaoBusca}>
                        <Image
                            source={iconRelogio}
                            style={styles.iconRelogio}
                        />
                        <Text style={styles.textoCardBusca}>
                            Galeão, Rio de Janeiro - RJ, Brasil {"->"} Cabo
                            Frio, RJ Brasil
                        </Text>
                        <Image source={seta} style={styles.iconSeta} />
                    </View>
                    <Text style={styles.textoPassageiro}>1 passageiro</Text>
                </View>
                <View style={styles.busca}>
                    <View style={styles.posicaoBusca}>
                        <Image
                            source={iconRelogio}
                            style={styles.iconRelogio}
                        />
                        <Text style={styles.textoCardBusca}>
                            Petrópolis - Cascatinha, Petrópolis - RJ, Brasil{" "}
                            {"->"} Cabo Frio RJ, Brasil
                        </Text>
                        <Image source={seta} style={styles.iconSeta} />
                    </View>
                    <Text style={styles.textoPassageiro}>1 passageiro</Text>
                </View>
                <View style={styles.busca}>
                    <View style={styles.posicaoBusca}>
                        <Image
                            source={iconRelogio}
                            style={styles.iconRelogio}
                        />
                        <Text style={styles.textoCardBusca}>
                            Cabo Frio, RJ, Brasil {"->"} Rio de Janeiro RJ,
                            Brasil
                        </Text>
                        <Image source={seta} style={styles.iconSeta} />
                    </View>
                    <Text style={styles.textoPassageiro}>1 passageiro</Text>
                </View>
                <View style={styles.busca}>
                    <View style={styles.posicaoBusca}>
                        <Image
                            source={iconRelogio}
                            style={styles.iconRelogio}
                        />
                        <Text style={styles.textoCardBusca}>
                            Cabo Frio, RJ, Brasil {"->"} Rio de Janeiro RJ,
                            Brasil
                        </Text>
                        <Image source={seta} style={styles.iconSeta} />
                    </View>
                    <Text style={styles.textoPassageiro}>1 passageiro</Text>
                </View>
                <View style={styles.busca}>
                    <View style={styles.posicaoBusca}>
                        <Image
                            source={iconRelogio}
                            style={styles.iconRelogio}
                        />
                        <Text style={styles.textoCardBusca}>
                            Cabo Frio, RJ, Brasil {"->"} Rio de Janeiro RJ,
                            Brasil
                        </Text>
                        <Image source={seta} style={styles.iconSeta} />
                    </View>
                    <Text style={styles.textoPassageiro}>1 passageiro</Text>
                </View>
            </View>
        </>
    );
}
