# knockout-vue-integration
A prototype of KnockoutJS and Vue Integration

## `master` branch

Shows a KO system of components:

* `PageComponent` - Data: `showAddress`, `selection`
    * `SelectorComponent`
    * `ProfileComponent`
        * `AddressComponent`


There is a simulated `DataLoader` which will provide `ProfileModel`
objects.

Open `index.htm` in a browser (Chrome) to view.

## `integration` branch

The same system contains a Vue component in the middle, `VueProfileComponent`.
There is a `util` folder containing 2 wrappers:

* `KOVueWrapper` - using a Vue component under a KO component
* `VueKOWrapper` - using a KO component under a Vue component

The demo isn't production functional, but it use `ReactiveModel` to
automatically sync between observable and reactive data.