const character = {
    "name": "Caturra Maitu",
    "classes": [
        {
            "type": "Ranger",
            "level": 10
        },
        {
            "type": "Cleric",
            "level": 2
        }
    ],
    "race": "Wood Elf",
    "experience": 112305,
    "experience_next": 120000,
    "hp": 62,
    "spell_modifier": "wis",
    "spell_slots": [4, 3, 3, 1],
    "ac": 18,
    "initiative": 4,
    "proficiency": 4,
    "abilities": [
        {
            "abbr": "str",
            "value": 10,
            "proficient": true
        },
        {
            "abbr": "dex",
            "value": 18,
            "proficient": true
        },
        {
            "abbr": "con",
            "value": 8
        },
        {
            "abbr": "int",
            "value": 12
        },
        {
            "abbr": "wis",
            "value": 16
        },
        {
            "abbr": "cha",
            "value": 13
        }
    ],
    "skill_proficiencies": {
        "insight": {},
        "nature": {
            "factor": 2
        },
        "perception": {},
        "persuasion": {},
        "stealth": {},
        "survival": {
            "factor": 2
        }
    },
    "attacks": [
        {
            "name": "Deadeye Arcus",
            "bonus": 11,
            "damage": "1d8+5",
            "type": "piercing"
        },
        {
            "name": "Old Jack's Scimitar",
            "bonus": 9,
            "damage": "1d6+5",
            "type": "slashing"
        },
        {
            "name": "Short sword",
            "bonus": 8,
            "damage": "1d6+4",
            "type": "slashing"
        }
    ],
    spells: [
        {
            "type": "Ranger",
            "list": [
                {
                    "name": "Absorb Elements",
                    "level": 1,
                    "school": "Abjuration",
                    "casting_time": "1 reaction",
                    "range": "self",
                    "components": "S",
                    "duration": "1 round",
                    "classes": "Druid, Ranger, Sorceror, Wizard",
                    "description": "When hit with acid, cold, fire, lightning, or thunder damage, you can use your reaction to have resistance to it until the start of your next turn, including against the triggering attack. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 of the damage type."
                },
                {
                    "name": "Conjure Animals",
                    "level": 3,
                    "school": "Abjuration",
                    "casting_time": "1 reaction",
                    "range": "60 feet",
                    "components": "V S",
                    "duration": "Concentration, up to 1 hour",
                    "classes": "Druid, Ranger",
                    "description": "You summon fey spirits that take the form of beasts and appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears: One beast of challenge rating 2 or lower Two beasts of challenge rating 1 or lower Four beasts of challenge rating 1/2 or lower Eight beasts of challenge rating 1/4 or lower Each beast is also considered fey, and it disappears when it drops to 0 hit points or when the spell ends. The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don’t issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The GM has the creatures’ statistics.\r\nWhen you cast this spell using certain higher-level Spell Slots, you choose one of the summoning options above, and more creatures appear - twice as many with a 5th-level slot, three times as many with a 7th-level slot, and four times as many with a 9th-level slot."
                },
                {
                    "name": "Etherealness",
                    "level": 7,
                    "school": "Transmutation",
                    "casting_time": "1 bonus action",
                    "range": "self",
                    "components": "V S",
                    "duration": "Up to 8 hours (Current turn)",
                    "classes": "Bard, Cleric, Sorcerer, Warlock, Wizard",
                    "description": "You step into the border regions of the Ethereal Plane, in the area where it overlaps with your current plane. You remain in the Border Ethereal for the duration or until you use your action to dismiss the spell. During this time, you can move in any direction. If you move up or down, every foot of movement costs an extra foot. You can see and hear the plane you originated from, but everything there looks gray, and you can’t see anything more than 60 feet away. While on the Ethereal Plane, you can only affect and be affected by other creatures on that plane. Creatures that aren’t on the Ethereal Plane can’t perceive you and can’t interact with you, unless a special ability or magic has given them the ability to do so. You ignore all objects and effects that aren’t on the Ethereal Plane, allowing you to move through objects you perceive on the plane you originated from. When the spell ends, you immediately return to the plane you originated from in the spot you currently occupy. If you occupy the same spot as a solid object or creature when this happens, you are immediately shunted to the nearest unoccupied space that you can occupy and take force damage equal to twice the number of feet you are moved. This spell has no effect if you cast it while you are on the Ethereal Plane or a plane that doesn’t border it, such as one of the Outer Planes.\r\nAs a bonus action, you can cast this spell without expending a spell slot, but the spell ends at the end of your current turn. Once you use this feature, you can’t use it again until you finish a short or long rest."
                },
                {
                    "name": "Haste",
                    "level": 3,
                    "school": "Transmutation",
                    "casting_time": "1 action",
                    "range": "30 feet",
                    "components": "V S M",
                    "duration": "Concentration, up to 1 minute",
                    "classes": "Sorceror, Wizard",
                    "description": "Choose a willing creature that you can see within range. Until the spell ends, the target’s speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action.\r\nWhen the spell ends, the target can’t move or take actions until after its next turn, as a wave of lethargy sweeps over it."
                },
                {
                    "name": "Hunter's Mark",
                    "level": 1,
                    "school": "Divination",
                    "casting_time": "1 bonus action",
                    "range": "90 feet",
                    "components": "V",
                    "duration": "Concentration, up to 1 hour",
                    "classes": "Ranger",
                    "description": "You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any Wisdom (Perception) or Wisdom (Survival) check you make to find it. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to mark a new creature.\r\nWhen you cast this spell using a spell slot of 3rd or 4th level, you can maintain your Concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentr⁠ation on the spell for up to 24 hours."
                },
                {
                    "name": "Lightning Arrow",
                    "level": 3,
                    "school": "Transmutation",
                    "casting_time": "1 bonus action",
                    "range": "self",
                    "components": "V S",
                    "duration": "Concentration, up to 1 minute",
                    "classes": "Ranger",
                    "description": "The next time you make a ranged weapon attack during the spell's duration, the weapon's ammunition, or the weapon itself if it's a thrown weapon, transforms into a bolt of lightning. Make the attack roll as normal. The target takes 4d8 lightning damage on a hit, or half as much damage on a miss, instead of the weapon's normal damage.\r\nWhether you hit or miss, each creature within 10 feet of the target must make a Dexterity saving throw. Each of these creatures takes 2d8 lightning damage on a failed save, or half as much damage on a successful one.\r\nThe piece of ammunition or weapon then returns to its normal form.\r\nWhen you cast this spell using a spell slot of 4th level or higher, the damage for both effects of the spell increases by 1d8 for each slot level above 3rd."
                },
                {
                    "name": "Misty Step",
                    "level": 2,
                    "school": "Conjuration",
                    "casting_time": "1 bonus action",
                    "range": "self",
                    "components": "V",
                    "duration": "Instantaneous",
                    "classes": "Sorcerer, Warlock, Wizard",
                    "description": "Briefly surrounded by silvery mist, you Teleport up to 30 feet to an unoccupied space that you can see."
                },
                {
                    "name": "Pass Without Trace",
                    "level": 2,
                    "school": "Abjuration",
                    "casting_time": "1 action",
                    "range": "self",
                    "components": "V S M",
                    "duration": "Concentration, up to 1 hour",
                    "classes": "Druid, Ranger",
                    "description": "A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can’t be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage."
                },
                {
                    "name": "Protection from Evil and Good",
                    "level": 1,
                    "school": "Abjuration",
                    "casting_time": "1 action",
                    "range": "touch",
                    "components": "V S M",
                    "duration": "Concentration, up to 10 minutes",
                    "classes": "Cleric, Paladin, Warlock, Wizard",
                    "description": "Until the spell ends, one willing creature you touch is protected against certain types of creatures - Aberrations, Celestials, Elementals, fey, Fiends, and Undead.\r\nThe protection grants several benefits. Creatures of those types have disadvantage on Attack rolls against the target. The target also can't be Charmed, Frightened, or possessed by them. If the target is already Charmed, Frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect."
                },
                {
                    "name": "Spike Growth",
                    "level": 2,
                    "school": "Transmutation",
                    "casting_time": "1 action",
                    "range": "150 feet",
                    "components": "V S M",
                    "duration": "Concentration, up to 10 minutes",
                    "classes": "Druid, Ranger",
                    "description": "The ground in a 20-foot radius centered on a point within range twists and sprouts hard spikes and thorns. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels.\r\nThe transformation of the ground is camouflaged to look natural. Any creature that can’t see the area at the time the spell is cast must make a Wisdom (Perception) check against your spell save DC to recognize the terrain as hazardous before entering it."
                }
            ]
        },
        {
            "type": "Cleric",
            "list": [
                {
                    "name": "Create or Destroy Water",
                    "level": 1,
                    "school": "Transmutation",
                    "casting_time": "1 action",
                    "range": "30 feet",
                    "components": "V S M",
                    "duration": "Instantaneous",
                    "classes": "Cleric, Druid",
                    "description": "You either create or destroy water. Create Water. You create up to 10 gallons of clean water within range in an open container. Alternatively, the water falls as rain in a 30-foot cube within range, extinguishing exposed flames in the area. Destroy Water. You destroy up to 10 gallons of water in an open container within range. Alternatively, you destroy fog in a 30-foot cube within range.\r\nWhen you cast this spell using a spell slot of 2nd level or higher, you create or destroy 10 additional gallons of water, or the size of the cube increases by 5 feet, for each slot level above 1st."
                },
                {
                    "name": "Cure Wounds",
                    "level": 1,
                    "school": "Evocation",
                    "casting_time": "1 action",
                    "range": "touch",
                    "components": "V S",
                    "duration": "Instantaneous",
                    "classes": "Bard, Cleric, Druid, Paladin, Ranger",
                    "description": "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.\r\nWhen you cast this spell using a spell slot of 2nd level or higher, the Healing increases by 1d8 for each slot level above 1st."
                },
                {
                    "name": "False Life",
                    "level": 1,
                    "school": "Necromancy",
                    "casting_time": "1 action",
                    "range": "self",
                    "components": "V S M",
                    "duration": "1 hour",
                    "classes": "Sorceror, Wizard",
                    "description": "Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration.\r\nWhen you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional Temporary Hit Points for each slot level above 1st."
                },
                {
                    "name": "Guidance",
                    "level": 0,
                    "school": "Divination",
                    "casting_time": "1 action",
                    "range": "touch",
                    "components": "V S",
                    "duration": "Concentration, up to 1 minute",
                    "classes": "Cleric, Druid",
                    "description": "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends."
                },
                {
                    "name": "Guiding Bolt",
                    "level": 1,
                    "school": "Evocation",
                    "casting_time": "1 action",
                    "range": "120 feet",
                    "components": "V S",
                    "duration": "1 round",
                    "classes": "Cleric",
                    "description": "A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then.\r\nWhen you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
                },
                {
                    "name": "Guiding Hand",
                    "level": 1,
                    "school": "Divination",
                    "casting_time": "1 minute",
                    "range": "5 feet",
                    "components": "V S",
                    "duration": "Concentration, up to 8 hours",
                    "classes": "Bard, Cleric, Druid",
                    "description": "You create a Tiny incorporeal hand of shimmering light in an unoccupied space you can see within range. The hand exists for the duration, but it disappears if you teleport or you travel to a different plane of existence.\r\nWhen the hand appears, you name one major landmark, such as a city, mountain, castle, or battlefield on the same plane of existence as you. Someone in history must have visited the site and mapped it. If the landmark appears on no map in existence, the spell fails. Otherwise, whenever you move toward the hand, it moves away from you at the same speed you moved, and it moves in the direction of the landmark, always remaining 5 feet away from you.\r\nIf you don’t move toward the hand, it remains in place until you do and beckons for you to follow once every 1d4 minutes."
                },
                {
                    "name": "Healing Word",
                    "level": 1,
                    "school": "Evocation",
                    "casting_time": "1 bonus action",
                    "range": "60 feet",
                    "components": "V",
                    "duration": "Instantaneous",
                    "classes": "Bard, Cleric, Druid",
                    "description": "A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.\r\nWhen you cast this spell using a spell slot of 2nd level or higher, the Healing increases by 1d4 for each slot level above 1st."
                },
                {
                    "name": "Shield of Faith",
                    "level": 1,
                    "school": "Abjuration",
                    "casting_time": "1 bonus action",
                    "range": "60 feet",
                    "components": "V S M",
                    "duration": "Concentration, up to 10 minutes",
                    "classes": "Cleric, Paladin",
                    "description": "A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration."
                },
                {
                    "name": "Spare the Dying",
                    "level": 0,
                    "school": "Necromancy",
                    "casting_time": "1 action",
                    "range": "touch",
                    "components": "V S",
                    "duration": "Instantaneous",
                    "classes": "Cleric",
                    "description": "You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs.\r\n*Stand the Fallen*\r\nRange increases to 30 feet and target gains 1 hit point. Can be used Wisdom modifier number of times, recharges after short or long rest."
                },
                {
                    "name": "Thaumaturgy",
                    "level": 0,
                    "school": "Transmutation",
                    "casting_time": "1 action",
                    "range": "30 feet",
                    "components": "V",
                    "duration": "Up to 1 minute",
                    "classes": "Cleric",
                    "description": "You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range:\r\n- Your voice booms up to three times as loud as normal for 1 minute.\r\n- You cause flames to flicker, brighten, dim, or change color for 1 minute.\r\n- You cause harmless tremors in the ground for 1 minute.\r\n- You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.\r\n- You instantaneously cause an unlocked door or window to fly open or slam shut.\r\n- You alter the appearance of your eyes for 1 minute.\r\nIf you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action."
                }
            ]
        },
        {
            "type": "Other/Item",
            "list": [
                {
                    "name": "Animal Friendship",
                    "level": 1,
                    "school": "Enchantment",
                    "casting_time": "1 action",
                    "range": "30 feet",
                    "components": "V S M",
                    "duration": "24 hours",
                    "classes": "Bard, Druid, Ranger",
                    "description": "This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spells ends.\r\n** SNAKES ONLY **"
                },
                {
                    "name": "Bless (custom)",
                    "level": 1,
                    "school": "Enchantment",
                    "casting_time": "1 action",
                    "range": "self",
                    "components": "Puissant Drumstick",
                    "duration": "1 hour",
                    "classes": "Cleric, Paladin",
                    "description": "Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw."
                },
                {
                    "name": "Blink",
                    "level": 3,
                    "school": "Transmutation",
                    "casting_time": "1 action",
                    "range": "self",
                    "components": "V S",
                    "duration": "1 minute",
                    "classes": "Sorceror, Wizard",
                    "description": "Roll a d20 at the end of each of your turns for the duration of the spell. On a roll of 11 or higher, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell fails and the casting is wasted if you were already on that plane). At the start of your next turn, and when the spell ends if you are on the Ethereal Plane, you return to an unoccupied space of your choice that you can see within 10 feet of the space you vanished from. If no unoccupied space is available within that range, you appear in the nearest unoccupied space (chosen at random if more than one space is equally near). You can dismiss this spell as an action.\r\nWhile on the Ethereal Plane, you can see and hear the plane you originated from, which is cast in shades of gray, and you can’t see anything there more than 60 feet away. You can only affect and be affected by other creatures on the Ethereal Plane. Creatures that aren’t there can’t perceive you or interact with you, unless they have the ability to do so.\r\nEach time the wearer enters the Ethereal, they must roll a 1d20; on a 1-2, the armor attacts the attention of a creature on the Ethereal Plane."
                },
                {
                    "name": "Blur",
                    "level": 2,
                    "school": "Illusion",
                    "casting_time": "1 action",
                    "range": "self",
                    "components": "V",
                    "duration": "Concentration, up to 1 minute",
                    "classes": "Sorceror, Wizard",
                    "description": "Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn't rely on sight, as with blindsight, or can see through illusions, as with truesight."
                },
                {
                    "name": "Flame Shield",
                    "level": 4,
                    "school": "Evocatioin",
                    "casting_time": "1 action",
                    "range": "self",
                    "components": "V S M",
                    "duration": "10 minutes",
                    "classes": "Wizard",
                    "description": "Thin and wispy flames wreathe your body for the duration, shedding bright light in a 10-foot radius and dim light for an additional 10 feet. You can end the spell early by using an action to dismiss it.\r\nThe flames provide you with a warm shield or a chill shield, as you choose. The warm shield grants you resistance to cold damage, and the chill shield grants you resistance to fire damage.\r\nIn addition, whenever a creature within 5 feet of you hits you with a melee attack, the shield erupts with flame. The attacker takes 2d8 fire damage from a warm shield, or 2d8 cold damage from a cold shield."
                },
                {
                    "name": "Locate Creature",
                    "level": 4,
                    "school": "Divination",
                    "casting_time": "1 action",
                    "range": "self",
                    "components": "V S M",
                    "duration": "Concentration, up to 1 hour",
                    "classes": "Bard, Cleric, Druid, Paladin, Ranger, Wizard",
                    "description": "Describe or name a creature that is familiar to you. You sense the direction to the creature's location, as long as that creature is within 1,000 feet of you. If the creature is moving, you know the direction of its movement.\r\nThe spell can locate a specific creature known to you, or the nearest creature of a specific kind (such as a human or a unicorn), so long as you have seen such a creature up close—within 30 feet—at least once. If the creature you described or named is in a different form, such as being under the effects of a polymorph spell, this spell doesn't locate the creature.\r\nThis spell can't locate a creature if running water at least 10 feet wide blocks a direct path between you and the creature."
                },
                {
                    "name": "Poison Spray",
                    "level": 0,
                    "school": "Conjuration",
                    "casting_time": "1 action",
                    "range": "10 feet",
                    "components": "V S",
                    "duration": "Instantaneous",
                    "classes": "Druid, Sorcerer, Warlock, Wizard",
                    "description": "You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage."
                },
                {
                    "name": "Speak With Dead",
                    "level": 3,
                    "school": "Necromancy",
                    "casting_time": "1 action",
                    "range": "10 feet",
                    "components": "V S M",
                    "duration": "10 minutes",
                    "classes": "Bard, Cleric",
                    "description": "You grant the semblance of life and intelligence to a corpse of your choice within range, allowing it to answer the questions you pose. The corpse must still have a mouth and can't be undead. The spell fails if the corpse was the target of this spell within the last 10 days.\r\nUntil the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are hostile to it or it recognizes you as an enemy. This spell doesn't return the creature's soul to its body, only its animating spirit. Thus, the corpse can't learn new information, doesn't comprehend anything that has happened since it died, and can't speculate about future events."
                },
                {
                    "name": "Suggestion",
                    "level": 2,
                    "school": "Enchantment",
                    "casting_time": "1 action",
                    "range": "30 feet",
                    "components": "V M",
                    "duration": "Concentration, up to 8 hours",
                    "classes": "Bard, Sorcerer, Warlock, Wizard",
                    "description": "You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. Creatures that can't be Charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act ends the spell.\r\nThe target must make a Wisdom saving throw. On a failed save, it purses the course of action you described to the best of its ability. The suggested course of action can continue for the entire Duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.\r\nYou can also specify Conditions that will trigger a Special activity during the Duration. For example, you might suggest that a Knight give her Warhorse to the first beggar she meets. If the condition isn't met before the spell expires, the activity isn't preformed.\r\nIf you or any of your companions damage the target, the spell ends."
                }
            ]
        },
    ],
    "random_items": [
        "hot pink & white silk strip (from privateers' tent)",
        "2 daggers",
        "2 decks of elven playing cards",
        "30 drow arrows",
        "drow wine",
        "Cas' fancy cloak (worth 100GP)",
        "King Bear's diplomatic letter to the ancient elves",
        "fancy fashion butt plate",
        "piece of alien crab shell",
        "petrified songbird",
        "colorful giant parrot feather",
        "woven mats (from drow guardian spider's chest)",
        "elven casino dice",
        "2 vials of drow arrow poison",
        "1 crude arrow from reddish purple forest materials",
        "15 proper arrows from reddish purple forest materials",
        "white cleaning powder from elvish library",
        "stationery from elvish library",
        "wood from toby's ship (to make an arrow?)",
        "insect filled fruit from toby's ship's garden",
        "Throne Lord's tobacco"
    ]
};

export default character;
