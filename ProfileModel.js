window.ProfileModel = function(data) {
    ko.mapping.fromJS(data, {}, this);
};