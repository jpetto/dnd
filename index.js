(function() {
    'use strict';

    const SESSIONFORM = document.getElementById('session-form');

    const HP = document.getElementById('hp');
    const HPUP = document.getElementById('hp-up');
    const HPDN = document.getElementById('hp-dn');
    // so we can know the max value
    const HPMAX = parseInt(HP.value, 10);

    const HITDICE = document.getElementById('hit-dice');
    const HITDICEUP = document.getElementById('hit-dice-up');
    const HITDICEDN = document.getElementById('hit-dice-dn');
    // so we can know the max value
    const HITDICEMAX = parseInt(HITDICE.value, 10);

    const DEATHSAVERADIOS = document.querySelectorAll('.death-save-radio');
    const DEATHSAVESRESET = document.getElementById('death-saves-reset');

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
    });

    HITDICEUP.addEventListener('click', () => {
        const NEWHITDICE = increment(parseInt(HITDICE.value, 10), HITDICEMAX);

        HITDICE.value = NEWHITDICE;
    });

    HITDICEDN.addEventListener('click', () => {
        const NEWHITDICE = decrement(parseInt(HITDICE.value, 10));
        HITDICE.value = NEWHITDICE;
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

    TOGGLER_CONTENTS.forEach( element => {
        element.addEventListener('click', () => {
            element.classList.add('hidden');
        })
    })

})();
