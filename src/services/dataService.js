const appliancesDetails = {
    Light1: {
        energyConsumption: 60,
        status: true
    },
    Light2: {
        energyConsumption: 30,
        status: false
    },
    Other: {
        energyConsumption: 100,
        status: true
    }
}

export const getAppliances = () => ({ ...appliancesDetails });

export const switches = Object.keys(appliancesDetails);

export const initSwitchStatus = () => {
    const json = {};
    switches.forEach(key => {
        json[key] = appliancesDetails[key].status;
    });
    return json;
}