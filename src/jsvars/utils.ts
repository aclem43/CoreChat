
export const objStr = (object: object) => {
  return JSON.stringify(object)
}

export const strObj = (string: string) => {
  return JSON.parse(string)
}