/**  * Created by nazab on 1/6/2017.  */
var connectionProvider = require('../mysqlconnstringprovider');

var DataObjectModule = {

//----- GET DATA FROM MySQL DATA BASE
    getParameterDeviceModelHome : function(callback){
        var connection =  connectionProvider.getMysqlConnectionMain();
        var queryForHome = "SELECT * FROM wiductone LIMIT 50";
        if(connection){
            connection.query(queryForHome, function(err, rows){
                if(err){throw err;}
                callback(rows);
            })
        }
        connectionProvider.closeMysqlConnection(connection);
    },

    getParameterDeviceModelMain : function(callback){
        var connection = connectionProvider.getMysqlConnectionMain();
        var queryForHome = "SELECT * FROM WiDUCTDataMain" ;
        if (connection) {
            connection.query(queryForHome, function (err, rows) {
                if(err){throw err;}
                callback(rows);
            });
            connectionProvider.closeMysqlConnection(connection);
        }
    },
    getParameterDeviceModelWireless : function(callback){
        var connection = connectionProvider.getMysqlConnectionMain();
        var queryForHome = "SELECT * FROM WiDUCTDataWireLess" ;
        if (connection) {
            connection.query(queryForHome, function (err, rows) {
                if(err){throw err;}
                callback(rows);
            });
            connectionProvider.closeMysqlConnection(connection);
        }
    },
    getParameterDeviceModelNetwork : function(callback){
        var connection = connectionProvider.getMysqlConnectionMain();
        var queryForHome = "SELECT * FROM WiDUCTDataNetwork" ;
        if (connection) {
            connection.query(queryForHome, function (err, rows) {
                if(err){throw err;}
                callback(rows);
            });
            connectionProvider.closeMysqlConnection(connection);
        }
    },
    getParameterDeviceModelSystem : function(callback){
        var connection = connectionProvider.getMysqlConnectionMain();
        var queryForHome = "SELECT * FROM WiDUCTDataSystem" ;
        if (connection) {
            connection.query(queryForHome, function (err, rows) {
                if(err){throw err;}
                callback(rows);
            });
            connectionProvider.closeMysqlConnection(connection);
        }
    },
    getParameterDeviceModeAdvanced : function(callback){
        var connection = connectionProvider.getMysqlConnectionMain();
        var queryForHome = "SELECT * FROM WiDUCTDataAdvanced" ;
        if (connection) {
            connection.query(queryForHome, function (err, rows) {
                if(err){throw err;}
                callback(rows);
            });
            connectionProvider.closeMysqlConnection(connection);
        }
    },
    getParameterDeviceModeServices : function(callback){
        var connection = connectionProvider.getMysqlConnectionMain();
        var queryForHome = "SELECT * FROM WiDUCTDataServices" ;
        if (connection) {
            connection.query(queryForHome, function (err, rows) {
                if(err){throw err;}
                callback(rows);
            });
            connectionProvider.closeMysqlConnection(connection);
        }
    },
    getParameterDeviceModelDetails : function(callback){
        var connection = connectionProvider.getMysqlConnectionMain();
        var queryForHome = "SELECT * FROM WiDUCTSignInDetails" ;
        if (connection) {
            connection.query(queryForHome, function (err, rows, fields) {
                if(err){throw err;}
                callback(rows);
            });
            connectionProvider.closeMysqlConnection(connection);
        }
    },
//----- CREATE DATA INTO MySQL DATABASE
    createMainData: function(mainData, OnSuccessfulCallback){
        var insertStatementMain = "INSERT INTO WiDUCTDataHome SET?";
        var mainCategory = {
            airMax: mainData.airMax,
            longRangeLinkMode: mainData.longRangeLinkMode,
            airViewPort: mainData.airViewPort,
            launchAirView: mainData.launchAirView,
            airSelect: mainData.airSelect,
            frequency: mainData.frequency,
            airSelectValue: mainData.airSelectValue,
            band: mainData.band,
            createData: new Date()
            };

        console.log(mainCategory);
        var connection =  connectionProvider.getMysqlConnectionMain();
        if(connection){
         connection.query(insertStatementMain, mainCategory, function(Error, result){
             if(Error){}
             OnSuccessfulCallback({status:'Successful'});
             console.log(result)
         })
        }
    },
    createWirelessData: function(wirelessData, OnSuccessfulCallback){
        var insertStatementWireless = "INSERT INTO wirelessData SET?";
        var wirelessCategory = {
            wirelessMode: wirelessData.airMax,
            wdsTransparentBridgeMode: wirelessData.wdsTransparentBridgeMode,
            ssid: wirelessData.ssid,
            lockToApMac: wirelessData.lockToApMac,
            countryCode: wirelessData.countryCode,
            ieee80211Mode: wirelessData.ieee80211Mode,
            channelWidth: wirelessData.channelWidth,
            frequencyScanListMHz: wirelessData.frequencyScanListMHz,
            calculateEIRPLimit: wirelessData.calculateEIRPLimit,
            antennaGain: wirelessData.antennaGain,
            outputPower: wirelessData.outputPower,
            dataRateModule: wirelessData.dataRateModule,
            maxTxRateMbps: wirelessData.maxTxRateMbps,
            wirelessSecurity: wirelessData.wirelessSecurity,
            createData: new Date()
        };
        console.log(wirelessCategory);
        var connection =  connectionProvider.getMysqlConnectionMain();
        if(connection){
            connection.query(insertStatementWireless, wirelessCategory, function(Error, result){
                if(Error){}
                OnSuccessfulCallback({status:'Successful'});
                console.log(result)
            })
        }
    },
    createNetworkData: function(networkData, OnSuccessfulCallback){
        var insertStatementNetwork = "INSERT INTO wirelessData SET?";
        var networkCategory = {
            networkMode: networkData.networkMode,
            disableNetwork: networkData.disableNetwork,
            wirelessMode: networkData.wirelessMode,
            managementIpAddress: networkData.managementIpAddress,
            ipAddress: networkData.ipAddress,
            notMask: networkData.notMask,
            gatewayIp: networkData.gatewayIp,
            primaryDnsIp: networkData.primaryDnsIp,
            mtu: networkData.mtu,
            managementVlan: networkData.managementVlan,
            autoIpAliasing: networkData.autoIpAliasing,
            stp: networkData.stp,
            createData: new Date()
        };
        console.log(networkCategory);
        var connection =  connectionProvider.getMysqlConnectionMain();
        if(connection){
            connection.query(insertStatementNetwork, networkCategory, function(Error, result){
                if(Error){}
                OnSuccessfulCallback({status:'Successful'});
                console.log(result)
            })
        }
    },
    createAdvancedData: function(advancedData, OnSuccessfulCallback){
        var insertStatementAdvanced = "INSERT INTO advancedData SET?";
        var advancedCategory = {
            RtsThreshold: advancedData.RtsThreshold,
            distance: advancedData.distance,
            aggregation: advancedData.aggregation,
            multicasetData: advancedData.multicasetData,
            installerEirpControl: advancedData.installerEirpControl,
            extraReporting: advancedData.extraReporting,
            sensitivityThresholddBm: advancedData.sensitivityThresholddBm,
            rtsThreshold: advancedData.rtsThreshold,
            thresholdDbm: advancedData.thresholdDbm,
            createData: new Date()
        };
        console.log(advancedCategory);
        var connection =  connectionProvider.getMysqlConnectionMain();
        if(connection){
            connection.query(insertStatementAdvanced, advancedCategory, function(Error, result){
                if(Error){}
                OnSuccessfulCallback({status:'Successful'});
                console.log(result)
            })
        }
    },
    createServicesData: function(servicesData, OnSuccessfulCallback){
        var insertStatementServices = "INSERT INTO serviceData SET?";
        var servicesCategory = {
            pingWatchDog: servicesData.pingWatchDog,
            ipAddressToPing: servicesData.ipAddressToPing,
            pingInterval: servicesData.pingInterval,
            startupDelay: servicesData.startupDelay,
            failureCountToReboot: servicesData.failureCountToReboot,
            saveSupportInfo: servicesData.saveSupportInfo,

            sNMPAgent: servicesData.sNMPAgent,
            sNMPCommunity: servicesData.sNMPCommunity,
            contact: servicesData.contact,
            location: servicesData.location,

            webServer: servicesData.webServer,
            secureConnectionHttp: servicesData.secureConnectionHttp,
            secureServerPort: servicesData.secureServerPort,
            serverPort1: servicesData.serverPort1,
            sessionTimeOut: servicesData.sessionTimeOut,

            sSHServer: servicesData.sSHServer,
            serverPort2: servicesData.serverPort2,
            passwordAuthentication: servicesData.passwordAuthentication,
            authorizedKeys: servicesData.authorizedKeys,

            telnetServer: servicesData.telnetServer,
            serverPort3: servicesData.serverPort3,
            nTPClient: servicesData.nTPClient,
            nTPServer: servicesData.nTPServer,

            dynamicDNS: servicesData.dynamicDNS,
            services: servicesData.services,
            userName: servicesData.userName,
            password: servicesData.password,

            systemLog: servicesData.systemLog,
            remoteLog: servicesData.remoteLog,
            remoteLogIpAddress: servicesData.remoteLogIpAddress,
            remoteLogPort: servicesData.remoteLogPort,
            tCPProtocols: servicesData.tCPProtocols,
            createData: new Date()
        };
        console.log(servicesCategory);
        var connection =  connectionProvider.getMysqlConnectionMain();
        if(connection){
            connection.query(insertStatementServices, servicesCategory, function(Error, result){
                if(Error){}
                OnSuccessfulCallback({status:'Successful'});
                console.log(result)
            })
        }
    },
    createSystemData: function(systemData, OnSuccessfulCallback){
        var insertStatementSystem = "INSERT INTO systemData SET?";
        var systemCategory = {
            checkForUpdates: systemData.checkForUpdates,
            deviceName: systemData.deviceName,
            interfaceLanguage: systemData.interfaceLanguage,
            timeZone: systemData.timeZone,
            startupDate: systemData.startupDate,

            administratorUserName: systemData.administratorUserName,
            readOnlyAccount: systemData.readOnlyAccount,

            uploadResetButton: systemData.uploadResetButton,
            latitude: systemData.latitude,

            longitude: systemData.longitude,
            createData: new Date()
        };
        console.log(systemCategory);
        var connection =  connectionProvider.getMysqlConnectionMain();
        if(connection){
            connection.query(insertStatementSystem, systemCategory, function(Error, result){
                if(Error){}
                OnSuccessfulCallback({status:'Successful'});
                console.log(result)
            })
        }
    },

//----- UPDATE PARAMETERS INTO MySQL DATABASE
    updateParametersMainData: function (airMax, longRangeLinkMode, airViewPort, launchAirView,
                                       airSelect, frequency, airSelectValue, band, callback) {
        var connectionMainData = connectionProvider.getMysqlConnectionMain();
        var queryStatement = "UPDATE mainData  SET ...";
        if (connectionMainData) {
            connectionMainData.query(queryStatement, [airMax, longRangeLinkMode, airViewPort, launchAirView,
                    airSelect, frequency, airSelectValue, band],
                function (err, rows){
                    if (err){throw err;}
                    console.log(rows);
                    if(rows){
                        callback({status : 'successful'});
                    }
                });
            connectionProvider.closeMysqlConnection(connectionMainData);
        }
    },
    updateParametersWirelessData: function (wirelessMode, wdsTransparentBridgeMode, ssid, lockToApMac, countryCode,
                                           ieee80211Mode, channelWidth, frequencyScanListMHz, calculateEIRPLimit,
                                           antennaGain, outputPower, dataRateModule, maxTxRateMbps, wirelessSecurity, callback) {
        var connectionWirelessData = connectionProvider.getMysqlConnectionMain();
        var queryStatement = "UPDATE mainData  SET ...";
        if (connectionWirelessData) {
            connectionWirelessData.query(queryStatement, [wirelessMode, wdsTransparentBridgeMode, ssid, lockToApMac, countryCode,
                    ieee80211Mode, channelWidth, frequencyScanListMHz, calculateEIRPLimit,
                    antennaGain, outputPower, dataRateModule, maxTxRateMbps, wirelessSecurity],
                function (err, rows, fields){
                    if (err){throw err;}
                    console.log(rows);
                    if(rows){
                        callback({status : 'successful'});
                    }
                });
            connectionProvider.closeMysqlConnection(connectionWirelessData);
        }
    },
    updateParametersNetworkData: function (networkMode, disableNetwork, wirelessMode, managementIpAddress, ipAddress,
                                          notMask, gatewayIp, primaryDnsIp, mtu, managementVlan, autoIpAliasing, stp,
                                          callback) {
        var connectionNetworkData = connectionProvider.getMysqlConnectionMain();
        var queryStatement = "UPDATE mainData  SET ...";
        if (connectionNetworkData) {
            connectionNetworkData.query(queryStatement,
                [networkMode, disableNetwork, wirelessMode, managementIpAddress, ipAddress, notMask, gatewayIp, primaryDnsIp, mtu, managementVlan, autoIpAliasing, stp],
                function (err, rows, fields){
                    if (err){throw err;}
                    console.log(rows);
                    if(rows){
                        callback({status : 'successful'});
                    }
                });
            connectionProvider.closeMysqlConnection(connectionNetworkData);
        }
    },
    updateParametersAdvancedData: function (RtsThreshold, distance, aggregation, multicasetData, installerEirpControl,
                                           extraReporting, sensitivityThresholddBm, rtsThreshold, thresholdDbm, callback) {
        var connectionAdvancedData = connectionProvider.mysqlConnectionStringProvider.getMysqlConnectionAdvanced();
        var queryStatement = "UPDATE mainData  SET ...";
        if (connectionAdvancedData) {
            connectionAdvancedData.query(queryStatement,
                [RtsThreshold, distance, aggregation, multicasetData, installerEirpControl, extraReporting,
                    sensitivityThresholddBm, rtsThreshold, thresholdDbm],
                function (err, rows){
                    if (err){throw err;}
                    console.log(rows);
                    if(rows){
                        callback({status : 'successful'});
                    }
                });
            connectionProvider.closeMysqlConnection(connectionAdvancedData);
        }
    },
    updateParametersServicesData: function (pingWatchDog, ipAddressToPing, pingInterval, startupDelay, failureCountToReboot, saveSupportInfo, sNMPAgent, sNMPCommunity, contact, location, webServer, secureConnectionHttp, secureServerPort, serverPort1, sessionTimeOut,
                                           sSHServer, serverPort2, passwordAuthentication, authorizedKeys, telnetServer, serverPort3, nTPClient, nTPServer,
                                           dynamicDNS, services, userName,password, systemLog, remoteLog, remoteLogIpAddress, remoteLogPort,tCPProtocols,callback) {
        var connectionServicesData = connectionProvider.getMysqlConnectionMain();
        var queryStatement = "UPDATE mainData  SET ...";
        if (connectionServicesData) {
            connectionServicesData.query(queryStatement,
                [pingWatchDog, ipAddressToPing, pingInterval, startupDelay, failureCountToReboot, saveSupportInfo, sNMPAgent,
                    sNMPCommunity, contact, location, webServer, secureConnectionHttp, secureServerPort, serverPort1, sessionTimeOut,
                    sSHServer, serverPort2, passwordAuthentication, authorizedKeys, telnetServer, serverPort3, nTPClient, nTPServer,
                    dynamicDNS, services, userName,password, systemLog, remoteLog, remoteLogIpAddress, remoteLogPort,tCPProtocols],
                function (err, rows, fields){
                    if (err){throw err;}
                    console.log(rows);
                    if(rows){
                        callback({status : 'successful'});
                    }
                });
            connectionProvider.closeMysqlConnection(connectionServicesData);
        }
    },
    updateParametersSystemData: function (checkForUpdates, deviceName,interfaceLanguage, timeZone, startupDate,
                                         administratorUserName, readOnlyAccount, uploadResetButton, latitude,longitude,callback) {
        var connectionSystemData = connectionProvider.mysqlConnectionStringProvider.getMysqlConnectionServices();
        var queryStatement = "UPDATE mainData  SET ...";
        if (connectionSystemData) {
            connectionSystemData.query(queryStatement,
                [checkForUpdates, deviceName,interfaceLanguage, timeZone, startupDate, administratorUserName,
                    readOnlyAccount, uploadResetButton, latitude,longitude],
                function (err, rows, fields){
                    if (err){throw err;}
                    console.log(rows);
                    if(rows){
                        callback({status : 'successful'});
                    }
                });
            connectionProvider.closeMysqlConnection(connectionSystemData);
        }
    }
};

// DataObjectModule.getParameterDeviceModelHome(function(rows){console.log(rows)});

module.exports = DataObjectModule;