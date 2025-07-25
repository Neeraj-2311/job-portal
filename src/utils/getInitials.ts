export const getInitials = (name: string, n: number) => {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .substring(0, n)
    .toUpperCase();
};