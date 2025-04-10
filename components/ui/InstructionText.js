import { Text, StyleSheet } from "react-native"
import Colors from "../../constants/colors"
function InsturctionText ({children, style}) {
    return (
        <Text style={[styles.insturctionText, style]}>{children}</Text>
    )
}

export default InsturctionText

const styles = StyleSheet.create({
    insturctionText: {
        fontFamily: "open-sans",
        fontSize: 24,
        color: Colors.accent500,
    }
})