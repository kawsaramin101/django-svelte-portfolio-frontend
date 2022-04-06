<script>
    import {
        onMount
    } from "svelte";
    import {
        useParams
    } from "svelte-navigator";
    import axios from 'axios';
    import Loading from '../components/Loading.svelte';

    const params = useParams();

    const baseURL = "http://127.0.0.1:8000/api/v1/"

    let post = null;
    let error = null;
    let loading = true;

    onMount(() => {
        
        axios.get(`${baseURL}blog/${$params.id}`)
        .then(res => {
            post = res.data;
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
    {#if post }
        <h4 class="is-size-4 has-text-weight-bold">{post.title}</h4>
        <div contenteditable="true" bind:innerHTML={post.content}></div>
    {/if }
</div>