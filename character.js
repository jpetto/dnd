const character = {
    "name": "Caturra Maitu",
    "class": "Ranger",
    "race": "Wood Elf",
    "level": 7,
    "experience": 23000,
    "experience_next": 34000,
    "hp": 39,
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
    spells: [
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
            "name": "Spike Growth",
            "level": 2,
            "school": "Transmutation",
            "casting_time": "1 action",
            "range": "150 feet",
            "components": "V S M",
            "duration": "Concentration, up to 10 minutes",
            "classes": "Druid, Ranger",
            "description": "The ground in a 20-foot radius centered on a point within range twists and sprouts hard spikes and thorns. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels.\r\n    The transformation of the ground is camouflaged to look natural. Any creature that can’t see the area at the time the spell is cast must make a Wisdom (Perception) check against your spell save DC to recognize the terrain as hazardous before entering it."
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
    ],
    "random_items": [
        "hot pink & white silk strip (from privateers' tent)",
        "2 daggers",
        "elven playing cards",
        "30 drow arrows",
        "drow wine",
        "Cas' fancy cloak (worth 100GP)",
        "King Bear's letter to the ancient elves",
        "fancy fashion butt plate",
        "piece of alien crab shell",
        "dried fish",
        "dried meat",
        "petrified songbird",
        "beetle goo",
        "colorful giant parrot feather",
        "woven mats (from drow guardian spider's chest)",
    ]
};

export default character;
