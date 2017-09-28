window.ProfileModel = function(data) {
    ko.mapping.fromJS(data, {}, this);

    this.selectProfile = function() {
        ko.postbox.publish('select-profile', this);
    }
};