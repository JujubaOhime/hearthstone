import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Image,
	StatusBar,
} from "react-native";
import Loading from "../atoms/loading";
import Error from "../atoms/error";
import useData from "../hooks/useData";
import { CardsType } from "../types";
import { SafeAreaView } from "react-native-safe-area-context";
import { getBackgroundColor } from "../utils/uGetBackgroundColor";

const StatusBarHeight = (StatusBar.currentHeight || 20) + 20;

const Home = () => {
	const [cardName, setCardName] = useState("");
	const [text, setText] = useState("");

	const { data, loading, error } = useData<CardsType>({
		endpoint: "/cards",
		params: `?textFilter=${cardName || "aya"}`,
	});

	return (
		<SafeAreaView style={{ padding: 20, flex: 1, paddingTop: StatusBarHeight }}>
			<StatusBar
				animated={true}
				backgroundColor={
					data?.cards?.[0]?.classId
						? getBackgroundColor[data?.cards?.[0]?.classId]
						: "black"
				}
				hidden={false}
				translucent={true}
			/>
			{loading || error ? null : (
				<TextInput
					placeholder="Pesquisar por sua carta"
					value={text}
					onBlur={() => setCardName(text)}
					onChangeText={setText}
					textAlign="center"
				/>
			)}

			<View style={styles.container}>
				{loading || !data?.cards ? (
					<Loading />
				) : error ? (
					<Error message="O senhor do caos sumiu com sua requisição. Tente novamente mais tarde" />
				) : data.cardCount === 0 ? (
					<Error message="O Senhor do Caos sumiu com seu card. Pesquise novamente" />
				) : (
					<>
						<Image
							resizeMode="contain"
							style={{
								width: 320,
								aspectRatio: 375 / 518,
								shadowColor: "#000",
								shadowOffset: {
									width: 0,
									height: 2,
								},
								shadowOpacity: 0.25,
								shadowRadius: 3.84,
								right: -5,
								top: -10,
							}}
							source={{
								uri: data.cards?.[0].image,
							}}
						/>
					</>
				)}
			</View>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingTop: StatusBar.currentHeight,
	},
});
