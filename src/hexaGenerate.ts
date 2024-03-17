import { trigramMap, TrigInfo } from "./trigramMap";
import { hexagramMap, HexaInfo } from "./hexagramMap";

const canvas = new OffscreenCanvas(100, 100);
const drawContext = canvas.getContext("2d");

const fill6Bit = (value) => {
  return `000000${value}`.slice(value.length);
};

export const getTrigramsFromHexagram = (
  index: number
): [upper: number, lower: number] => {
  return [index % 8, Math.floor(index / 8)];
};

export const getHexaImageURL = async (index: number): Promise<string> => {
  const chars = fill6Bit(index.toString(2)).split("");
  drawContext?.clearRect(0, 0, 100, 100);

  chars.forEach((charValue, charIndex) => {
    const yAxis = (6 - Number(charIndex)) * 14;
    if (charValue === "1") {
      drawContext?.fillRect(10, yAxis, 80, 10);
    }

    if (charValue === "0") {
      drawContext?.fillRect(10, yAxis, 30, 10);
      drawContext?.fillRect(60, yAxis, 30, 10);
    }
  });

  return URL.createObjectURL(await canvas.convertToBlob());
};

export const extractHexagramInfo = (
  index: number
): [TrigInfo, TrigInfo, HexaInfo] => {
  const [upperTrig, lowerTrig] = getTrigramsFromHexagram(index).map(
    (index) => trigramMap[index]
  );

  return [upperTrig, lowerTrig, hexagramMap[index]];
};

export const concatHexagramName: (
  upperTrigInfo: TrigInfo,
  lowerTrigInfo: TrigInfo,
  hexaInfo: HexaInfo
) => string = (upperTrigInfo, lowerTrigInfo, hexaInfo) => {
  if (upperTrigInfo === lowerTrigInfo) {
    return `${upperTrigInfo.name}为${upperTrigInfo.symbol}`;
  }

  return upperTrigInfo.symbol + lowerTrigInfo.symbol + hexaInfo.name;
};

export const getHexaNameWithIndex = (index) =>
  concatHexagramName(...extractHexagramInfo(index));
