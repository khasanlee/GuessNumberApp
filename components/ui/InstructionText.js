import { Text, StyleSheet } from "react-native"
import Colors from "../../constants/colors"
function InsturctionText ({children}) {
    return (
        <Text style={styles.insturctionText}>{children}</Text>
    )
}

export default InsturctionText

const styles = StyleSheet.create({
    insturctionText: {
        fontSize: 24,
        color: Colors.accent500,
    }
})