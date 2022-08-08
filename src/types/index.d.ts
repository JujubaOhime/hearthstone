import { CardTypeEnum } from "../enums/cardType";
import { ClassIdEnum } from "../enums/classId";

export type CardType = {
	id: number;
	collectible: number;
	slug: string;
	classId: `${ClassIdEnum}`;
	multiClassIds?: CardType["classId"][] | null;
	cardTypeId: Record<CardTypeEnum, number>;
	cardSetId: number;
	rarityId: number;
	artistName: string;
	health: number;
	manaCost: number;
	name: string;
	text: string;
	image: string;
	imageGold: string;
	flavorText: string;
	cropImage: string;
	parentId: number;
	childIds?: number[] | null;
};

export type CardsType = {
	cards?: CardType[] | null;
	cardCount: number;
	pageCount: number;
	page: number;
};
