ko.components.register('address', {
    template: {element: 'address-template'},
    viewModel: function (address) {
        $('#log').append('viewModel created: address<br>');
        return address;
    }
});