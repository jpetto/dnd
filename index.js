import character from './character.js';

(function() {
    'use strict';

    const LOCALSTORAGEGAMEKEY = 'game';

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
    const HITDICEMAX = character.level;

    const MONEYINPUTS = document.querySelectorAll('.money');
    const GP = document.getElementById('gp');
    const SP = document.getElementById('sp');
    const BP = document.getElementById('bp');

    const NOTES = document.getElementById('notes');

    const DEATHSAVERADIOS = document.querySelectorAll('.death-save-radio');
    const DEATHSAVESTABLE = document.getElementById('death-saves-table');
    const DEATHSAVESRESET = document.getElementById('death-saves-reset');

    const SPELLSLOTSWRAPPER = document.getElementById('spell-slots-wrapper');

    const AC = document.getElementById('ac');
    const PROFICIENCY = document.getElementById('proficiency');
    const INITIATIVE = document.getElementById('initiative');
    const SPELLSAVEDC = document.getElementById('spell-save-dc');
    const SPELLATTACKBONUS = document.getElementById('spell-attack-bonus');

    // spell details, basically
    const TOGGLERS = document.querySelectorAll('a[data-toggler]');
    const TOGGLER_CONTENTS = document.querySelectorAll('.toggle-content');

    const DEATHSAVESDEFAULT = [null, null, null];

    const GAMETEMPLATE = {
        "id": null,
        "date": new Date(),
        "goal": null,
        "hp_start": character.hp,
        "hp_end": character.hp,
        "hitdice_start": character.level,
        "hitdice_end": character.level,
        "death_saves": DEATHSAVESDEFAULT,
        "xp_earned": null,
        "spell_slots_start": [],
        "spell_slots_end": [],
        "notes": "",
        "gp": 0,
        "sp": 0,
        "bp": 0,
        "items": [],
        "players": []
    }

    // populate spell slots in game template
    for (let i = 0; i < character.spell_slots.length; i++) {
        GAMETEMPLATE.spell_slots_start.push([]);

        for (let j = 0; j < character.spell_slots[i]; j++) {
            // assume all spels are unused at the start - hence 'false'
            GAMETEMPLATE.spell_slots_start[i].push(false);
        }
    }

    // ending spell slots default to all unused
    GAMETEMPLATE.spell_slots_end = GAMETEMPLATE.spell_slots_start;

    let thisGame;

    function initGame(game) {
        // set hit points & hit dice
        HP.value = game.hp_end;
        HITDICE.value = game.hitdice_end;

        if (game.hp_end > game.hp_start) {
            HP.classList.add('juiced');
        }

        // set death saves
        for (let i = 1; i < 4; i++) {
            // if a save is logged, render its punk ass
            if (game.death_saves[i - 1] !== null) {
                const THESAVE = document.getElementById(`death-save-${i}-${game.death_saves[i - 1] === true ? 'success' : 'failure'}`);
                THESAVE.checked = true;
            }
        }

        // set spell slots used
        let spellSlotMarkup = '';

        for (let i = 0; i < game.spell_slots_end.length; i++) {
            spellSlotMarkup += generateSpellSlotMarkup(i + 1, game.spell_slots_end[i]);
        }

        SPELLSLOTSWRAPPER.innerHTML = spellSlotMarkup;

        // set money
        GP.value = game.gp;
        SP.value = game.sp;
        BP.value = game.bp;

        // set notes
        NOTES.value = game.notes;

        // copy template to a new object & save game to localStorage
        thisGame = Object.assign({}, game);

        localStorage.setItem(LOCALSTORAGEGAMEKEY, JSON.stringify(thisGame));
    }

    // Check localStorage for a game that was started today.
    // If it exists, use data stored there.
    // Otherwise, use defaults from character.js.
    function init(character, basegame) {
        let game = localStorage.getItem('game');

        // if we have a game, check the date
        if (game) {
            game = JSON.parse(game);

            // make sure game is from today
            var saveDate = new Date(game.date);
            var today = new Date();

            // if game is not from today, start a new game
            if (saveDate.setHours(0, 0, 0, 0) !== today.setHours(0, 0, 0, 0)) {
                // TODO: save old game in localStorage to server?
                game = basegame;
            }
        // if no game is found in localStorage, start a new game
        } else {
            game = basegame;
        }

        // populate character specific values (not stored in/per game)
        CHARACTERNAME.textContent = character.name;
        CHARACTERRACE.textContent = character.race;
        CHARACTERCLASSLEVEL.textContent = `${character.class} / ${character.level}`;
        CHARACTERXP.textContent = `${character.experience} / ${character.experience_next}`;
        AC.textContent = character.ac;
        PROFICIENCY.textContent = `+${character.proficiency}`;
        INITIATIVE.textContent = `+${character.initiative}`;
        SPELLSAVEDC.textContent = character.spell_save_dc;
        SPELLATTACKBONUS.textContent = `+${character.spell_attack_bonus}`;

        return game;
    }

    // game object interaction
    function saveGame(game) {
        localStorage.setItem(LOCALSTORAGEGAMEKEY, JSON.stringify(game));

        // TODO: hit external API
    }

    function updateGame(game, key, val) {
        if (game.hasOwnProperty(key)) {
            game[key] = val;

            saveGame(game);
        } else {
            console.log(`No property named ${key}!`);
        }
    }

    function updateGameSpellSlot(game, level, slot, value) {
        game.spell_slots_end[level - 1][slot - 1] = value;

        saveGame(game);
    }

    // helpers
    function generateSpellSlotMarkup(level, slots) {
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
    }

    function increment(current, max) {
        if (current + 1 <= max) {
            return current + 1;
        } else {
            return current;
        }
    }

    function decrement(current) {
        if (current > 0) {
            return current - 1;
        } else {
            return 0;
        }
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

        updateGame(thisGame, 'hp_end', NEWHP);
    });

    HPDN.addEventListener('click', () => {
        const NEWHP = decrement(parseInt(HP.value, 10));
        HP.value = NEWHP;

        if (NEWHP <= HPMAX) {
            HP.classList.remove('juiced');

            if (NEWHP === 0) {
                HP.classList.add('dead');
            }
        }

        updateGame(thisGame, 'hp_end', NEWHP);
    });

    HITDICEUP.addEventListener('click', () => {
        const NEWHITDICE = increment(parseInt(HITDICE.value, 10), HITDICEMAX);
        HITDICE.value = NEWHITDICE;

        updateGame(thisGame, 'hitdice_end', NEWHITDICE);
    });

    HITDICEDN.addEventListener('click', () => {
        const NEWHITDICE = decrement(parseInt(HITDICE.value, 10));
        HITDICE.value = NEWHITDICE;

        updateGame(thisGame, 'hitdice_end', NEWHITDICE);
    });

    DEATHSAVESTABLE.addEventListener('click', e => {
        if (e.target.classList.contains('death-save-radio')) {
            const SAVENUMBER = parseInt(e.target.dataset.deathSaveNumber, 10);
            const SUCCESS = (e.target.id.indexOf('success') >= 0) ? true : false;

            let saves = thisGame.death_saves;

            // make sure each save has some value - even if it's null
            for (let i = 1; i < 4; i++) {
                if (SAVENUMBER === i) {
                    saves[i - 1] = SUCCESS;
                } else {
                    saves[i - 1] = (saves[i - 1] !== null) ? saves[i - 1] : null;
                }
            }

            updateGame(thisGame, 'death_saves', saves);
        }
    });

    DEATHSAVESRESET.addEventListener('click', () => {
        DEATHSAVERADIOS.forEach(radio => {
            radio.checked = false;
        });

        updateGame(thisGame, 'death_saves', DEATHSAVESDEFAULT);
    });

    SPELLSLOTSWRAPPER.addEventListener('click', e => {
        if (e.target.classList.contains('spell-slot-checkbox')) {
            const LEVEL = e.target.dataset.level;
            const SLOT = e.target.dataset.slot;
            updateGameSpellSlot(thisGame, LEVEL, SLOT, e.target.checked);
        }
    });

    MONEYINPUTS.forEach(input => {
        input.addEventListener('change', () => {
            updateGame(thisGame, input.id, parseInt(input.value, 10));
        });
    });

    NOTES.addEventListener('change', () => {
        updateGame(thisGame, 'notes', NOTES.value);
    });

    TOGGLERS.forEach(element => {
        element.setAttribute('role', 'button');
        element.addEventListener('click', e => {
            e.preventDefault();

            const TARGET = document.getElementById(element.dataset.toggler);
            TARGET.classList.toggle('hidden');
        });
    });

    TOGGLER_CONTENTS.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.add('hidden');
        })
    });

    // get a game object
    thisGame = init(character, GAMETEMPLATE);

    // initialize the game
    initGame(thisGame);
})();
