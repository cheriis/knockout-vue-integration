Vue.component('profile', {
    props: ['profile', 'showAddress'],
    template: '#profile-template',
    mounted: function() {
        $('#log').append('vue mounted: profile<br>');
    }
});

window.KOVueWrapper('profile', 'profile');