/**
 * Created by Nazabat on 31/10/2017.
 */

/**Connection with Python using Spawning process */
var spawn = require('child_process').spawn;
/** */

var pythonDao = {
    getParameterDeviceModelHomePython : function(callback){
        var GetHomeDataPython = spawn('python', ['compute_input.py']),
            dataString = '',
            data = [];

        GetHomeDataPython.stdout.on('data',function(data){
            dataString += data.toString();
        });

        GetHomeDataPython.stdout.on('end',function(){
            callback(dataString);
        });
        console.log('page@PythonJS');
    }
};
module.exports = pythonDao;
