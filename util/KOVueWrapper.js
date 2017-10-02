ko.bindingHandlers.kovuewrap = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        $('#log').append('KOVue binding init<br>');
        viewModel.render(element);
    }
};

window.KOVueWrapper = function(vName, koName) {
    ko.components.register(koName, {
        template: "<div data-bind='{kovuewrap: true}'></div>",
        viewModel: function (model) {
            $('#log').append('viewModel created: KOVue<br>');

            var vInstance;

            this.render = function(el) {
                vInstance = new (Vue.component(vName))({
                    el: el,
                    // TODO Design dual interface (observables/reactive) model
                    propsData: ko.mapping.toJS(model),
                    created: function() {
                        var vm = this;
                        ReactiveModel.syncKOtoJS(model, vm.$props, '', vm);
                    },
                    // Vue component should be destroyed if it's KO Wrapper is
                    mounted: function() {
                        ko.utils.domNodeDisposal.addDisposeCallback(this.$el, function() {
                            $('#log').append('KO component disposal: KOVue<br>');
                            vInstance.$destroy();
                            vInstance = null;
                        });
                    }
                });
            }
        }
    });
};