import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, Image, Text, View } from "react-native";

type PropsType = {
	message: string;
};

const Error = ({ message }: PropsType) => {
	return (
		<View
			style={{
				flex: -1,
				justifyContent: "center",
				width: 300,
				height: "auto",
				padding: 20,
				alignItems: "center",
				backgroundColor: "#725c51",
				borderWidth: 5,
				borderRadius: 5,
				shadowColor: "#000",
				shadowOffset: {
					width: 0,
					height: 2,
				},
				shadowOpacity: 0.25,
				shadowRadius: 3.84,
				elevation: 5,
			}}
		>
			<Image
				style={{
					flex: 0,
					justifyContent: "center",
					alignItems: "center",
					top: -60,
					width: 270,
					height: 270,
					borderRadius: 135,
					borderColor: "#9d9b93",
					borderWidth: 8,
					resizeMode: "cover",
					transform: [{ scaleX: 0.7 }],
				}}
				source={require("../public/errorImage.jpg")}
			/>

			<View
				style={{
					marginTop: -40,
					padding: 20,
					width: "100%",
					borderRadius: 10,
					backgroundColor: "#a99885",
					shadowColor: "#000",
					shadowOffset: {
						width: 0,
						height: 2,
					},
					shadowOpacity: 1,
					shadowRadius: 3.84,
					elevation: 10,
					zIndex: 100000,
				}}
			>
				<Text style={{ textAlign: "center", color: "white" }}>{message}</Text>
			</View>
		</View>
	);
};

export default Error;
