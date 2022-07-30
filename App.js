import {
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import { styles } from "./style";
import { useState, useEffect } from "react";

export default function App() {
  const [event, setEvent] = useState(null);
  const [eventList, setEventList] = useState([]);
  function goalInputHandler(e) {
    setEvent(e);
  }

  function addGoalHandler() {
    setEventList((currenteventList) => [
      ...currenteventList,
      { text: event, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.takeNote}>
        <TextInput placeholder="Take a note!" onChangeText={goalInputHandler} />
        <Button title="Take" onPress={addGoalHandler}></Button>
      </View>
      <View style={styles.cList}>
        {/* <ScrollView>
          <Text>
            {eventList.map((event) => (
              <Text key={event}> {event} </Text>
            ))}
          </Text>
        </ScrollView> */}
        <FlatList
          data={eventList}
          renderItem={(itemData) => {
            return (
              <Text>
                <Text> {itemData.item.text} </Text>
              </Text>
            );
          }}
        />
      </View>
    </View>
  );
}
