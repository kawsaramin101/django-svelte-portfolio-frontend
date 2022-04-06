import {
    writable
} from 'svelte/store';


const IsDarkTheme = writable(false);

export default IsDarkTheme