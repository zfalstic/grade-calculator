const Calculate = (inputs) => {
  const semester1Final = inputs.semester1 * (1 - inputs.examWeight) / 2;
  const semester2Final = inputs.semester2 * (1 - inputs.examWeight) / 2;
  const result = (inputs.target - semester1Final - semester2Final) / inputs.examWeight;
  
  return result;
}

export default Calculate;