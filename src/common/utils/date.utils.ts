import { TileArgs } from "react-calendar/dist/cjs/shared/types";

export function isTwoMonthsAhead(targetDate: Date): undefined | null {
  const currentDate = new Date();

  // Add two months to the current date
  const twoMonthsAhead = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 2,
    currentDate.getDate()
  );

  // Compare the target date with two months ahead of the current date
  if (targetDate.getTime() === twoMonthsAhead.getTime()) {
    return undefined;
  } else {
    return null;
  }
}

export const isInPast = (tile: TileArgs) => {
  if (tile.view === "year") return  false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const targetDateWithoutTime = new Date(tile.date);
  targetDateWithoutTime.setHours(0, 0, 0, 0);

  return tile.date < today;
};
