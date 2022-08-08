import { ClassIdEnum } from "../enums/classId";

export const getClassNameById: {
	[key in keyof Record<ClassIdEnum, number>]: string;
} = {
	[ClassIdEnum.Druid]: "Druida",
	[ClassIdEnum.Hunter]: "Caçador",
	[ClassIdEnum.Mage]: "Mago",
	[ClassIdEnum.Paladin]: "Paladino",
	[ClassIdEnum.Priest]: "Sacerdote",
	[ClassIdEnum.Rogue]: "Ladino",
	[ClassIdEnum.Shaman]: "Xamã",
	[ClassIdEnum.Warlock]: "Bruxo",
	[ClassIdEnum.Warrior]: "Guerreiro",
	[ClassIdEnum.Neutral]: "Neutro",
	[ClassIdEnum.DemonHunter]: "Caçador de Demônios",
};
