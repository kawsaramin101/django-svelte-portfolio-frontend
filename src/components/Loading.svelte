<script>
    import {
        onMount
    } from "svelte";
    
    
    let value = 0;
   
    onMount(() => {
        var a = setInterval(function() {
            value += 1;
            if (value == 100) {
                clearInterval(a);
            }
        }, 25);
    })
    
</script>
<progress id="file" value={value} max="100"> {value} </progress>
<style>
    
</style>