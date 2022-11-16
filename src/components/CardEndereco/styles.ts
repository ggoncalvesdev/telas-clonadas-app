import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    floatingCard: {
        resizeMode: "contain",
        marginLeft: 10,
        width: 400,
        height: 180,
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
});
