
function getRandomInteger(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}


function getRandomArrayElement(items) {

  return items[getRandomInteger(items.length)];
}


const getRandomElementsArray = (arr, length) => {
  const values = [];
  while (values.length < length) {
    const currentElement = getRandomArrayElement(arr);
    values.push(currentElement);
  }
  return values;
};

function isEscKeydown(key) {
  return key === 'Escape';
}


export { getRandomArrayElement, getRandomInteger, getRandomElementsArray , isEscKeydown};
