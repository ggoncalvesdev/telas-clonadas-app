import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    body: {
        backgroundColor: "#fff",
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
});
