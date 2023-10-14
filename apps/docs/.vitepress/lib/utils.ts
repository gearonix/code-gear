export const capitalize = (str: string) => {
  return str[0].toUpperCase() + str.slice(1)
}

export const transformKebabCase = (str: string) => {
  return str
    .split('-')
    .map((word) => capitalize(word))
    .join(' ')
}
