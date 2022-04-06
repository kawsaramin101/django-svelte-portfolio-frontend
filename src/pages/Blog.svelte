<script>
    import {
        onMount
    } from "svelte";
    import {
        Link,
    } from "svelte-navigator";
    import axios from 'axios';
    import Loading from '../components/Loading.svelte';
    
    const baseURL = "http://127.0.0.1:8000/api/v1/"

    let posts = [];
    let error = null;
    let loading = true;
    
    onMount(() => {
        
        error = null;
            
        axios.get(`${baseURL}blogs/`)
        .then(res => {
            posts = res.data;
            loading = false;
        })
        .catch(err => {
            error = "Couldn’t fetch data, backend might be having some trouble :("
            loading = false;
        })
       
    })

</script>

<div class="m-4">
    {#if error }
    <p>{error}</p>
    {/if }
    {#if loading }
        <Loading />
    {/if }
    {#each posts as post (post.id) }
    <div class="mb-3">
        <h4 class="is-size-4 has-text-weight-bold">{post.title}</h4>
        <p>
            {post.truncated}
        </p>
        <Link to="/blog/{post.id}">Read More</Link>
    </div>
    {/each }
</div>