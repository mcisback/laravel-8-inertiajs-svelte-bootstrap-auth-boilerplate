require('./bootstrap');

import route from 'ziggy-js';

// import { Ziggy } from './ziggy';
const response = await fetch('/api/ziggy');
const Ziggy = await response.toJson();

route('home', undefined, undefined, Ziggy);

import { createInertiaApp } from '@inertiajs/inertia-svelte'

createInertiaApp({
    resolve: name => import(`./Pages/${name}.svelte`),
    setup({ el, App, props }) {
        new App({ target: el, props })
    },
})
