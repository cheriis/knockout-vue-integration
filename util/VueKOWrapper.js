window.VueKOWrapper = function(koName, vName, params) {
    Vue.component(vName, {
        props: params,
        template: '<div data-bind="component: { name: \'' + koName + '\', params: props }"></div>',
        mounted: function () {
            $('#log').append('vue mounted: VueKO<br>');
            var vm = this;

            ko.applyBindings({props: vm.$props}, vm.$el);
            // TODO need to sync Vue data to KO model
        },
        destroyed: function() {
            $('#log').append('vue destroyed: VueKO<br>');
        }
    });
};