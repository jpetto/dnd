import CONFIG from './constants.js';
import Game from './game.js';
import Utils from './utils.js';
import character from './character.js';

(function() {
    'use strict';

    const CHARACTERNAME = document.getElementById('character-name');
    const CHARACTERRACE = document.getElementById('character-race');
    const CHARACTERCLASSLEVEL = document.getElementById('character-class-level');
    const CHARACTERXP = document.getElementById('character-xp');

    const HP = document.getElementById('hp');
    const HPUP = document.getElementById('hp-up');
    const HPDN = document.getElementById('hp-dn');
    const HPMAX = character.hp;

    const HITDICE = document.getElementById('hit-dice');
    const HITDICEUP = document.getElementById('hit-dice-up');
    const HITDICEDN = document.getElementById('hit-dice-dn');

    const ABILITYSCORELIST = document.getElementById('ability-score-list');
    const SKILLLIST = document.getElementById('skill-list');

    const MONEYINPUTS = document.querySelectorAll('.money');
    const PP = document.getElementById('pp');
    const GP = document.getElementById('gp');
    const SP = document.getElementById('sp');
    const BP = document.getElementById('bp');

    const NOTES = document.getElementById('notes');

    const DEATHSAVERADIOS = document.querySelectorAll('.death-save-radio');
    const DEATHSAVESTABLE = document.getElementById('death-saves-table');
    const DEATHSAVESRESET = document.getElementById('death-saves-reset');

    const SPELLSLOTSWRAPPER = document.getElementById('spell-slots-wrapper');
    const SPELLSWRAPPER = document.getElementById('spells-wrapper');

    const AC = document.getElementById('ac');
    const PROFICIENCY = document.getElementById('proficiency');
    const INITIATIVE = document.getElementById('initiative');
    const SPELLSAVEDC = document.getElementById('spell-save-dc');
    const SPELLATTACKBONUS = document.getElementById('spell-attack-bonus');

    const RANDOMITEMS = document.getElementById('random-items');

    // spell details, basically
    let Togglers;
    let TogglerContents;

    /**
     * Generic, but basically just means spell description togglers.
     */
    function initTogglers() {
        Togglers = document.querySelectorAll('a[data-toggler]');
        TogglerContents = document.querySelectorAll('.toggle-content');

        Togglers.forEach(element => {
            element.setAttribute('role', 'button');
            element.addEventListener('click', e => {
                e.preventDefault();

                const TARGET = document.getElementById(element.dataset.toggler);
                TARGET.classList.toggle('hidden');
            });
        });

        TogglerContents.forEach(element => {
            element.addEventListener('click', () => {
                element.classList.add('hidden');
            })
        });
    }

    /**
     * Populates all DOM elements based on the provided session and character
     *
     * @param {Object} session - data generated from Game.init
     * @param {Object} character - character data from character.js
     */
    function hydrateSession(session, character) {
        // calculate spell save DC and attack modifier

        // gets the ability of the character's spell modifier ability, e.g. INT, WIS
        let spellModAbility = character.abilities.filter(a => a.abbr === character.spell_modifier)[0];
        // calclulate the modifier
        let spellMod = Utils.calculateAbilityModifier(spellModAbility.value)
        let spellSaveDc = 8 + spellMod + character.proficiency;
        let spellAttackBonus = spellMod + character.proficiency;

        // spells
        let spellMarkup = '';
        let spellTypeMarkup;

        for (let i = 0; i < character.spells.length; i++) {
            for (let j = 0; j < character.spells[i].list.length; j++) {
                spellMarkup += Utils.generateSpellMarkup(character.spells[i].list[j], `${i}-${j}`);
            }

            spellTypeMarkup = Utils.generateSpellTypeMarkup(character.spells[i].type, spellMarkup);

            SPELLSWRAPPER.innerHTML += spellTypeMarkup;

            spellMarkup = '';
        }

        CHARACTERNAME.textContent = character.name;
        CHARACTERRACE.textContent = character.race;
        CHARACTERXP.textContent = `${character.experience} / ${character.experience_next}`;
        CHARACTERCLASSLEVEL.textContent = session.class;
        AC.textContent = character.ac;
        PROFICIENCY.textContent = `+${character.proficiency}`;
        INITIATIVE.textContent = `+${character.initiative}`;
        SPELLSAVEDC.textContent = spellSaveDc;
        SPELLATTACKBONUS.textContent = `+${spellAttackBonus}`;

        // ability scores
        ABILITYSCORELIST.innerHTML = Utils.generateAbilityScoresMarkup(CONFIG.abilities, character.abilities, character.proficiency);

        // skills
        SKILLLIST.innerHTML = Utils.generateSkillsMarkup(CONFIG.skills, character);

        RANDOMITEMS.innerHTML = character.random_items.map(item => `<li class="random-item">${item}</li>`).join('');

        // set up spell description togglers
        initTogglers();

        // set hit points & hit dice
        HP.value = session.hp_end;
        HITDICE.value = session.hitdice_end;

        // update UI of HP box if character has temp hit points
        if (session.hp_end > session.hp_start) {
            HP.classList.add('juiced');
        }

        // set death saves
        for (let i = 1; i < 4; i++) {
            // if a save is logged, render its punk ass
            if (session.death_saves[i - 1] !== null) {
                const THESAVE = document.getElementById(`death-save-${i}-${session.death_saves[i - 1] === true ? 'success' : 'failure'}`);
                THESAVE.checked = true;
            }
        }

        // set spell slots used
        let spellSlotMarkup = '';

        for (let i = 0; i < session.spell_slots_end.length; i++) {
            spellSlotMarkup += Utils.generateSpellSlotMarkup(i + 1, session.spell_slots_end[i]);
        }

        SPELLSLOTSWRAPPER.innerHTML = spellSlotMarkup;

        // set money
        PP.value = session.pp;
        GP.value = session.gp;
        SP.value = session.sp;
        BP.value = session.bp;

        // set notes
        NOTES.value = session.notes;
    }

    // DOM interactivity
    HPUP.addEventListener('click', () => {
        const NEWHP = parseInt(HP.value, 10) + 1;
        HP.value = NEWHP;

        if (NEWHP > HPMAX) {
            HP.classList.add('juiced');
        } else if (NEWHP > 0) {
            HP.classList.remove('dead');
        }

        Game.update(Game.currentSession, 'hp_end', NEWHP);
    });

    HPDN.addEventListener('click', () => {
        const NEWHP = Utils.decrement(parseInt(HP.value, 10));
        HP.value = NEWHP;

        if (NEWHP <= HPMAX) {
            HP.classList.remove('juiced');

            if (NEWHP === 0) {
                HP.classList.add('dead');
            }
        }

        Game.update(Game.currentSession, 'hp_end', NEWHP);
    });

    HITDICEUP.addEventListener('click', () => {
        const NEWHITDICE = Utils.increment(parseInt(HITDICE.value, 10), Game.currentSession.level);
        HITDICE.value = NEWHITDICE;

        Game.update(Game.currentSession, 'hitdice_end', NEWHITDICE);
    });

    HITDICEDN.addEventListener('click', () => {
        const NEWHITDICE = Utils.decrement(parseInt(HITDICE.value, 10));
        HITDICE.value = NEWHITDICE;

        Game.update(Game.currentSession, 'hitdice_end', NEWHITDICE);
    });

    DEATHSAVESTABLE.addEventListener('click', e => {
        if (e.target.classList.contains('death-save-radio')) {
            const SAVENUMBER = parseInt(e.target.dataset.deathSaveNumber, 10);
            const SUCCESS = (e.target.id.indexOf('success') >= 0) ? true : false;

            let saves = Game.currentSession.death_saves;

            // make sure each save has some value - even if it's null
            for (let i = 1; i < 4; i++) {
                if (SAVENUMBER === i) {
                    saves[i - 1] = SUCCESS;
                } else {
                    saves[i - 1] = (saves[i - 1] !== null) ? saves[i - 1] : null;
                }
            }

            Game.update(Game.currentSession, 'death_saves', saves);
        }
    });

    DEATHSAVESRESET.addEventListener('click', () => {
        DEATHSAVERADIOS.forEach(radio => {
            radio.checked = false;
        });

        Game.update(Game.currentSession, 'death_saves', CONFIG.deathSavesDefault);
    });

    SPELLSLOTSWRAPPER.addEventListener('click', e => {
        if (e.target.classList.contains('spell-slot-checkbox')) {
            const LEVEL = e.target.dataset.level;
            const SLOT = e.target.dataset.slot;
            Game.updateSpellSlot(Game.currentSession, LEVEL, SLOT, e.target.checked);
        }
    });

    MONEYINPUTS.forEach(input => {
        input.addEventListener('change', () => {
            Game.update(Game.currentSession, input.id, parseInt(input.value, 10));
        });
    });

    NOTES.addEventListener('change', () => {
        Game.update(Game.currentSession, 'notes', NOTES.value);
    });

    // get a game object (either new or saved in localStorage)
    Game.init(character);

    // populate the DOM
    hydrateSession(Game.currentSession, character);

    const DEBUG = document.getElementById('debug');
    const PRINTDEBUG = document.getElementById('print-debug');
    const PRINTDEBUGPREVIOUS = document.getElementById('print-debug-previous');

    PRINTDEBUG.addEventListener('click', () => {
        DEBUG.value = JSON.stringify(Game.currentSession);
    });

    PRINTDEBUGPREVIOUS.addEventListener('click', () => {
        DEBUG.value = JSON.stringify(Game.previousSession);
    });
})();
