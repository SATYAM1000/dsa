function returnFirstElement<T>(myArray: T[]): T | null {
  return myArray.length > 0 ? myArray[0] : null;
}
