/**
 * Created by Nazabat Hussain on 7/5/2017.
 */
function appRouteConfig(app) {
    this.app = app;
    this.routTable = [];
    this.init();
}
appRouteConfig.prototype.init = function(){
    var self = this;
    self.addRoutes();
    self.processRoute();
};
appRouteConfig.prototype.processRoute = function(){
    var self = this;
    self.routTable.forEach(function(route){
        if(route.requestType=='get'){
            self.app.get(route.requestUrl, route.callbackFunction)
        }
        else if(route.requestType=='post'){
            self.app.post(route.requestUrl, route.callbackFunction)
        }
        else if(route.requestType=='delete'){}
    });
};
appRouteConfig.prototype.addRoutes = function(){
    var self = this;
//----- Route of Page Signup
    self.routTable.push({
        requestType : 'get',
        requestUrl : '/content',
        callbackFunction : function(request, response){
            response.render('content',{title : "WiDUCT Content"})
        }
    });
//----- Route of Page Login
    self.routTable.push({
        requestType : 'get',
        requestUrl : '/login',
        callbackFunction : function(request, response){
            response.render('login',{title : "WiDUCT Login"})
        }
    });
//----- Route of Page Home
    self.routTable.push({
        requestType : 'get',
        requestUrl : '/test',
        callbackFunction : function(request, response){
            response.render('test',{title : "WiDUCT Home"})
        }
    });
/** ********************************************************************************/
//----- View Data Onto Page Main ( PYTHON )
    self.routTable.push({
        requestType : 'get',
        requestUrl : '/getParameterDeviceModelHomePython',
        callbackFunction : function(request, response){
            var pythonDao = require('../server/dao/pythonDao.js');
            console.log('Page@appRouteConfig');
            pythonDao.getParameterDeviceModelHomePython(
                function(rows){
                    response.json({HomeDataPython:rows});
                    console.log(rows);
                }
            );
        }
    });

/** **********************************************************************************/
//----- View Data Onto Page Main ( MySQL )
    self.routTable.push({
        requestType : 'get',
        requestUrl : '/getParameterDeviceModelHome',
        callbackFunction : function(request, response){
            var wiductDao = require('../server/dao/wiductDao.js');
            wiductDao.getParameterDeviceModelHome(
                function(rows){
                    console.log(rows);
                    response.json({HomeData:rows});
                }
            );
        }
    });
//----- View Data Onto Page Main
    self.routTable.push({
        requestType : 'get',
        requestUrl : '/getParameterDeviceModelMain',
        callbackFunction : function(request, response){
            var wiductDao = require('../Server/Dao/wiductDao.js');
            wiductDao.getParameterDeviceModelMain(
                function(){
                    console.log();
                    response.json({});
                }
            );
        }
    });
//----- View Data Onto Page Wireless
    self.routTable.push({
        requestType : 'get',
        requestUrl : '/getParameterDeviceModelWireless',
        callbackFunction : function(request, response){
            var wiductDao = require('../Server/Dao/wiductDao.js');
            wiductDao.getParameterDeviceModelWireless(
                function(){
                    console.log();
                    response.json({});
                }
            );
        }
    });
//----- View Data Onto Page Main
    self.routTable.push({
        requestType : 'get',
        requestUrl : '/getParameterDeviceModelNetwork',
        callbackFunction : function(request, response){
            var wiductDao = require('../Server/Dao/wiductDao.js');
            wiductDao.getParameterDeviceModelNetwork(
                function(){
                    console.log();
                    response.json({});
                }
            );
        }
    });
//----- View Data Onto Page Main
    self.routTable.push({
        requestType : 'get',
        requestUrl : '/getParameterDeviceModelSystem',
        callbackFunction : function(request, response){
            var wiductDao = require('../Server/Dao/wiductDao.js');
            wiductDao.getParameterDeviceModelSystem(
                function(){
                    console.log();
                    response.json({});
                }
            );
        }
    });
//----- View Data Onto Page Main
    self.routTable.push({
        requestType : 'get',
        requestUrl : '/getParameterDeviceModeAdvanced',
        callbackFunction : function(request, response){
            var wiductDao = require('../Server/Dao/wiductDao.js');
            wiductDao.getParameterDeviceModeAdvanced(
                function(){
                    console.log();
                    response.json({});
                }
            );
        }
    });
//----- View Data Onto Page Main
    self.routTable.push({
        requestType : 'get',
        requestUrl : '/getParameterDeviceModeServices',
        callbackFunction : function(request, response){
            var wiductDao = require('../Server/Dao/wiductDao.js');
            wiductDao.getParameterDeviceModeServices(
                function(){
                    console.log();
                    response.json({});
                }
            );
        }
    });
/***********************************************************************************/
//----- Post Data onto Page Name Advanced
    self.routTable.push({
        requestType : 'post',
        requestUrl : '/advanced',
        callbackFunction : function(request, response){
            var wiductDao = require('../Server/Dao/wiductDao');
            wiductDao.createAdvancedData(request.body, function(status){response.json(status);
            });}
    });
//  Login Information
    self.routTable.push({
        requestType : 'post',
        requestUrl : '/login',
        callbackFunction : function(request, response){
            var wiductDao = require('../Server/Dao/wiductDao');
            wiductDao.createLoginData(request.body, function(status){response.json(status);
            });}
    });
//----- Post Data onto Page Name Main
    self.routTable.push({
        requestType : 'post',
        requestUrl : '/main',
        callbackFunction : function(request, response){
            var wiductDao = require('../Server/Dao/wiductDao');
            wiductDao.createMainData(request.body, function(status){response.json(status);
            });}
    });
//----- Post Data onto Page Name Network
    self.routTable.push({
        requestType : 'post',
        requestUrl : '/network',
        callbackFunction : function(request, response){
            var wiductDao = require('../Server/Dao/wiductDao');
            wiductDao.createNetworkData(request.body, function(status){response.json(status);
            });}
    });
//----- Post Data onto Page Name Services
    self.routTable.push({
        requestType : 'post',
        requestUrl : '/services',
        callbackFunction : function(request, response){
            var wiductDao = require('../Server/Dao/wiductDao');
            wiductDao.createServicesData(request.body, function(status){response.json(status);
            });}
    });
//----- Post Data onto Page Name System
    self.routTable.push({
        requestType : 'post',
        requestUrl : '/system',
        callbackFunction : function(request, response){
            var wiductDao = require('../Server/Dao/wiductDao');
            wiductDao.createSystemData(request.body, function(status){response.json(status);
            });}
    });
//----- Post Data onto Page Name Wireless
    self.routTable.push({
        requestType : 'post',
        requestUrl : '/wireless',
        callbackFunction : function(request, response){
            var wiductDao = require('../Server/Dao/wiductDao');
            wiductDao.createWirelessData(request.body, function(status){response.json(status);
            });}
    });
/***********************************************************************************/
//----- Updata Data onto Page Main
    self.routTable.push({
        requestType: 'post',
        requestUrl: '/main',
        callbackFunction: function (request, response) {
            var wiductDao = require('../server/dao/wiductDao.js');
            wiductDao.updateParametersMainData(request.body,
                                              request.body,
                                              request.body,
            function(status){
                console.log(status);
                response.json(status);   }); }
    });
//----- Updata Data onto Page Wireless
    self.routTable.push({
        requestType: 'post',
        requestUrl: '/wireless',
        callbackFunction: function (request, response) {
            var wiductDao = require('../server/dao/wiductDao.js');
            wiductDao.updateParametersWirelessData(request.body,
                request.body,
                request.body,
                function(status){
                    console.log(status);
                    response.json(status);   }); }
    });
//----- Updata Data onto Page Network
    self.routTable.push({
        requestType: 'post',
        requestUrl: '/network',
        callbackFunction: function (request, response) {
            var wiductDao = require('../server/dao/wiductDao.js');
            wiductDao.updateParametersNetworkData(request.body,
                request.body,
                request.body,
                function(status){
                    console.log(status);
                    response.json(status);   }); }
    });
//----- Updata Data onto Page Advanced
    self.routTable.push({
        requestType: 'post',
        requestUrl: '/advanced',
        callbackFunction: function (request, response) {
            var wiductDao = require('../server/dao/wiductDao.js');
            wiductDao.updateParametersAdvancedData(request.body,
                request.body,
                request.body,
                function(status){
                    console.log(status);
                    response.json(status);   }); }
    });
//----- Updata Data onto Page Services
    self.routTable.push({
        requestType: 'post',
        requestUrl: '/services',
        callbackFunction: function (request, response) {
            var wiductDao = require('../server/dao/wiductDao.js');
            wiductDao.updateParametersServicesData(request.body,
                request.body,
                request.body,
                function(status){
                    console.log(status);
                    response.json(status);   }); }
    });
//----- Updata Data onto Page System
    self.routTable.push({
        requestType: 'post',
        requestUrl: '/system',
        callbackFunction: function (request, response) {
            var wiductDao = require('../server/dao/wiductDao.js');
            wiductDao.updateParametersSystemData(request.body,
                request.body,
                request.body,
                function(status){
                    console.log(status);
                    response.json(status);   }); }
    });
};
module.exports = appRouteConfig;