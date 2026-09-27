import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar as NativeStatusBar,
  Pressable,
  Modal,
  ScrollView,
} from "react-native";

const App = () => {
  const [cards, setCards] = useState([
    { id: 1, title: "Card 1", description: "Description for Card 1" },
    { id: 2, title: "Card 2", description: "Description for Card 2" },
    { id: 3, title: "Card 3", description: "Description for Card 3" },
    { id: 4, title: "Card 4", description: "Description for Card 4" },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        {cards.map((card) => {
          return (
            <Pressable
              key={card.id}
              style={({ pressed }) => [
                styles.card,
                {
                  backgroundColor: pressed ? "#a04848" : "#f0f0f0",
                },
              ]}
              onPress={() => {
                setModalVisible(true);
                setSelectedCard(card);
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {card.title}
              </Text>
            </Pressable>
          );
        })}
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <ScrollView>
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              {selectedCard?.title}
            </Text>
            <Text style={{ marginTop: 10 }}>{selectedCard?.description}</Text>
            <Pressable
              style={{
                padding: 10,
                backgroundColor: "lightgray",
                borderRadius: 5,
              }}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ color: "blue", textAlign: "center" }}>Close</Text>
            </Pressable>
          </View>
        </ScrollView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop:
      Platform.OS === "android" ? (NativeStatusBar.currentHeight ?? 0) : 0,
  },
  card: {
    margin: 10,
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
});

export default App;
