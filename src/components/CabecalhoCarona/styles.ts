import { StyleSheet } from "react-native";

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
});
