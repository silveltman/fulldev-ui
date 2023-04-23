<script lang="ts">
    import type { Hst, SocialContent } from '$lib/types'
    import Social from './Social.svelte'
    export let Hst: Hst

    let content: SocialContent = {
        icon : 'facebook',
        href: '#'
    }

</script>

<Hst.Story layout = {{type: 'grid' , width:200}}>
    <svelte:fragment slot="controls">
        <Hst.Json
            title="Content"
            bind:value={content}
        />
    </svelte:fragment>

    <Hst.Variant title="Facebook">
        <Social
            content={content}
        />
    </Hst.Variant>
    <!-- <Hst.Variant title="Twitter">
        <Social
        content= {
            icon="twitter"
        }
            />
    </Hst.Variant>
    <Hst.Variant title="Linkedin">
        <Social
            icon="linkedin"
        />
    </Hst.Variant>
    <Hst.Variant title="Pinterest">
        <Social
            icon="pinterest"
        />
    </Hst.Variant>
    <Hst.Variant title="Whatsapp">
        <Social
            icon="whatsapp"
        />
    </Hst.Variant>
    <Hst.Variant title="Telegram">
        <Social
            icon="telegram"
            
        />
    </Hst.Variant>
    <Hst.Variant title="Email">
        <Social
            icon="email"
            
        />
    </Hst.Variant>
    <Hst.Variant title="Phone">
        <Social
            icon="phone"
        />
    </Hst.Variant>
     -->

</Hst.Story>