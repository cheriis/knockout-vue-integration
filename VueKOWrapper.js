window.VueKOWrapper = function(koName, vName, params) {
    Vue.component(vName, {
        props: params,
        mounted: function () {
            $('#log').append('vue mounted: VueKO<br>');
            var vm = this;

            ko.components.defaultLoader.getConfig(koName, function(component) {
                //debugger;
            });
        }
    });
}