import configBackendApi from './configBackendApi';
import configUI from './configUi';

const config = () => {
    return {
        backendApi: configBackendApi(),
        ui: configUI(),
    }
};

export default config;
