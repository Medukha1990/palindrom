const isNumArmstrong = (num: number) => {
  const arrFromNum = num.toString()
    .split('')
    .map((int) => parseInt(int, arrFromNum));

  return arrFromNum;
};

export default isNumArmstrong;
