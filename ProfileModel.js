window.ProfileModel = function(data) {
    var self = this;
    ko.mapping.fromJS(data, {}, this);

    this.address.capitalStreet = ko.pureComputed(function() {
        return self.address.street().charAt(0).toUpperCase() + self.address.street().slice(1);
    });
};