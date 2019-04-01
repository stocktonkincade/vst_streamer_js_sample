'use strict'

(function () {
    const { AppService } = require('@nodert-win10-rs4/windows.applicationmodel.appservice');
    const { WebUI } = require('@nodert-win10-rs4/windows.ui.webui');

    var appService = new AppService();

    var instance = WebUI.WebUIBackgroundTaskInstance.current;
    var deferral = instance.getDeferral();
    var details = instance.triggerDetails;

    console.log('Background ' + instance.task.name + ' Starting...');

    instance.addEventListener('canceled', onCanceled);

    if (details instanceof appService.AppServiceTriggerDetails) {
        var appService = details.appServiceConnection;
        appService.addEventListener('requestreceived', onRequestReceived);
        appService.addEventListener('')
    }

    function onRequestReceived(args) {
        console.log('Background ' + instance.task.name + ' RequestRecieved');
    }

    function onCanceled(cancelEventArg) {
        console.log('Background ' + instance.task.name + ' Reason: ' + cancelEventArg);
        instance.succeeded = true;
        if (deferral !== null)
            deferral.complete();
        close();
    }

})();