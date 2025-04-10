import { Text, View, StyleSheet} from "react-native";
import Colors from "../../constants/colors";

function GuessLogItem({ roundNumber }) {
  return (
    <View>
      <Text>#{roundNumber}</Text>
      <Text>Opponent`s Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        
    
    }
})
