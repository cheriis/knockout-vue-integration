ko.bindingHandlers.kovuewrap = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        $('#log').append('KOVue binding init<br>');
        viewModel.render(element);
    }
}

window.KOVueWrapper = function(vName, koName) {
    ko.components.register(koName, {
        template: "<div data-bind='{kovuewrap: true}'></div>",
        viewModel: function (model) {
            $('#log').append('viewModel created: KOVue<br>');

            var vInstance;

            // use ko.utils.domNodeDisposal.addDisposeCallback(node, callback)
            // for vm.$destroy()

            this.render = function(el) {
                vInstance = new (Vue.component(vName))({
                    el: el,
                    // TODO Design dual interface (observables/reactive) model
                    propsData: ko.mapping.toJS(model)
                })
            }
        }
    });
}