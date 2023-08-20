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

function transformData (data) {

  const result = {
      name: '',
      skills: []
  };
  
  data = filterInvalidValues(data);

  for (let key in data) {
    const match = filterKeyString(key)
    
    if (match) {
      const type = match[1];
      // const character = match[2];
      const id = match[3];

      if (type === "skill_name_") {
          result.skills.push({
              name: data[key],
              "skill-id": id
          });
      } else if (type === "skill_comment_") {
          const skill = result.skills.find(skill => skill["skill-id"] === id);
          if (skill) {
              skill.description = data[key];
          }
        }
      }
    }
  result.name = 'name';

  return result;
}

const transformAllCharacters = (dataArray) => {
    return dataArray.map(data => transformData(data));
}

const data = [ {
  "character/movelist/ryu": {
    "[t]skill_name_ryu_101": "Shoulder Throw",
    "[t]skill_name_ryu_102": "Somersault Throw",
    "[t]skill_name_ryu_103": "[t]103",
    "[t]skill_name_ryu_201": "Drive Impact: Shingeki",
    "[t]skill_name_ryu_301": "Drive Reversal: Chest Strike",
    "[t]skill_name_ryu_302": "Drive Parry",
    "[t]skill_name_ryu_303": "Parry Drive Rush",
    "[t]skill_name_ryu_304": "Cancel Drive Rush",
    "[t]skill_name_ryu_401": "Collarbone Breaker",
    "[t]skill_name_ryu_402": "Solar Plexus Strike",
    "[t]skill_name_ryu_403": "Short Uppercut",
    "[t]skill_name_ryu_404": "Axe Kick",
    "[t]skill_name_ryu_405": "Whirlwind Kick",
    "[t]skill_name_ryu_406": "High Double Strike",
    "[t]skill_name_ryu_407": "Fuwa Triple Strike",
    "[t]skill_name_ryu_408": "Low Spinning Sweep",
    "[t]skill_name_ryu_409": "[t]409",
    "[t]skill_name_ryu_410": "[t]410",
    "[t]skill_name_ryu_501": "Hadoken",
    "[t]skill_name_ryu_502": "Shoryuken",
    "[t]skill_name_ryu_503": "Tatsumaki Senpu-kyaku",
    "[t]skill_name_ryu_504": "Aerial Tatsumaki Senpu-kyaku",
    "[t]skill_name_ryu_505": "High Blade Kick",
    "[t]skill_name_ryu_506": "Hashogeki",
    "[t]skill_name_ryu_507": "Denjin Charge",
    "[t]skill_name_ryu_508": "[t]508",
    "[t]skill_name_ryu_509": "[t]509",
    "[t]skill_name_ryu_510": "[t]510",
    "[t]skill_name_ryu_601": "Shinku Hadoken",
    "[t]skill_name_ryu_602": "Shin Hashogeki",
    "[t]skill_name_ryu_603": "Shin Shoryuken",
    "[t]skill_name_ryu_604": "[t]604",
    "[t]skill_name_ryu_605": "[t]605",
    "[t]skill_name_ryu_606": "[t]606",
    "[t]skill_name_ryu_607": "[t]607",
    "[t]skill_name_ryu_608": "[t]608",
    "[t]skill_name_ryu_609": "[t]609",
    "[t]skill_name_ryu_610": "[t]610",
    "[t]skill_name_ryu_801": "Assisted Combo 1",
    "[t]skill_name_ryu_802": "Assisted Combo 2",
    "[t]skill_name_ryu_803": "Assisted Combo 3",
    "[t]separator": "---------------------------------------------------------------------",
    "[t]skill_comment_ryu_101": "Grab your opponent and—bearing the brunt of their weight with your arm and back—toss them forward. Throws your opponent without switching places with them.",
    "[t]skill_comment_ryu_102": "Grab your opponent, place your foot on their torso, and throw them behind you as you fall backwards. Throws your opponent while switching places with them.",
    "[t]skill_comment_ryu_103": "[t]103",
    "[t]skill_comment_ryu_201": "Lunge forward with a powerful attack. Can be used to absorb an opponent's attack while launching your own offensive.",
    "[t]skill_comment_ryu_301": "Can be used after blocking an attack to quickly turn a defensive position into an offensive one.",
    "[t]skill_comment_ryu_302": "Adopt a stance that allows you to deflect all opponent strikes. This stance can be sustained by holding down the command used to activate it.",
    "[t]skill_comment_ryu_303": "Immediately move forward from a Drive Parry stance. Normal or unique attacks performed while moving will have their properties changed.",
    "[t]skill_comment_ryu_304": "Immediately move forward out of an attack. Can be performed during any special-cancelable move.",
    "[t]skill_comment_ryu_401": "An overhead attack that cannot be blocked while crouching.",
    "[t]skill_comment_ryu_402": "A forward-moving attack that allows you to act before an opponent even if blocked.",
    "[t]skill_comment_ryu_403": "A quick strike that can be canceled into special moves.",
    "[t]skill_comment_ryu_404": "A multi-hit kick that can be canceled into special moves.",
    "[t]skill_comment_ryu_405": "A kick with long reach. Useful as a counter to an opponent's sweeps.",
    "[t]skill_comment_ryu_406": "A multi-hit attack with a lenient input window for follow-ups.",
    "[t]skill_comment_ryu_407": "A multi-hit attack that doesn't leave you wide open even if stopped partway through.",
    "[t]skill_comment_ryu_408": "A low attack that can't be blocked while standing, which will knock your opponent down if it hits.",
    "[t]skill_comment_ryu_409": "[t]409",
    "[t]skill_comment_ryu_410": "[t]410",
    "[t]skill_comment_ryu_501": "Fire a ki blast directly forward. Useful for attacking opponents at range.",
    "[t]skill_comment_ryu_502": "Leap into the air and perform a powerful uppercut. A Shoryuken is invincible to an opponent's jumping attacks, making it a great anti-air tool.",
    "[t]skill_comment_ryu_503": "Unleash a series of roundhouse kicks while moving forward. A useful attack for knocking opponents away.",
    "[t]skill_comment_ryu_504": "A Tatsumaki Senpu-kyaku performed while airborne. Useful for altering the trajectory of your jump, or for staging a surprise attack from above.",
    "[t]skill_comment_ryu_505": "A thrust kick that quickly closes distance, and can be used to surprise an opponent between their attacks. Strike with the tip of the foot for maximum effectiveness.",
    "[t]skill_comment_ryu_506": "Concentrate ki in the palm and unleash it directly forward. Useful as a follow-up after blocks and combos.",
    "[t]skill_comment_ryu_507": "Envelop your fists with the Power of Nothingness, enhancing moves such as the Hadoken and Hashogeki. Leaves you wide open, making the timing of its usage critical.",
    "[t]skill_comment_ryu_508": "[t]508",
    "[t]skill_comment_ryu_509": "[t]509",
    "[t]skill_comment_ryu_510": "[t]510",
    "[t]skill_comment_ryu_601": "A Hadoken in which the body's ki is concentrated and condensed into your palms before firing. Its swift speed and invulnerability can quickly turn the tables on an opponent.",
    "[t]skill_comment_ryu_602": "A Hashogeki enhanced through spiritual focus. Hold the button to charge the attack and increase its power.",
    "[t]skill_comment_ryu_603": "A powerful Shoryuken unleashed at short range. An overwhelming technique that aims for an opponent's vitals.",
    "[t]skill_comment_ryu_604": "[t]604",
    "[t]skill_comment_ryu_605": "[t]605",
    "[t]skill_comment_ryu_606": "[t]606",
    "[t]skill_comment_ryu_607": "[t]607",
    "[t]skill_comment_ryu_608": "[t]608",
    "[t]skill_comment_ryu_609": "[t]609",
    "[t]skill_comment_ryu_610": "[t]610",
    "[t]skill_comment_ryu_801": "[t]801",
    "[t]skill_comment_ryu_802": "[t]802",
    "[t]skill_comment_ryu_803": "[t]803"
  },
}
]

console.log(transformAllCharacters(data));