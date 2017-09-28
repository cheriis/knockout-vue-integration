var data = [
    {
        name: 'Ann',
        active: true,
        address: {
            street: 'main',
            no: 15
        }
    },
    {
        name: 'Bill',
        active: false,
        address: {
            street: 'abbey',
            no: 3
        }
    },
    {
        name: 'Carl',
        active: true,
        address: {
            street: 'camden',
            no: 4
        }
    }
].map(function(model) {
    return new window.ProfileModel(model);
});

window.DataLoader = function() {
    var self = this;
    this.onlyActive = ko.observable(false);

    this.list = ko.pureComputed(function() {
        return data.filter(function(profile) { return profile.active() || !self.onlyActive() })
    });
};

window.dataLoader = new window.DataLoader();