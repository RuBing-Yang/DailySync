const { GarminConnect: GarminConnectCN } = require('garmin-connect');
const { GarminConnect: GarminConnectGlobal } = require('garmin-connect');

export type GarminClientType = typeof GarminConnectCN | typeof GarminConnectGlobal;
