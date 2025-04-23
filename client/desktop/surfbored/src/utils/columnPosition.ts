interface CalculateColumnPositionProps {
  index: number;
  numVisibleColumns: number;
  containerWidth: number;
  cardWidth: number;
  columnGap: number;
}

export const calculateColumnPosition = ({
  index,
  numVisibleColumns,
  containerWidth,
  cardWidth,
  columnGap,
}: CalculateColumnPositionProps): number => {
  if (numVisibleColumns === 0) {
    return 0;
  }
  const totalWidthOfVisibleColumns = numVisibleColumns * cardWidth;
  const totalGapWidth = (numVisibleColumns - 1) * columnGap;
  const contentWidth = totalWidthOfVisibleColumns + totalGapWidth;
  const centerXOffset = (containerWidth - contentWidth) / 2;
  const columnOffset = index * (cardWidth + columnGap);
  return centerXOffset + columnOffset;
};