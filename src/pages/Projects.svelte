<script>
    const projects = [{
        description: "Demo Project 001",
        source_code: "https://www.google.com",
        live_demo: "https://www.google.com"
    },
        {
            description: "Demo Project 002",
            source_code: "https://www.google.com",
            live_demo: "https://www.google.com"
        },
        {
            description: "Demo Project 003",
            source_code: "https://translate.google.com",
            live_demo: "https://www.google.com"
        },
        {
            description: "Demo Project 004",
            source_code: "https://www.google.com",
            live_demo: "https://www.google.com"
        },
        {
            description: "Demo Project 005",
            source_code: "https://www.google.com",
            live_demo: "https://www.google.com"
        },
    ];
</script>

<ul class="m-4">
    {#each projects as project }

    <li>{project.description}
        <br />
        <a href={project.live_demo}>Live demo</a>।
        <a href={project.source_code}>Source code</a>
    </li>
    {:else }
    No projects to show :(
    {/each}
</ul>