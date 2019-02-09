import CONFIG from './constants.js';

const Game = {
    currentSession: {},
    previousSession: {}
};

Game.baseTemplate = {
    "id": null,
    "date": new Date(),
    "goal": null,
    "level": 0,
    "class": null,
    "hp_start": 0,
    "hp_end": 0,
    "hitdice_start": 0,
    "hitdice_end": 0,
    "death_saves": CONFIG.deathSavesDefault,
    "xp_earned": null,
    "spell_slots_start": [],
    "spell_slots_end": [],
    "notes": "",
    "pp": 0,
    "gp": 0,
    "sp": 0,
    "bp": 0,
    "items": []
};

Game.init = character => {
    let existingSession = localStorage.getItem(CONFIG.localStorageKeySession);
    let session;

    // if a session was found in localStorage, check the date
    if (existingSession) {
        session = JSON.parse(existingSession);

        // make sure game is from today
        var saveDate = new Date(session.date);
        var today = new Date();

        // if game is not from today, save old game and start a new one
        if (saveDate.setHours(0, 0, 0, 0) !== today.setHours(0, 0, 0, 0)) {
            // save previous game in case we want to export it
            // TODO: send this to an API for long-term storage
            localStorage.setItem(CONFIG.localStorageKeyPreviousSession, JSON.stringify(session));

            // store previous session for easy debug access
            Game.previousSession = session;

            // start a new game
            session = Game.new(Game.baseTemplate, character);
        }
    // if no session is found in localStorage, start a new game
    } else {
        session = Game.new(Game.baseTemplate, character);
    }

    Game.currentSession = session;
};

Game.new = (baseTemplate, character) => {
    let level = 0;
    let classLevelBuilder = [];
    let i;
    let j;
    let session = Object.assign({}, baseTemplate);

    session.hp_start = session.hp_end = character.hp;

    // populate spell slots in session session
    for (i = 0; i < character.spell_slots.length; i++) {
        session.spell_slots_start.push([]);

        for (j = 0; j < character.spell_slots[i]; j++) {
            // assume all spels are unused at the start - hence 'false'
            session.spell_slots_start[i].push(false);
        }
    }

    // ending spell slots default to all unused
    session.spell_slots_end = session.spell_slots_start;

    for (i = 0; i < character.classes.length; i++) {
        level += character.classes[i].level;
        classLevelBuilder.push(`${character.classes[i].type} ${character.classes[i].level}`);
    }

    session.class = classLevelBuilder.join(' / ');

    session.hitdice_start = session.hitdice_end = session.level = level;

    Game.save(session);

    return session;
};

Game.update = (session, key, val) => {
    if (session.hasOwnProperty(key)) {
        session[key] = val;

        Game.save(session);
    } else {
        console.log(`No property named ${key}!`);
    }
};

Game.updateSpellSlot = (session, level, slot, value) => {
    session.spell_slots_end[level - 1][slot - 1] = value;

    Game.save(session);
};

Game.save = session => {
    localStorage.setItem(CONFIG.localStorageKeySession, JSON.stringify(session));

    // TODO: hit external API
};

Game.clear = () => {
    localStorage.removeItem(CONFIG.localStorageKeySession);
};

Game.load = sessionJson => {
    // parse JSON and set date to today
    const json = JSON.parse(sessionJson);
    json.date = new Date();

    Game.currentSession = json;

    Game.save(Game.currentSession);
}

export default Game;
