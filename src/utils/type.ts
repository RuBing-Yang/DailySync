const { GarminConnect: GarminConnectCN } = require('@RuBing-Yang/garmin-connect');
const { GarminConnect: GarminConnectGlobal } = require('@RuBing-Yang/garmin-connect');

export type GarminClientType = typeof GarminConnectCN | typeof GarminConnectGlobal;
