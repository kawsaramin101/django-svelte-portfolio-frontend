<script>
    import {
        Router,
        Route,
        Link
    } from "svelte-navigator";
    import 'bulma/css/bulma.min.css';

    import Nav from "./components/Nav.svelte";
    import Index from "./pages/Index.svelte";
    import Contact from "./pages/Contact.svelte";
    import Projects from "./pages/Projects.svelte";
    import Blog from "./pages/Blog.svelte";
    import BlogDetail from "./pages/BlogDetail.svelte";


</script>

<main>

    <Router>
        <Nav />

        <div class="m-4">
            <Route path="contact">
                <Contact />
            </Route>

            <Route path="projects">
                <Projects />
            </Route>

            <Route path="blog">
                <Blog />
            </Route>
            
            <Route path="blog/:id" >
                <BlogDetail />
            </Route>
            
            <Route path="/">
                <Index />
            </Route>
        </div>

    </Router>
</main>

<style>
:global(body) {
    /*	background-color: #f2eee2;
		color: #0084f6;
    transition: background-color 0.3s */
}
:global(body.dark-mode) {
    background-color: #363333;
    color: #F6E9E9;
}
</style>