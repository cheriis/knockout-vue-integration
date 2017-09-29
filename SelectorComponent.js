ko.components.register('selector', {
    template: {element: 'selector-template'},
    viewModel: function (params) {
        $('#log').append('viewModel created: selector<br>');

        var self = this;
        this.data = params.data;
        this.showAddress = params.showAddress;
        this.selection = params.selection;

        this.selectProfile = function(profile, e) {
            e.preventDefault();
            $('#log').append('selection updated<br>');
            self.selection(self.data.list().indexOf(profile));
        }
    }
});