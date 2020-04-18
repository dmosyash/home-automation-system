const appliancesDetails = {
    light1: {
        energyConsumption: 60,
        status: true
    },
    light2: {
        energyConsumption: 30,
        status: false
    },
    other: {
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