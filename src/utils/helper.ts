export function isValidObjectId(id: string): boolean {
  const objectIdPattern: RegExp = /^[0-9a-fA-F]{24}$/;
  return objectIdPattern.test(id);
}
