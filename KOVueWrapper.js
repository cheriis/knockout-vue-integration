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

            var reactive = ko.mapping.toJS(model);
            var subscription = model.showAddress.subscribe(function() {
                if (!vInstance) {
                    subscription.dispose();
                    return;
                }
                vInstance.showAddress = model.showAddress();
            });

            this.render = function(el) {
                vInstance = new (Vue.component(vName))({
                    el: el,
                    // TODO Design dual interface (observables/reactive) model
                    propsData: reactive,
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