export enum TrigName {
  坤 = "坤",
  艮 = "艮",
  坎 = "坎",
  巽 = "巽",
  震 = "震",
  离 = "离",
  兑 = "兑",
  乾 = "乾",
}

export enum TrigSymbol {
  地 = "地",
  山 = "山",
  水 = "水",
  风 = "风",
  雷 = "雷",
  火 = "火",
  泽 = "泽",
  天 = "天",
}

export interface TrigInfo {
  name: TrigName;
  symbol: TrigSymbol;
}

export const trigramMap = [
  { name: TrigName.坤, symbol: TrigSymbol.地 },
  { name: TrigName.艮, symbol: TrigSymbol.山 },
  { name: TrigName.坎, symbol: TrigSymbol.水 },
  { name: TrigName.巽, symbol: TrigSymbol.风 },
  { name: TrigName.震, symbol: TrigSymbol.雷 },
  { name: TrigName.离, symbol: TrigSymbol.火 },
  { name: TrigName.兑, symbol: TrigSymbol.泽 },
  { name: TrigName.乾, symbol: TrigSymbol.天 },
];
