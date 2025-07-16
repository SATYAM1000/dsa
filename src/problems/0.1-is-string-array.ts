function isStringArray(myArray: unknown) {
  return (
    typeof myArray === "object" &&
    Array.isArray(myArray) &&
    myArray.every((value) => typeof value === "string")
  );
}

export default isStringArray;
