const Utils = {};

Utils.increment = function(current, max) {
    if (current + 1 <= max) {
        return current + 1;
    } else {
        return current;
    }
};

Utils.decrement = function(current) {
    if (current > 0) {
        return current - 1;
    } else {
        return 0;
    }
}

Utils.calculateAbilityModifier = function(val) {
    let mod;

    if (val >= 30) {
        mod = 10;
    } else if (val >= 28) {
        mod = 9;
    } else if (val >= 26) {
        mod = 8;
    } else if (val >= 24) {
        mod = 7;
    } else if (val >= 22) {
        mod = 6;
    } else if (val >= 20) {
        mod = 5;
    } else if (val >= 18) {
        mod = 4;
    } else if (val >= 16) {
        mod = 3;
    } else if (val >= 14) {
        mod = 2;
    } else if (val >= 12) {
        mod = 1;
    } else if (val >= 10) {
        mod = 0;
    } else if (val >= 8) {
        mod = -1;
    } else if (val >= 6) {
        mod = -2;
    } else if (val >= 4) {
        mod = -3;
    } else if (val >= 2) {
        mod = -4;
    } else {
        mod = -5;
    }

    return mod;
};

Utils.generateAttackMarkup = function(name, bonus, damage, type) {
    return `
        <tr>
            <td>${name}</td>
            <td>+${bonus}</td>
            <td>${damage}/${type}</td>
          </tr>
    `;
}

Utils.generateSkillMarkup = function(skill, ability_abbr, modifier, proficient, proficiency, proficiency_factor) {
    let proficient_class = 'value';

    if (proficient) {
        proficient_class += ' proficient';

        if (proficiency_factor > 1) {
            // TODO: improve this class name to handle factors of proficiency > 2? maybe?
            proficient_class += ' doubled';
        }
    }

    let final_modifier = proficient ? modifier + (proficiency * proficiency_factor) : modifier;

    return `
            <li class="skills-list-item">
                <span class="label">
                    <span class="text-wrapper">${skill} (${ability_abbr})</span>
                </span>
                <span class="${proficient_class}">
                    <span class="text-wrapper">${final_modifier > 0 ? '+' : ''}${final_modifier}</span>
                </span>
            </li>
        `;
};

Utils.generateSkillsMarkup = function(skills, character) {
    let ability_val;
    let markup = ``;
    let modifier;
    let proficient;
    let proficiency_factor;

    skills.forEach(skill => {
        ability_val = character.abilities.filter(a => a.abbr === skill.ability)[0].value;
        modifier = Utils.calculateAbilityModifier(ability_val);

        // this is ugly
        if (character.skill_proficiencies.hasOwnProperty(skill.name.toLowerCase())) {
            proficient = true;

            // also ugly
            if (character.skill_proficiencies[skill.name.toLowerCase()].hasOwnProperty('factor')) {
                proficiency_factor = character.skill_proficiencies[skill.name.toLowerCase()].factor;
            } else {
                proficiency_factor = 1;
            }
        } else {
            proficient = false;
            proficiency_factor = 1;
        }

        markup += Utils.generateSkillMarkup(skill.name, skill.ability, modifier, proficient, character.proficiency, proficiency_factor);
    });

    return markup;
};

Utils.generateAbilityScoreMarkup = function(ability, value, modifier, proficiency, proficient) {
    let markup = `
            <li class="ability-score-list-item">
                <span class="label">
                    <span class="text-wrapper">${ability}</span>
                </span>
                <span class="value">${value}</span>
                <span class="modifier">
                    <span class="text-wrapper">${modifier > 0 ? `+` : ''}${modifier}</span>
                    ${proficient ? `<span class="text-wrapper text-wrapper-alt">+${modifier + proficiency}</span>` : ''}
                </span>
            </li>
        `;

    return markup;
};

Utils.generateAbilityScoresMarkup = function(ability_scores, character_abilities, character_proficiency) {
    let ability;
    let abbr;
    let character_ability;
    let markup = ``;
    let modifier;
    let proficient;
    let value;

    for (let i = 0; i < ability_scores.length; i++) {
        abbr = ability_scores[i].abbr;

        character_ability = character_abilities.filter(a => a.abbr === abbr)[0];

        ability = ability_scores[i].name;
        value = character_ability.value;
        modifier = Utils.calculateAbilityModifier(value);

        proficient = character_ability.hasOwnProperty('proficient') ? true : false;

        markup += Utils.generateAbilityScoreMarkup(ability, value, modifier, character_proficiency, proficient);
    }

    return markup;
};

Utils.generateSpellSlotMarkup = function(level, slots) {
    let markup = `
            <section class="spell-slots">
                <span class="label">Level ${level}</span>

                <ol class="spell-slot-list">
                    ${slots.map((slot, index) => `
                        <li class="spell-slot">
                            <input type="checkbox"
                                   class="spell-slot-checkbox"
                                   data-level="${level}"
                                   data-slot="${index + 1}"
                                   name="spell-slot-level-${level}-${index + 1}"
                                   id="spell-slot-level-${level}-${index + 1}"
                                   ${slot ? ' checked' : ''} />
                        </li>
                    `).join('')}
                </ol>
            </section>
        `;

    return markup;
};

Utils.generateSpellTypeMarkup = function(type, spellMarkup) {
    let markup = `
            <section class="spell-type-wrapper" id="spell-type-${type}">
                <span class="label">${type}</span>
                <ul class="spell-list">${spellMarkup}</ul>
            </section>
        `;

    return markup;
};

Utils.generateSpellMarkup = function(spell, index) {
    let markup = `
        <li>
            <a href="" data-toggler="toggle-spell-${index}">${spell.name}</a> (lvl ${spell.level})

            <article class="hidden toggle-content spell-description" id="toggle-spell-${index}">
                <em class="em">${spell.school} / ${spell.level}</em>

                <dl>
                    <dt>Casting Time</dt>
                    <dd>${spell.casting_time}</dd>

                    <dt>Range</dt>
                    <dd>${spell.range}</dd>

                    <dt>Components</dt>
                    <dd>${spell.components}</dd>

                    <dt>Duration</dt>
                    <dd>${spell.duration}</dd>

                    <dt>Classes</dt>
                    <dd>${spell.classes}</dd>
                </dl>

                <p>
                    ${spell.description.replace(/\r\n/g, '</p><p>')}
                </p>
            </article>
        </li>`;

    return markup;
};

/**
 * This needs to return an object containing the character total level (integer) and
 * the string representation of the character's classes, e.g. 'Bard 4 / Ranger 2'
 */
Utils.generateCharacterClassLevelText = function(classes) {

};

export default Utils;
