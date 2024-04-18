const { GarminConnect: GarminConnectCN } = require('@Pythe1337N/garmin-connect');
const { GarminConnect: GarminConnectGlobal } = require('@Pythe1337N/garmin-connect');

export type GarminClientType = typeof GarminConnectCN | typeof GarminConnectGlobal;
