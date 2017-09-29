Vue.component('profile', {
    props: ['name', 'address'],
    template: '#profile-template',
    mounted: function() {
        $('#log').append('vue mounted: profile<br>');
    }
});

window.KOVueWrapper('profile', 'profile');