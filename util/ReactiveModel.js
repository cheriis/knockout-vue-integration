window.ReactiveModel = {};

window.ReactiveModel.syncKOtoJS = function(koModel, jsObj, path, vm) {
    var disposal = [];

    Object.keys(jsObj).forEach(function(key) {
        // Subscrib-able data
        if (koModel[key].subscribe) {
            disposal.push(koModel[key].subscribe(function(newVal) {
                jsObj[key] = newVal;
            }));

            vm.$watch(path ? path + '.' + key : key, koModel[key]);
        }

        // Note VMs will be able to replace whole objects, but KO
        // won't be able to do that, so there's no sync for it.
        // it should be avoided until the migration is complete.
        // That said, this sync must be deep

        else if (typeof jsObj[key] === 'object') { // note arrays are caught above

            if (!jsObj[key].__syncKOtoJS) { // safety for cyclical references
                Object.defineProperty(jsObj[key], '__syncKOtoJS', {value: true});
                // Recurse
                window.ReactiveModel.syncKOtoJS(koModel[key], jsObj[key], path ? path + '.' + key : key, vm);
            }
        }
    });

    // If the VM is destroyed, the KO to Vue sync should stop
    vm.$on('destroy', function() {
        disposal.each(function(unsub) { unsub(); });
    })

    // The Vue to KO sync will stop automatically when the VM is destroyed
}
