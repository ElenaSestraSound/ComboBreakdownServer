import { rawSkillData } from './rawSkillData.js';
import fs from 'fs';

/* helper functions to format data */

const filterInvalidValues = (obj) => {
  const pattern = /^\[t\]\d+$/;
  return Object.fromEntries(
      Object.entries(obj).filter(([_, value]) => !pattern.test(value))
  );
}

const filterKeyString = (string) => {
  const regex = /\[t\](skill_.*?_)(.*?)_(\d{3})/;
  return string.match(regex);
}

const filterPathString = (string) => {
  const regex = /[^/]+$/;
  return string.match(regex)[0];
}

/* refactor skills/moves data */

const transformSkillData = (data) => {

  const result = [];
  data = filterInvalidValues(data);

  for (let key in data) {

    const match = filterKeyString(key)
    if (match) {
      const type = match[1];
      const id = match[3];

      if (type === "skill_name_") {
          result.push({
              name: data[key],
              video: id
          });
      } else if (type === "skill_comment_") {
          const skill = result.find(skill => skill['video'] === id);
          if (skill) {
              skill.definition = data[key];
          }
        }
      }
    }
  return result;
}

/* function to transform character object */

function transformCharacterData(data) {
  return Object.entries(data).map(([characterName, skills]) => {
    return {
        name: filterPathString(characterName),
        moves: Object.values(transformSkillData(skills))
    };
  });
}

let data = await transformCharacterData(rawSkillData);
fs.writeFile('output.json', JSON.stringify(data), (err) => {
 if (err) throw err;
});

console.log(transformCharacterData(rawSkillData))

export { transformCharacterData };