import SPELLS from 'common/SPELLS';

import CoreAbilities from 'Parser/Core/Modules/Abilities';

/* eslint-disable no-unused-vars */

class Abilities extends CoreAbilities {
  static ABILITIES = [
    ...CoreAbilities.ABILITIES,
    // Rotational spells
    {
      spell: SPELLS.HAUNT_TALENT,
      category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => 25,
      isActive: combatant => combatant.hasTalent(SPELLS.HAUNT_TALENT.id),
      recommendedEfficiency: 0.95,
      extraSuggestion: 'This estimate may not be correct sometimes because of Haunt\'s resets. The real amount of possible Haunts will be higher if there were adds on this fight.',
    },
    {
      spell: SPELLS.PHANTOM_SINGULARITY_TALENT,
      category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => 40,
      isActive: combatant => combatant.hasTalent(SPELLS.PHANTOM_SINGULARITY_TALENT.id),
      recommendedEfficiency: 0.95,
    },
    {
      spell: SPELLS.AGONY,
      category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.CORRUPTION_CAST,
      category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.SIPHON_LIFE_TALENT,
      category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => null,
      isActive: combatant => combatant.hasTalent(SPELLS.SIPHON_LIFE_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.UNSTABLE_AFFLICTION_CAST,
      category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.DRAIN_SOUL,
      category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.LIFE_TAP,
      category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => null,
      extraSuggestion: 'If you\'re using Empowered Life Tap, you should keep a very high uptime on the Empowered Life Tap buff.',
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.SEED_OF_CORRUPTION_DEBUFF,
      category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },

    // Cooldowns
    {
      spell: SPELLS.SOUL_HARVEST_TALENT,
      category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
      getCooldown: haste => 120,
      isActive: combatant => combatant.hasTalent(SPELLS.SOUL_HARVEST_TALENT.id),
    },
    {
      spell: SPELLS.SUMMON_DOOMGUARD_UNTALENTED,
      category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
      getCooldown: haste => 180,
      isActive: combatant => !combatant.hasTalent(SPELLS.GRIMOIRE_OF_SUPREMACY_TALENT.id),
      recommendedEfficiency: 0.95,
    },
    {
      spell: SPELLS.SUMMON_INFERNAL_UNTALENTED,
      category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
      getCooldown: haste => 180,
      isActive: combatant => !combatant.hasTalent(SPELLS.GRIMOIRE_OF_SUPREMACY_TALENT.id),
      recommendedEfficiency: 0.95,
    },
    {
      spell: SPELLS.GRIMOIRE_IMP,
      category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
      getCooldown: haste => 90,
      isActive: combatant => combatant.hasTalent(SPELLS.GRIMOIRE_OF_SERVICE_TALENT.id),
    },
    {
      spell: SPELLS.GRIMOIRE_VOIDWALKER,
      category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
      getCooldown: haste => 90,
      isActive: combatant => combatant.hasTalent(SPELLS.GRIMOIRE_OF_SERVICE_TALENT.id),
    },
    {
      spell: SPELLS.GRIMOIRE_FELHUNTER,
      category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
      getCooldown: haste => 90,
      isActive: combatant => combatant.hasTalent(SPELLS.GRIMOIRE_OF_SERVICE_TALENT.id),
    },
    {
      spell: SPELLS.GRIMOIRE_SUCCUBUS,
      category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
      getCooldown: haste => 90,
      isActive: combatant => combatant.hasTalent(SPELLS.GRIMOIRE_OF_SERVICE_TALENT.id),
    },

    // Utility
    {
      spell: SPELLS.BURNING_RUSH_TALENT,
      category: Abilities.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      isActive: combatant => combatant.hasTalent(SPELLS.BURNING_RUSH_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.UNENDING_RESOLVE,
      category: Abilities.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => 180,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.DEMONIC_CIRCLE_TALENT_SUMMON,
      category: Abilities.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      isActive: combatant => combatant.hasTalent(SPELLS.DEMONIC_CIRCLE_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.DEMONIC_CIRCLE_TALENT_TELEPORT,
      category: Abilities.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => 30,
      isActive: combatant => combatant.hasTalent(SPELLS.DEMONIC_CIRCLE_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.SOULSTONE,
      category: Abilities.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => 600,
      // TODO: shares cooldown with other combat rezzes, don't know how to calculate properly
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.SUMMON_DOOMGUARD_TALENTED,
      category: Abilities.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      isActive: combatant => combatant.hasTalent(SPELLS.GRIMOIRE_OF_SUPREMACY_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.SUMMON_INFERNAL_TALENTED,
      category: Abilities.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      isActive: combatant => combatant.hasTalent(SPELLS.GRIMOIRE_OF_SUPREMACY_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.DEMONIC_GATEWAY_CAST,
      category: Abilities.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => 10,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.DARK_PACT_TALENT,
      category: Abilities.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => 60,
      isActive: combatant => combatant.hasTalent(SPELLS.DARK_PACT_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.MORTAL_COIL_TALENT,
      category: Abilities.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => 45,
      isActive: combatant => combatant.hasTalent(SPELLS.MORTAL_COIL_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.GRIMOIRE_OF_SACRIFICE_TALENT,
      category: Abilities.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => 30,
      isActive: combatant => combatant.hasTalent(SPELLS.GRIMOIRE_OF_SACRIFICE_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.BANISH,
      category: Abilities.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.CREATE_HEALTHSTONE,
      category: Abilities.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.CREATE_SOULWELL,
      category: Abilities.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => 120,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.ENSLAVE_DEMON,
      category: Abilities.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.EYE_OF_KILROGG,
      category: Abilities.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.FEAR_CAST,
      category: Abilities.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.HEALTH_FUNNEL_CAST,
      category: Abilities.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.SUMMON_IMP,
      category: Abilities.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.SUMMON_VOIDWALKER,
      category: Abilities.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.SUMMON_FELHUNTER,
      category: Abilities.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.SUMMON_SUCCUBUS,
      category: Abilities.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.UNENDING_BREATH,
      category: Abilities.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
  ];
}

export default Abilities;
