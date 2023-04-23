<script lang="ts">
    import type { Hst, FormContent } from '$lib/types'
    import Form from './Form.svelte'
    export let Hst: Hst

    let content: FormContent = {
        action: '#',
        // fields: [
        //     {
        //         type: 'text',
        //         name: 'name',
        //         label: 'Name',
        //         placeholder: 'Your name',
        //         required: true,
        //     },
        //     {
        //         type: 'email',
        //         name: 'email',
        //         label: 'Email',
        //         placeholder: 'Your email',
        //         required: true,
        //     },
        //     {
        //         type: 'textarea',
        //         name: 'message',
        //         label: 'Message',
        //         placeholder: 'Your message',
        //         required: true,
        //     },
        // ],
    }
</script>

<Hst.Story layout = {{type: 'grid', width: 400}}>
    <Form
        {content}
    />
</Hst.Story>