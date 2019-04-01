'use strict'

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
      const { ApplicationTrigger } = require('@nodert-win10-rs4/windows.applicationmodel.background');
      const { BackgroundTaskRegistration } = require('@nodert-win10-rs4/windows.applicationmodel.background');
      const { BackgroundTaskBuilder } = require('@nodert-win10-rs4/windows.applicationmodel.background');
      // const { ValueSet } = require('@nodert-win10-rs4/windows.foundation.collections');

      var task = null;
      var trigger = new ApplicationTrigger();
      var backgroundTaskName = 'DataStreamerConnectTask';
      
      function registerNewBackgroundTask() {
          // Check to see if we're registered
          var builder = new BackgroundTaskBuilder();
          
          if (false) {
            var allTasks = BackgroundTaskRegistration.allTasks;
            var iter = allTasks.first();
            while (iter.hasCurrent) {
                var bgTask = iter.current.value;
                if (bgTask.name === backgroundTaskName) {
                    bgTask.unregister(true);
                    break;
                    }
                    iter.moveNext();
                }
            }

            builder.name = backgroundTaskName;
            builder.taskEntryPoint = 'GA4MockAppServiceJS\\streamer.js';
            builder.setTrigger(trigger);
            // Set isNetworkRequested so that the running task 
            builder.isNetworkRequested = true;
            task = builder.register();

            // run the task
            trigger.requestAsync();
        }

        registerNewBackgroundTask();
    }
}