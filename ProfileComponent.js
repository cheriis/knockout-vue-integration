ko.components.register('profile', {
    template: {element: 'profile-template'},
    viewModel: function (profileModel) {
        var self = this;
        this.showModel = function(profileModel) {
            // Clone the data
            ko.mapping.fromJS(ko.mapping.toJS(profileModel), {}, self);
        };

        this.showModel(profileModel);

        // Listen to postbox for rewrite
        ko.postbox.subscribe('select-profile', this.showModel);
    }
});