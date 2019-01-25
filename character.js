const character = {
    "name": "Caturra Maitu",
    "classes": [
        {
            "type": "Ranger",
            "level": 7
        },
        {
            "type": "Cleric",
            "level": 1
        }
    ],
    "race": "Wood Elf",
    "experience": 34000,
    "experience_next": 48000,
    "hp": 43,
    "spell_slots": [4, 3],
    "spell_save_dc": 14,
    "spell_attack_bonus": 6,
    "ac": 17,
    "initiative": 4,
    "proficiency": 3,
    "attacks": [
        {
            "name": "Deadeye Arcus",
            "bonus": 10,
            "damage": "1d8+5",
            "type": "piercing"
        },
        {
            "name": "Old Jack's Scimitar",
            "bonus": 8,
            "damage": "1d6+5",
            "type": "slashing"
        },
        {
            "name": "Short Sword",
            "bonus": 7,
            "damage": "1d6+4",
            "type": "piercing"
        }
    ],
    cantrips: [
        {

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
                    "name": "Ensnaring Strike",
                    "level": 1,
                    "school": "Conjuration",
                    "casting_time": "1 action (bonus action)",
                    "range": "self",
                    "components": "V",
                    "duration": "Concentration, up to 1 minute",
                    "classes": "Ranger",
                    "description": "The next time you hit a creature with a weapon attack before this spell ends, a writhing mass of thorny vines appears at the point of impact, and the target must succeed on a Strength saving throw or be restrained by the magical vines until the spell ends. A Large or larger creature has advantage on this saving throw. If the target succeeds on the save, the vines shrivel away.\r\nWhile restrained by this spell, the target takes 1d6 piercing damage at the start of each of its turns. A creature restrained by the vines or one that can touch the creature can use its action to make a Strength check against your spell save DC. On a success, the target is freed.\r\nIf you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
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
                    "name": "Bless",
                    "level": 1,
                    "school": "Enchantment",
                    "casting_time": "1 action",
                    "range": "30 feet",
                    "components": "V S M",
                    "duration": "Concentration, up to 1 minute",
                    "classes": "Cleric, Paladin",
                    "description": "You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll 1d4 and add the number rolled to the attack roll or saving throw.\r\nWhen you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
                },
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
                    "description": "You manifest a minor wonder, a sign of supernatural power, within range.You create one of the following magical effects within range:\r\n- Your voice booms up to three times as loud as normal for 1 minute.\r\n- You cause flames to flicker, brighten, dim, or change color for 1 minute.\r\n- You cause harmless tremors in the ground for 1 minute.\r\n- You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.\r\n- You instantaneously cause an unlocked door or win- dow to fly open or slam shut.\r\n- You alter the appearance of your eyes for 1 minute.\r\nIf you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action."
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
                    "name": "Silence",
                    "level": 2,
                    "school": "Illusion",
                    "casting_time": "1 action",
                    "range": "120 feet",
                    "components": "V S",
                    "duration": "Concentration, up to 10 minutes",
                    "classes": "Bard, Cleric, Ranger",
                    "description": "For the duration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. Casting a spell that includes a verbal component is impossible there."
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
        "King Bear's letter to the ancient elves (currently on the ghost elf ship)",
        "fancy fashion butt plate",
        "piece of alien crab shell",
        "dried meat",
        "petrified songbird",
        "beetle goo",
        "colorful giant parrot feather",
        "woven mats (from drow guardian spider's chest)",
        "elven casino dice",
        "2 vials of drow arrow poison"
    ]
};

export default character;
