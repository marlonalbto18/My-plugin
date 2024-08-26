import './pluginInfo.js';
import './settingsPanel.js';

const plugin = {
    ...pluginInfo,
    onStart() {
        // Initialization code here
    },
    onStop() {
        // Cleanup code here
    },
    getSettingsPanel({ settings }) {
        return <SettingsPanel settings={settings} />;
    }
};

window.enmity.plugins.registerPlugin(plugin);
