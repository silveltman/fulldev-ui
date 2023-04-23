<script lang="ts">
    import type { Hst,LogoContent } from '$lib/types';
    import Logo from './Logo.svelte';
    export let Hst: Hst;

    let content: LogoContent = {
        light: {
            src: 'https://via.placeholder.com/150',
            alt: 'Alt text'
        },
        dark: {
            src: 'https://via.placeholder.com/150',
            alt: 'Alt text'
        }
    }

</script>

<Hst.Story>
    <svelte:fragment slot="controls">
        <Hst.Json
            bind:value={content}
            title="Heading"
        />
    </svelte:fragment>

    <Logo {content} />
</Hst.Story>