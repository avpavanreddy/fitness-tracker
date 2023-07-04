import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import fitness from "../data/fitness";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FitnessCards = () => {
    const FitnessData = fitness;
    const navigation = useNavigation();
    return (
        <View>
            {FitnessData.map((item, key) => {
                return (
                    <Pressable
                        onPress={() =>
                            navigation.navigate("Workout", {
                                image: item.image,
                                excersises: item.excersises,
                                id: item.id,
                            })
                        }
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            margin: 10,
                            paddingTop: 10,
                        }}
                        key={key}
                    >
                        <Image
                            style={{ height: 140, width: "95%", borderRadius: 7, borderWidth: 0.7, borderColor: 'white' }}
                            source={{ uri: item.image }}
                        />
                        <Text
                            style={{
                                position: "absolute",
                                color: "white",
                                fontSize: 16,
                                fontWeight: "bold",
                                left: 20,
                                top: 20,
                            }}
                        >
                            {item.name}
                        </Text>
                        <MaterialCommunityIcons
                            style={{ position: "absolute", left: 20, bottom: 15 }}
                            name="lightning-bolt"
                            size={24}
                            color="white"
                        />
                    </Pressable>
                );
            })}
        </View>
    );
};

export default FitnessCards;

const styles = StyleSheet.create({});
