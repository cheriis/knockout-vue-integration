ko.components.register('page', {
    template: {element: 'page-template'},
    viewModel: function (dataLoader) {
        return dataLoader;
    }
});