const Calculate = (inputs) => {
  let result = [];
  for(let i = 0; i < inputs.length; i++) {
    const semester1Final = inputs[i].semester1 * (1 - inputs[i].examWeight) / 2;
    const semester2Final = inputs[i].semester2 * (1 - inputs[i].examWeight) / 2;
    result.push((inputs[i].target - semester1Final - semester2Final) / inputs[i].examWeight);
  }
}

export default Calculate;