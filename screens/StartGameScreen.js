import { TextInput, StyleSheet, View } from "react-native";
import PrimaryButton from "../components/PrimayButton";

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
    
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: "#72063c",
        borderRadius: 8,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
});