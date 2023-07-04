import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Pressable, ImageBackground } from "react-native";
import React, { useContext } from "react";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";
import { EvilIcons } from '@expo/vector-icons';

const HomeScreen = () => {
    const {
        completed,
        setCompleted,
        minutes,
        setMinutes,
        calories,
        setCalories,
        setWorkout,
        workout,
    } = useContext(FitnessItems);
    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1637430308606-86576d8fef3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGd5bXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' }}
            style={{
                marginTop: 30,
                flex: 1,
                resizeMode: 'cover',
            }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                <View
                    style={{
                        //backgroundColor: "#7673D7",
                        padding: 10,
                        height: 160,
                        width: "100%",
                    }}
                >
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <View style={{ alignSelf: 'flex-start' }}>
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
                                HOME WORKOUT
                            </Text>
                        </View>

                        <View >
                            <Pressable onPress={() => {
                                setCompleted([]);
                                setCalories(0);
                                setMinutes(0);
                                setWorkout(0);
                            }} >
                                <EvilIcons name="refresh" size={35} color="white" />
                            </Pressable>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginTop: 20,
                        }}
                    >
                        <View>
                            <Text
                                style={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    color: "white",
                                    fontSize: 20,
                                    opacity: 1
                                }}
                            >
                                {workout}
                            </Text>
                            <Text style={{ color: "white", fontSize: 17, marginTop: 6 }}>
                                WORKOUTS
                            </Text>
                        </View>

                        <View>
                            <Text
                                style={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    color: "ivory",
                                    fontSize: 20,
                                    opacity: 1
                                }}
                            >
                                {Math.round(calories)}
                            </Text>
                            <Text style={{ color: "white", fontSize: 17, marginTop: 6 }}>
                                KCAL
                            </Text>
                        </View>

                        <View>
                            <Text
                                style={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    color: "white",
                                    fontSize: 20,
                                    opacity: 1
                                }}
                            >
                                {minutes}
                            </Text>
                            <Text style={{ color: "white", fontSize: 17, marginTop: 6 }}>
                                MINS
                            </Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                    </View>
                </View>
                <Image
                    style={{
                        width: "100%",
                        height: 200,
                        marginTop: 0,
                        marginBottom: 20,
                        marginLeft: 0,
                        marginRight: 0,
                        borderRadius: 10
                    }}
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnY32ubCQLFgdnpkaYza0RvqE7SUjZNaDGQ&usqp=CAU",
                    }}
                />
                <FitnessCards />
            </ScrollView>
        </ImageBackground>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});