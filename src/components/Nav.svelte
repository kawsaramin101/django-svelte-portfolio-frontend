<script>
    import {
        Link,
        useLocation
    } from "svelte-navigator";
    import DarkModeToggle from './DarkModeToggle.svelte'
    import IsDarkTheme from '../stores/IsDarkTheme.js';
    
    const location = useLocation();
    
    $: console.log($IsDarkTheme);
    
    const menuItems = [
        {value: "/", name: "Home",id: 1},
        {value: "contact", name: "Contact",id: 2},
        {value: "projects", name: "Projects",id: 3},
        {value: "blog", name: "Blog",id: 4},
    ]
    
</script>

<nav class="navbar sticky p-3" class:dark={$IsDarkTheme}>
    <div class="has-text-right">
        <DarkModeToggle />
    </div>
    <ul class="is-flex is-justify-content-space-around">
        {#each menuItems as menuItem (menuItem.id)}
        <li class="link" class:active={menuItem.value===$location.pathname}>
            <Link to={menuItem.value}>{menuItem.name}</Link>
        </li>
        {/each }
    </ul>
</nav>


<style>
    .active {
    }
    .sticky {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
    }

    .link.active > :global(a) {
        text-decoration: none;
        color: black;
    }
    .dark {
        background-color: #363333;
        color: #F6E9E9;
    }
    .link.active.dark > :global(a) {
        text-decoration: none;
        color: white;
    }

</style>