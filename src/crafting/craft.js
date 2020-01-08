const speakingAs = "Crafting Droid";

const Template = {
    Weapon: {
        FIST: 0,
        BLUNT: 1,
        SHIELD: 2,
        BLADED: 3,
        VIBRO: 4,
        POWERED: 5,
        SIMPLE: 6,
        SOLID_PISTOL: 7,
        SOLID_RIFLE: 8,
        ENERGY_PISTOL: 9,
        ENERGY_RIFLE: 10,
        HEAVY_RIFLE: 11,
        LAUNCHER: 12,
        MISSILE: 13,
        GRENADE: 14,
        MINE: 15
    }
};

const Weapon = {
    [Template.Weapon.FIST]: {
        critical: 4,
        damage: "+1",
        difficulty: 2,
        encumbrance: 1,
        hands: "One-handed",
        hardpoints: 0,
        isRestricted: false,
        price: 10,
        range: "Engaged",
        rarity: 0,
        skills: ["Mechanics", "Survival"],
        special: "Disorient 3",
        time: "4 hours",
        type: "Brawl"
    },
    [Template.Weapon.BLUNT]: {
        critical: 5,
        damage: "+2",
        difficulty: 1,
        encumbrance: 3,
        hands: "One-handed",
        hardpoints: 0,
        isRestricted: false,
        price: 5,
        range: "Engaged",
        rarity: 0,
        skills: ["Mechanics", "Survival"],
        special: "Disorient 2",
        time: "6 hours",
        type: "Melee"
    },
    [Template.Weapon.SHIELD]: {
        critical: 5,
        damage: "+0",
        difficulty: 2,
        encumbrance: 1,
        hands: "One-handed",
        hardpoints: 0,
        isRestricted: false,
        price: 10,
        range: "Engaged",
        rarity: 0,
        skills: ["Mechanics", "Survival"],
        special: "Defensive 1",
        time: "8 hours",
        type: "Melee"
    },
    [Template.Weapon.BLADED]: {
        critical: 3,
        damage: "+1",
        difficulty: 2,
        encumbrance: 2,
        hands: "One-handed",
        hardpoints: 0,
        isRestricted: false,
        price: 10,
        range: "Engaged",
        rarity: 0,
        skills: ["Mechanics", "Survival"],
        special: "",
        time: "16 hours",
        type: "Melee"
    },
    [Template.Weapon.VIBRO]: {
        critical: 2,
        damage: "+1",
        difficulty: 3,
        encumbrance: 2,
        hands: "One-handed",
        hardpoints: 0,
        isRestricted: false,
        price: 200,
        range: "Engaged",
        rarity: 3,
        skills: ["Mechanics"],
        special: "Pierce 2; Vicious 1",
        time: "24 hours",
        type: "Melee"
    },
    [Template.Weapon.POWERED]: {
        critical: 3,
        damage: "+2",
        difficulty: 4,
        encumbrance: 3,
        hands: "One-handed",
        hardpoints: 0,
        isRestricted: false,
        price: 400,
        range: "Engaged",
        rarity: 4,
        skills: ["Mechanics"],
        special: "Stun 3",
        time: "48 hours",
        type: "Melee"
    },
    [Template.Weapon.SIMPLE]: {
        critical: 5,
        damage: 4,
        difficulty: 2,
        encumbrance: 3,
        hands: "One-handed",
        hardpoints: 0,
        isRestricted: false,
        price: 10,
        range: "Short",
        rarity: 0,
        skills: ["Mechanics", "Survival"],
        special: "Limited Ammo 1",
        time: "4 hours",
        type: "Ranged (Light)"
    },
    [Template.Weapon.SOLID_PISTOL]: {
        critical: 5,
        damage: 4,
        difficulty: 2,
        encumbrance: 1,
        hands: "One-handed",
        hardpoints: 0,
        isRestricted: false,
        price: 50,
        range: "Short",
        rarity: 2,
        skills: ["Mechanics"],
        special: "",
        time: "8 hours",
        type: "Ranged (Light)"
    },
    [Template.Weapon.SOLID_RIFLE]: {
        critical: 5,
        damage: 7,
        difficulty: 3,
        encumbrance: 5,
        hands: "One-handed",
        hardpoints: 1,
        isRestricted: false,
        price: 125,
        range: "Medium",
        rarity: 2,
        skills: ["Mechanics"],
        special: "Cumbersome 2",
        time: "8 hours",
        type: "Ranged (Heavy)"
    },
    [Template.Weapon.ENERGY_PISTOL]: {
        critical: 3,
        damage: 6,
        difficulty: 3,
        encumbrance: 1,
        hands: "One-handed",
        hardpoints: 3,
        isRestricted: false,
        price: 200,
        range: "Medium",
        rarity: 3,
        skills: ["Mechanics"],
        special: "",
        time: "12 hours",
        type: "Ranged (Light)"
    },
    [Template.Weapon.ENERGY_RIFLE]: {
        critical: 3,
        damage: 9,
        difficulty: 3,
        encumbrance: 4,
        hands: "One-handed",
        hardpoints: 4,
        isRestricted: false,
        price: 450,
        range: "Long",
        rarity: 4,
        skills: ["Mechanics"],
        special: "",
        time: "16 hours",
        type: "Ranged (Heavy)"
    },
    [Template.Weapon.HEAVY_RIFLE]: {
        critical: 3,
        damage: 10,
        difficulty: 4,
        encumbrance: 6,
        hands: "One-handed",
        hardpoints: 4,
        isRestricted: true,
        price: 1000,
        range: "Long",
        rarity: 6,
        skills: ["Mechanics"],
        special: "Cumbersome 3",
        time: "24 hours",
        type: "Gunnery"
    },
    [Template.Weapon.LAUNCHER]: {
        critical: 0,
        damage: 0,
        difficulty: 4,
        encumbrance: "",
        hands: "One-handed",
        hardpoints: "",
        isRestricted: true,
        price: 4000,
        range: "",
        rarity: 7,
        skills: ["Mechanics"],
        special: "",
        time: "16 hours",
        type: "Gunnery"
    },
    [Template.Weapon.MISSILE]: {
        critical: 2,
        damage: 20,
        difficulty: 3,
        encumbrance: 7,
        hands: "One-handed",
        hardpoints: 4,
        isRestricted: true,
        price: 1100,
        range: "Extreme",
        rarity: 3,
        skills: ["Mechanics"],
        special: "Blast 10; Breach 1; Cumbersome 3; Guided 3; Prepare 1; Limited Ammo 1",
        time: "4 hours",
        type: "Gunnery"
    },
    [Template.Weapon.GRENADE]: {
        critical: 4,
        damage: 8,
        difficulty: 3,
        encumbrance: 1,
        hands: "One-handed",
        hardpoints: 0,
        isRestricted: false,
        price: 35,
        range: "Short",
        rarity: 4,
        skills: ["Mechanics"],
        special: "Blast 6; Limited Ammo 1",
        time: "2 hours",
        type: "Ranged (Light)"
    },
    [Template.Weapon.MINE]: {
        critical: 3,
        damage: 12,
        difficulty: 3,
        encumbrance: 3,
        hands: "Two-handed",
        hardpoints: 0,
        isRestricted: true,
        price: 425,
        range: "Engaged",
        rarity: 5,
        skills: ["Mechanics"],
        special: "Blast 4; Limited Ammo 1",
        time: "4 hours",
        type: "Mechanics"
    }
};

/**
 * Core logic for the Crafting system
 *
 * @module swrpg/craft/core
 *
 * @author Draico Dorath
 * @copyright 2020
 * @license MIT
 */
export {
}