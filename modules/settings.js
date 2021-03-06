import * as MAESTRO from "./config.js";
import { _checkForCriticalPlaylist, _checkForFailurePlaylist, MaestroConfigForm } from "./misc.js";

export const registerModuleSettings = function() {

    /* -------------------------------------------- */
    /*                  Hype Track                  */
    /* -------------------------------------------- */

    game.settings.register(MAESTRO.MODULE_NAME, MAESTRO.SETTINGS_KEYS.HypeTrack.enable, {
        name: "SETTINGS.HypeTrackEnableN",
        hint: "SETTINGS.HypeTrackEnableH",
        scope: "world",
        type: Boolean,
        default: false,
        config: true,
        onChange: async s => {
            if (!game.maestro.hypeTrack) {
                return;
            }

            await game.maestro.hypeTrack._checkForHypeTracksPlaylist();
        }
    }),

    game.settings.register(MAESTRO.MODULE_NAME, MAESTRO.SETTINGS_KEYS.HypeTrack.pauseOthers, {
        name: "SETTINGS.HypeTrackPauseOthersN",
        hint: "SETTINGS.HypeTrackPauseOthersH",
        scope: "world",
        type: Boolean,
        default: false,
        config: true,
        onChange: async s => {}
    }),

    /* -------------------------------------------- */
    /*                  Item Track                  */
    /* -------------------------------------------- */

    game.settings.register(MAESTRO.MODULE_NAME, MAESTRO.SETTINGS_KEYS.ItemTrack.enable, {
        name: "SETTINGS.ItemTrackEnableN",
        hint: "SETTINGS.ItemTrackEnableH",
        scope: "world",
        type: Boolean,
        default: false,
        config: true,
        onChange: s => {
            
        }
    }),

    game.settings.register(MAESTRO.MODULE_NAME, MAESTRO.SETTINGS_KEYS.ItemTrack.createPlaylist, {
        name: "SETTINGS.ItemTrackCreatePlaylistN",
        hint: "SETTINGS.ItemTrackCreatePlaylistH",
        scope: "world",
        type: Boolean,
        default: false,
        config: true,
        onChange: s => {
            if (!game.maestro.itemTrack) {
                return;
            }

            game.maestro.itemTrack._checkForItemTracksPlaylist();
        }
    }),

    /* -------------------------------------------- */
    /*                 Combat Track                 */
    /* -------------------------------------------- */

    game.settings.register(MAESTRO.MODULE_NAME, MAESTRO.SETTINGS_KEYS.CombatTrack.enable, {
        name: "SETTINGS.CombatTrackEnableN",
        hint: "SETTINGS.CombatTrackEnableH",
        scope: "world",
        type: Boolean,
        default: false,
        config: true,
        onChange: s => {
            
        }
    }),

    game.settings.register(MAESTRO.MODULE_NAME, MAESTRO.SETTINGS_KEYS.CombatTrack.createPlaylist, {
        name: "SETTINGS.CombatTrackCreatePlaylistN",
        hint: "SETTINGS.CombatTrackCreatePlaylistH",
        scope: "world",
        type: Boolean,
        default: false,
        config: true,
        onChange: s => {
            if (!game.maestro.combatTrack) {
                return;
            }

            game.maestro.combatTrack._checkForCombatTracksPlaylist();
        }
    }),

    game.settings.register(MAESTRO.MODULE_NAME, MAESTRO.SETTINGS_KEYS.CombatTrack.defaultPlaylist, {
        name: "SETTINGS.CombatTrackDefaultPlaylistN",
        hint: "SETTINGS.CombatTrackDefaultPlaylistH",
        scope: "world",
        type: String,
        default: "",
        onChange: s => {
            
        }
    }),

    game.settings.register(MAESTRO.MODULE_NAME, MAESTRO.SETTINGS_KEYS.CombatTrack.defaultTrack, {
        name: "SETTINGS.CombatTrackDefaultTrackN",
        hint: "SETTINGS.CombatTrackDefaultTrackH",
        scope: "world",
        type: String,
        default: "",
        onChange: s => {
            
        }
    }),

    /* -------------------------------------------- */
    /*                   Migration                  */
    /* -------------------------------------------- */

    game.settings.register(MAESTRO.MODULE_NAME, MAESTRO.SETTINGS_KEYS.Migration.currentVersion, {
        name: "SETTINGS.MigrateCurrentVersionN",
        hint: "SETTINGS.MigrateCurrentVersionH",
        scope: "world",
        type: String,
        default: "",
        onChange: s => {

        }
    }),

    /* -------------------------------------------- */
    /*                     Misc                     */
    /* -------------------------------------------- */

    game.settings.register(MAESTRO.MODULE_NAME, MAESTRO.SETTINGS_KEYS.Misc.disableDiceSound, {
        name: "SETTINGS.DisableDiceSoundN",
        hint: "SETTINGS.DisableDiceSoundH",
        scope: "world",
        type: Boolean,
        default: false,
        config: true,
        onChange: s => {

        }
    }),

    game.settings.register(MAESTRO.MODULE_NAME, MAESTRO.SETTINGS_KEYS.Misc.enableCriticalSuccessFailureTracks, {
        name: "SETTINGS.EnableCriticalSuccessFailureTracksN",
        hint: "SETTINGS.EnableCriticalSuccessFailureTracksH",
        scope: "world",
        type: Boolean,
        default: false,
        config: true,
        onChange: s => {

        }
    }),

    game.settings.register(MAESTRO.MODULE_NAME, MAESTRO.SETTINGS_KEYS.Misc.createCriticalSuccessPlaylist, {
        name: "SETTINGS.CreateCriticalSuccessPlaylistN",
        hint: "SETTINGS.CreateCriticalSuccessPlaylistH",
        scope: "world",
        type: Boolean,
        default: false,
        config: true,
        onChange: s => {
            if (!game.settings.get(MAESTRO.MODULE_NAME, MAESTRO.SETTINGS_KEYS.Misc.enableCriticalSuccessFailureTracks)) {
                return;
            }

            _checkForCriticalPlaylist();
        }
    }),

    game.settings.register(MAESTRO.MODULE_NAME, MAESTRO.SETTINGS_KEYS.Misc.createCriticalFailurePlaylist, {
        name: "SETTINGS.CreateCriticalFailurePlaylistN",
        hint: "SETTINGS.CreateCriticalFailurePlaylistH",
        scope: "world",
        type: Boolean,
        default: false,
        config: true,
        onChange: s => {
            if (!game.settings.get(MAESTRO.MODULE_NAME, MAESTRO.SETTINGS_KEYS.Misc.enableCriticalSuccessFailureTracks)) {
                return;
            }

            _checkForFailurePlaylist();
        }
    }),

    game.settings.register(MAESTRO.MODULE_NAME, MAESTRO.SETTINGS_KEYS.Misc.criticalSuccessFailureTracks, {
        name: "SETTINGS.CriticalSuccessFailureTracksN",
        hint: "SETTINGS.CriticalSuccessFailureTracksH",
        scope: "world",
        type: Object,
        default: {
            criticalSuccessPlaylist: game.playlists ? game.playlists.entities.find(p => p.name === MAESTRO.DEFAULT_CONFIG.Misc.criticalSuccessPlaylistName) : "",
            criticalSuccessSound: "",
            criticalFailurePlaylist: game.playlists ? game.playlists.entities.find(p => p.name === MAESTRO.DEFAULT_CONFIG.Misc.criticalFailurePlaylistName) : "",
            criticalFailureSound: ""
        },
        config: false,
        onChange: s => {

        }
    }),

    game.settings.registerMenu(MAESTRO.MODULE_NAME, MAESTRO.SETTINGS_KEYS.Misc.maestroConfigMenu,{
        name: "SETTINGS.Config.ButtonN",
        label: MAESTRO.DEFAULT_CONFIG.Misc.maestroConfigTitle,
        hint: "SETTINGS.Config.ButtonH",
        icon: "fas fa-cog",
        type: MaestroConfigForm,
        restricted: true
    })
}