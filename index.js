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
        const NEWHP = increment(parseInt(HP.value, 10), HPMAX);
        HP.value = NEWHP;
    });

    HPDN.addEventListener('click', () => {
        const NEWHP = decrement(parseInt(HP.value, 10));
        HP.value = NEWHP;
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
})();