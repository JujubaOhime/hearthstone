import { ClassIdEnum } from "../enums/classId";

export const getBackgroundColor: {
	[key in `${ClassIdEnum}`]: string;
} = {
	[ClassIdEnum.Druid]: "rgb(74,52,20)",
	[ClassIdEnum.Hunter]: "rgb(54,112,38)",
	[ClassIdEnum.Mage]: "rgb(65,74,105)",
	[ClassIdEnum.Paladin]: "rgb(106,73,30)",
	[ClassIdEnum.Priest]: "rgb(191,191,191)",
	[ClassIdEnum.Rogue]: "rgb(31,31,31)",
	[ClassIdEnum.Shaman]: "rgb(0,42,94)",
	[ClassIdEnum.Warlock]: "rgb(42,26,52)",
	[ClassIdEnum.Warrior]: "rgb(83,26,27)",
	[ClassIdEnum.Neutral]: "#ae9d8b",
	[ClassIdEnum.DemonHunter]: "rgb(22,57,49)",
};
