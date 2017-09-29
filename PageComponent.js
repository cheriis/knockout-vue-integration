ko.components.register('page', {
    template: {element: 'page-template'},
    viewModel: function (dataLoader) {
        $('#log').append('viewModel created: page<br>');

        var self = this;
        this.data = dataLoader;
        this.showAddress = ko.observable(true);
        this.selection = ko.observable(0);

        this.data.list.subscribe(function() {
            self.selection(0);
        });
    }
});