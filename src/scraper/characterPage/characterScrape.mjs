/* on the top character page, eg. https://www.streetfighter.com/6/character/zangief */

function scrapeCharacterStats() {
  const result = {
    name: window.location.pathname.split('/').filter(Boolean).pop(),
    bio: document.querySelector('.detail_detail__profile__text__8JGgO').textContent,
    like: document.querySelector('.detail_detail__profile__info__DAhwF').children[1].children[1].textContent,
    notlike: document.querySelector('.detail_detail__profile__info__DAhwF').children[0].children[1].textContent,
    height: document.querySelector('.detail_detail__profile__info__DAhwF').children[2].children[1].textContent,
    weight: document.querySelector('.detail_detail__profile__info__DAhwF').children[3].children[1].textContent,
    vitality: 0,
    moves: []
  };
  return result;
}

/* on the frame data page, eg. https://www.streetfighter.com/6/character/zangief/frame */

function getVitality () {
  const result = document.querySelector('.frame_attention__6H6pd > span').textContent;
  return parseInt(result);
}

export { scrapeCharacterStats, getVitality };