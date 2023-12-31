/* helper functions to format data */

const filterInvalidValues = (obj) => {
  const pattern = /^\[t\]\d+$/;
  return Object.fromEntries(
      Object.entries(obj).filter(([_, value]) => !pattern.test(value))
  );
};

const filterKeyString = (string) => {
  const regex = /\[t\](skill_.*?_)(.*?)_(\d{3})/;
  return string.match(regex);
};

const filterPathString = (string) => {
  const regex = /[^/]+$/;
  return string.match(regex)[0];
};

function generateVideoUrl(name, videoId) {
  const baseURL = "https://www.streetfighter.com/6/assets/images/character/";
  return `${baseURL}${name}/skill/movie/${videoId}.mp4`;
};

/* refactor skills/moves data */

const transformSkillData = (data) => {

  const result = [];
  data = filterInvalidValues(data);

  for (let key in data) {

    const match = filterKeyString(key)
    if (match) {
      const type = match[1];
      const character = match[2];
      const id = match[3];

      if (type === "skill_name_") {
          result.push({
              name: data[key],
              video: generateVideoUrl(character, id)
          });
        } else if (type === "skill_comment_") {
        const videoUrl = generateVideoUrl(character, id);
        const skill = result.find(skill => skill.video === videoUrl);
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

export { transformCharacterData };