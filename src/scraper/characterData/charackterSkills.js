const transformData = (data) => {
  const result = {
      name: '',
      skills: []
  };

  const filterInvalidValues = (obj) => {
    const pattern = /^\[t\]\d+$/;

    return Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => !pattern.test(value))
    );
    }

    data = filterInvalidValues(data);

  for (let key in data) {

      const match = key.match(/\[t\](skill_.*?_)(.*?)_(\d{3})/);
      
      if (match) {
          const type = match[1];
          const character = match[2];
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
  result.name = 'Kpt Blaubaer';

  return result;
}


const transformAllCharacters = (dataArray) => {
    return dataArray.map(data => transformData(data));
}


const data = [ 
    {
        "[t]skill_name_ryu_101": "Riding Glider",
        "[t]skill_name_ryu_102": "Sunset Drop",
        "[t]skill_name_ryu_103": "Desert Slider",
        "[t]skill_name_ryu_201": "Drive Impact: Eagle Edge",
        "[t]skill_name_ryu_301": "Drive Reversal: Eagle Slash",
        "[t]skill_name_ryu_302": "Drive Parry",
        "[t]skill_name_ryu_303": "Parry Drive Rush",
        "[t]skill_name_ryu_304": "Cancel Drive Rush",
        "[t]skill_name_ryu_401": "Run",
        "[t]skill_name_ryu_402": "Backup",
        "[t]skill_name_ryu_403": "Tempest Moon",
        "[t]skill_name_ryu_404": "Flapping Spin",
        "[t]skill_name_ryu_405": "Beak Assault",
        "[t]skill_name_ryu_406": "Crescent Kick",
        "[t]skill_name_ryu_407": "Blitz Strike",
        "[t]skill_name_ryu_408": "Aerial Shot",
        "[t]skill_name_ryu_409": "Rising Kick",
        "[t]skill_name_ryu_410": "Side Flip",
        "[t]skill_name_ryu_411": "Front Flip",
        "[t]skill_name_ryu_412": "Wall Jump",
        "[t]skill_name_ryu_413": "Cyclone Slicer",
        "[t]skill_name_ryu_501": "Spinning Mixer",
        "[t]skill_name_ryu_502": "Eagle Spike",
        "[t]skill_name_ryu_503": "Whirlwind Shot",
        "[t]skill_name_ryu_504": "Arabian Cyclone",
        "[t]skill_name_ryu_505": "Wing Stroke",
        "[t]skill_name_ryu_506": "Rolling Assault",
        "[t]skill_name_ryu_507": "Nail Assault",
        "[t]skill_name_ryu_508": "Arabian Skyhigh",
        "[t]skill_name_ryu_509": "[t]509",
        "[t]skill_name_ryu_510": "[t]510",
        "[t]skill_name_ryu_601": "Super Rashid Kick",
        "[t]skill_name_ryu_602": "Ysaar",
        "[t]skill_name_ryu_603": "Altair",
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
        "[t]skill_comment_ryu_101": "Grab the opponent, get them off balance, then send them tumbling with a kick. Throws your opponent without switching places with them.",
        "[t]skill_comment_ryu_102": "Grab the opponent, disrupt their balance, then flip up before coming down with both feet to stomp them into the ground. Throws your opponent while switching places with them.",
        "[t]skill_comment_ryu_103": "Grab the opponent, ride on their back as you descend, then send them skidding along the ground on impact. Throws your opponent without switching places with them.",
        "[t]skill_comment_ryu_201": "Lunge forward with a powerful attack. Can be used to absorb an opponent's attack while launching your own offensive.",
        "[t]skill_comment_ryu_301": "Can be used after blocking an attack to quickly turn a defensive position into an offensive one.",
        "[t]skill_comment_ryu_302": "Adopt a stance that allows you to deflect all opponent strikes. This stance can be sustained by holding down the command used to activate it.",
        "[t]skill_comment_ryu_303": "Immediately move forward from a Drive Parry stance. Normal or unique attacks performed while moving will have their properties changed.",
        "[t]skill_comment_ryu_304": "Immediately move forward out of an attack. Can be performed during any special-cancelable move.",
        "[t]skill_comment_ryu_401": "Continue to hold forward and Rashid will break out into a sprint. Rashid will stop after covering a certain distance or if you release the input.",
        "[t]skill_comment_ryu_402": "A low attack that can be performed during Run. Moves you behind the opponent when it hits.",
        "[t]skill_comment_ryu_403": "An attack that can be performed during Run. This multi-hitting attack lets you expand your mix-up game.",
        "[t]skill_comment_ryu_404": "A two-hit combination attack. The first attack can be canceled into special moves.",
        "[t]skill_comment_ryu_405": "An overhead attack that cannot be blocked while crouching.",
        "[t]skill_comment_ryu_406": "An advancing attack that's great against an opponent's low kicks.",
        "[t]skill_comment_ryu_407": "A jump attack that sends you bounding forward over your opponent when it hits or is blocked.",
        "[t]skill_comment_ryu_408": "A powerful move for dealing with opponents up above that can be performed during a neutral jump.",
        "[t]skill_comment_ryu_409": "A two-hit combination attack that can be canceled into special moves.",
        "[t]skill_comment_ryu_410": "A quick, advancing side flip. You can perform Front Flip from this move.",
        "[t]skill_comment_ryu_411": "Flip through the air towards the opponent. Jump attacks can be performed while in mid-air.",
        "[t]skill_comment_ryu_412": "While jumping, kick off a wall to perform another jump.",
        "[t]skill_comment_ryu_413": "A low attack that can't be blocked while standing, which will knock your opponent down if it hits.",
        "[t]skill_comment_ryu_501": "Unleash multiple chops while spinning. Useful for combos and sequences, it also makes for a great anti-air attack.",
        "[t]skill_comment_ryu_502": "Bound forward while delivering a powerful flying kick. Deals high damage and is easy to use to tack on an additional hit at the end of a combo.",
        "[t]skill_comment_ryu_503": "Spin around quickly to whip up a whirlwind before launching it with a kick. Can be powered up by holding the attack button.",
        "[t]skill_comment_ryu_504": "A spinning kick attack that summons up a whirlwind in front of you. The move can be followed up with two different movement techniques.",
        "[t]skill_comment_ryu_505": "A majestic mid-air forward dash performed from Arabian Cyclone. Allows you to break into a jump attack at any point of the dash.",
        "[t]skill_comment_ryu_506": "A move performed from Arabian Cyclone that sends you rolling forward. A great technique for closing the distance from far or keeping the pressure on when you're up close.",
        "[t]skill_comment_ryu_507": "A rolling kick delivered out of Rolling Assault. Very effective as a follow up attack on opponents launched by Arabian Cyclone.",
        "[t]skill_comment_ryu_508": "Perform a spinning kick in mid-air that creates an air current that you then use to perform a mid-air jump. It's possible to perform jump attacks after the mid-air jump.",
        "[t]skill_comment_ryu_509": "[t]509",
        "[t]skill_comment_ryu_510": "[t]510",
        "[t]skill_comment_ryu_601": "Offload a devastating kick while soaring forward and up through the air. Landing the initial hit on a grounded opponent will increase the move's damage.",
        "[t]skill_comment_ryu_602": "Kick out with both legs to create a large advancing whirlwind. Movements or special moves that make contact with the whirlwind will have their properties changed.",
        "[t]skill_comment_ryu_603": "Twirl around and summon a whirlwind that lifts up your opponent, before Rashid barrages them with a series of powerful blows. A versatile move, perfect for combos, reversals, and as a way of dealing with projectiles.",
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
    }
]

console.log(transformAllCharacters(data));