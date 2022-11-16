import { StyleSheet, Platform, Dimensions } from "react-native";

const width = Dimensions.get("screen").width;

export const styles = StyleSheet.create({
    body: {
        height: "100%",
    },
    container: {
        flexDirection: "column",
        paddingTop: Platform.OS === "ios" ? 64 : 100,
        marginHorizontal: 10,
    },
    floatingCard: {
        resizeMode: "contain",
        width: 400,
        height: 50,
    },
    cardEndereco: {
        backgroundColor: "#fff",
        position: "absolute",
        bottom: 1,
        width: "95%",
        alignSelf: "center",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#EBEBEB",
    },
    topo: {
        backgroundColor: "#2CBCE5",
        paddingTop: 90,
    },
    imagemTopo: {
        width: "100%",
        height: 290,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        paddingTop: 80,
        fontSize: 30,
        lineHeight: 26,
        color: "#fff",
        fontWeight: "bold",
    },
    input: {
        backgroundColor: "#ffff",
        fontSize: 20,
        padding: Platform.OS === "ios" ? 15 : 10,
        marginVertical: 10,
    },
    inputDate: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingTop: 15,
    },
    inputDateInside: {
        flexDirection: "row",
    },
    inputDateInsidePeople: {
        flexDirection: "row",
        borderLeftWidth: 1,
        borderLeftColor: "#879296",
        paddingHorizontal: 12,
    },
    circulo: {
        width: 20,
        height: 20,
        marginLeft: 5,
    },
    circuloImagem: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        width: "90%",
        borderBottomWidth: 1,
        borderBottomColor: "#879296",
    },
    button: {
        backgroundColor: "#01AFF6",
        padding: 15,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderWidth: 1,
        borderColor: "#50C0EE",
        alignItems: "center",
        marginTop: 20,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 17,
        fontWeight: "bold",
    },
    imagemIcon: {
        width: 25,
        height: 25,
        tintColor: "#708C91",
    },
    textoIcon: {
        paddingBottom: 5,
        paddingHorizontal: 8,
        fontSize: 16,
        fontWeight: "bold",
    },
    busca: {
        width: "100%",
    },
    posicaoBusca: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
    },
    textoCardBusca: {
        fontWeight: "bold",
        width: "90%",
        paddingHorizontal: 20,
        marginTop: 20,
        color: "#5E8287",
        fontSize: 16,
        alignItems: "center",
    },
    textoPassageiro: {
        paddingHorizontal: 50,
        color: "#819193",
    },
    iconRelogio: {
        tintColor: "#819193",
        marginTop: 50,
        marginLeft: 8,
        width: 25,
        height: 25,
    },
    iconSeta: {
        tintColor: "#819193",
        marginTop: 40,
        width: 15,
        height: 15,
        marginLeft: 10,
    },
});
