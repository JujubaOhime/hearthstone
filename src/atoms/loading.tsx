import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, Text } from "react-native";

const Loading = () => {
	const spinValue = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		const runAnimation = () => {
			Animated.loop(
				Animated.sequence([
					Animated.delay(200),
					Animated.timing(spinValue, {
						toValue: 1,
						duration: 2500,
						easing: Easing.elastic(1),
						useNativeDriver: true,
					}),
				])
			).start();
		};

		runAnimation();
	}, []);

	const spin = spinValue.interpolate({
		inputRange: [0, 1],
		outputRange: ["0deg", "360deg"],
	});

	return (
		<Animated.View>
			<Animated.Image
				style={{
					transform: [{ rotate: spin }],
					width: 200,
					height: 200,
				}}
				source={require("../public/hearthstoneIcon.png")}
			/>
			<Text style={{ textAlign: "center" }}>Carregando</Text>
		</Animated.View>
	);
};

export default Loading;
