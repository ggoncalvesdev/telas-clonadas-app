import { StyleSheet, Platform, Dimensions } from "react-native";

const width = Dimensions.get("screen").width;

export const styles = StyleSheet.create({
    cabecalho: {
        backgroundColor: "#fff",
        paddingTop: 60,
        borderColor: "#E1E1E1",
        borderBottomWidth: 1,
    },
    busca: {
        backgroundColor: "#EDEDED",
        paddingHorizontal: 20,
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 20,
        width: "90%",
    },
    posicaoBusca: {
        backgroundColor: "#EDEDED",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },
    textoCardBusca: {
        fontWeight: "bold",
        width: "100%",
        color: "#5E8287",
        fontSize: 13,
    },
    textoPassageiro: {
        color: "#819193",
        top: 0,
        paddingHorizontal: 26,
    },
    iconSeta: {
        tintColor: "#819193",
        width: 15,
        height: 15,
        marginLeft: 1,
        marginHorizontal: 10,
        top: 10,
    },
    transporte: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    displayTransporte: {
        alignItems: "center",
        paddingBottom: 10,
        paddingRight: 50,
        paddingLeft: 40,
        paddingTop: 20,
    },
    border: {
        alignItems: "center",
        paddingBottom: 10,
        paddingRight: 50,
        paddingLeft: 40,
        paddingTop: 20,
        borderColor: "#1E4D55",
        borderBottomWidth: 2,
        justifyContent: "space-between",
        fontWeight: "bold",
    },
    iconCarro: {
        tintColor: "#03B1F8",
        width: 30,
        height: 30,
        transform: [{ rotateY: "180deg" }],
    },
    iconOnibus: {
        tintColor: "#03B1F8",
        width: 30,
        height: 30,
    },
    texto: {
        color: "#03B1F8",
    },

    body: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    card: {
        flexDirection: "column",
        marginBottom: 10,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 0.22,

        elevation: 1,
    },
    corrida: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingBottom: 15,
        paddingTop: 18,
    },
    tempoCorrida: {
        flexDirection: "column",
    },

    textoTempo: {
        color: "#3B696C",
        fontWeight: "bold",
        fontSize: 18,
    },
    textoHoraViagem: {
        color: "#959DA1",
    },
    tempoPosicao: {
        flexDirection: "row",
    },
    bullet: {
        tintColor: "#054752",
        marginLeft: 10,
        marginRight: 8,
        width: 9,
        height: 9,
    },
    posicaoBullet: {
        marginTop: 5,
    },
    linha: {
        tintColor: "#054752",
        marginLeft: 10,
        width: 9,
        height: 46,
    },
    iconDistanciaLaranja: {
        width: 70,
        height: 20,
    },
    iconDistanciaVerde: {
        width: 70,
        height: 20,
    },
    motorista: {
        flexDirection: "row",
    },
    fotoMotorista: {
        width: 50,
        height: 50,
        margin: 1,
        borderRadius: 100,
    },
    bodarFotoMotorista: {
        borderColor: "#26BBF8",
        borderWidth: 2,
        borderRadius: 100,
        marginLeft: 15,
        marginBottom: 15,
    },
    fotoMotoristaSemBordar: {
        marginLeft: 15,
        marginBottom: 15,
    },
    nomeMotorista: {
        paddingTop: 6,
        paddingHorizontal: 10,
        color: "#447477",
        fontSize: 18,
    },
    pontuacao: {
        flexDirection: "row",
        alignItems: "center",
    },
    estrela: {
        tintColor: "#708D92",
        width: 20,
        height: 20,
        marginLeft: 10,
        marginRight: 4,
    },
    pontoMotorista: {
        color: "#447477",
        alignItems: "center",
        fontSize: 16,
    },
    icons: {
        flexDirection: "row",
        width: "70%",
        justifyContent: "flex-end",
    },
    icon: {
        width: 20,
        height: 20,
    },
    botaoFlutuate: {
        alignItems: "center",
        justifyContent: "center",
    },
    touchableOpacityStyle: {
        position: "absolute",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bottom: 15,
    },
    floatingButtonStyle: {
        backgroundColor: "#01AFF6",
        resizeMode: "contain",
        width: 90,
        height: 50,
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: "center",
        textAlignVertical: "center",
        borderRadius: 100,
    },
});
