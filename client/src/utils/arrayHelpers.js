export const rotatLeftArray = (array, rotations) => {
  for (let i = 0; i < rotations; i++) {
    array.push(array.shift());
    array;
  }
  return array;
};

export const shuffleArray = (array) => {
  array.sort(() => Math.random() - 0.5);
};
