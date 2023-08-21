function getVitality () {

  const result = document.querySelector('.frame_attention__6H6pd > span').textContent;
  return parseInt(result);
}

export { getVitality };