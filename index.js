import character from './character.js';

(function() {
    'use strict';

    console.log(character);

    const SESSIONFORM = document.getElementById('session-form');

    const SESSIONSTART = document.getElementById('session-start');

    const HP = document.getElementById('hp');
    const HPUP = document.getElementById('hp-up');
    const HPDN = document.getElementById('hp-dn');
    // so we can know the max value
    const HPMAX = character.hp;

    const HITDICE = document.getElementById('hit-dice');
    const HITDICEUP = document.getElementById('hit-dice-up');
    const HITDICEDN = document.getElementById('hit-dice-dn');
    // so we can know the max value
    const HITDICEMAX = character.level;

    const DEATHSAVERADIOS = document.querySelectorAll('.death-save-radio');
    const DEATHSAVESTABLE = document.getElementById('death-saves-table');
    const DEATHSAVESRESET = document.getElementById('death-saves-reset');

    const AC = document.getElementById('ac');
    const PROFICIENCY = document.getElementById('proficiency');
    const INITIATIVE = document.getElementById('initiative');
    const SPELLSAVEDC = document.getElementById('spell-save-dc');
    const SPELLATTACKBONUS = document.getElementById('spell-attack-bonus');

    const GAMETEMPLATE = {
        "id": null,
        "date": new Date(),
        "goal": null,
        "hp_start": character.hp,
        "hp_end": character.hp,
        "hitdice_start": character.level,
        "hitdice_end": character.level,
        "death_saves": [null, null, null],
        "xp_earned": null,
        "spell_slots": [
            {
                "1": {
                    "begin": 4,
                    "end": 4
                },
                "2": {
                    "begin": 2,
                    "end": 2
                }
            }
        ],
        "notes": "",
        "money": {
            "gold": 0,
            "silver": 0,
            "bronze": 0
        },
        "items": [],
        "players": []
    }

    let thisGame;

    // build spell slots check boxes
    function initSpells(character) {

    }

    function initGame(game) {
        console.log('initializing game:');
        console.log(game);

        // set hit points & hit dice
        HP.value = game.hp_end;
        HITDICE.value = game.hitdice_end;

        // set death saves
        for (let i = 1; i < 4; i++) {
            // if a save is logged, render its punk ass
            if (game.death_saves[i - 1] !== null) {
                const THESAVE = document.getElementById(`death-save-${i}-${game.death_saves[i - 1] === true ? 'success' : 'failure'}`);
                THESAVE.checked = true;
            }
        }

        // set spell slots used

        // set money

        // set notes

        // copy template to a new object & save game to localStorage
        thisGame = Object.assign({}, game);

        localStorage.setItem('game', JSON.stringify(thisGame));
    }

    // check localStorage for a game that was started today
    // if it exists, use HP/Hit dice from there
    // otherwise, use defaults from character
    function init(character) {
        var game = localStorage.getItem('game');

        // if we have a game, check the date
        if (game) {
            game = JSON.parse(game);

            // make sure game is from today
            var saveDate = new Date(game.date);
            var today = new Date();

            if (saveDate.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)) {
                console.log('loading saved game!');
                thisGame = game;
            } else {
                console.log('beginning new game');
                thisGame = GAMETEMPLATE;
            }
        } else {
            thisGame = GAMETEMPLATE;
        }

        initGame(thisGame);

        // this stuff isn't saved per game - kind of forward coded for now in
        // anticipation of fully loading a character from JS
        AC.textContent = character.ac;
        PROFICIENCY.textContent = `+${character.proficiency}`;
        INITIATIVE.textContent = `+${character.initiative}`;
        SPELLSAVEDC.textContent = character.spell_save_dc;
        SPELLATTACKBONUS.textContent = `+${character.spell_attack_bonus}`;

        initSpells(character);
    }

    init(character);

    SESSIONSTART.addEventListener('click', () => {

    });

    function updateGame(key, val) {
        if (thisGame.hasOwnProperty(key)) {
            thisGame[key] = val;
            console.log(thisGame);
            localStorage.setItem('game', JSON.stringify(thisGame));
        } else {
            console.log(`No property named ${key}!`);
        }
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

    HPUP.addEventListener('click', () => {
        const NEWHP = parseInt(HP.value, 10) + 1;
        HP.value = NEWHP;

        if (NEWHP > HPMAX) {
            HP.classList.add('juiced');
        } else if (NEWHP > 0) {
            HP.classList.remove('dead');
        }

        updateGame('hp_end', NEWHP);
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

        updateGame('hp_end', NEWHP);
    });

    HITDICEUP.addEventListener('click', () => {
        const NEWHITDICE = increment(parseInt(HITDICE.value, 10), HITDICEMAX);
        HITDICE.value = NEWHITDICE;

        updateGame('hitdice_end', NEWHITDICE);
    });

    HITDICEDN.addEventListener('click', () => {
        const NEWHITDICE = decrement(parseInt(HITDICE.value, 10));
        HITDICE.value = NEWHITDICE;

        updateGame('hitdice_end', NEWHITDICE);
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

            updateGame('death_saves', saves);
        }
    });

    DEATHSAVESRESET.addEventListener('click', () => {
        DEATHSAVERADIOS.forEach(radio => {
            radio.checked = false;
        });
    });

    const TOGGLERS = document.querySelectorAll('a[data-toggler]');
    const TOGGLER_CONTENTS = document.querySelectorAll('.toggle-content');

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

})();
