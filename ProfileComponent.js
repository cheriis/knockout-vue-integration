ko.components.register('profile', {
    template: {element: 'profile-template'},
    viewModel: function (profileModel) {
        $('#log').append('viewModel created: profile<br>');
        return profileModel;
    }
});