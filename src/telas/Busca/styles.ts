import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    body: {
        backgroundColor: "#fff",
        height: "100%",
        flexDirection: "column",
        paddingTop: Platform.OS === "ios" ? 64 : 10,
    },
});
