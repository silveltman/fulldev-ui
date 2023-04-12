# Svelte Components Guidelines
When creating Svelte components, follow these guidelines to maintain consistency and code quality in our repository:

## General guidelines
- Refer to the provided Button.svelte component as a reference for implementing these guidelines.
- Refer to plugin.js for tailwind theme config to apply

## Component

### Script
1. Import types (if neccesary, create interface in types.ts)
2. Import components
3. Declare base/default props
4. Declare component-specific props
5. Optionally define variables
6. optinally define functions

### Markup
1. Wrap component in {#if} block if that makes sense. This way, if our client leaves the button text empty for example, the button will not render on the page. This makes the editing experience in our CMS (CloudCannon) more dynamic. (we will use Astro, so the component will literally not be rendered)

2. Always use dynamic expressions within the class="... {place here}" for assigning attributes or classes based on component properties. This gives greater flexibility, because components for example do not accept the class:myclass={} syntax

### Story
1. Import types
2. Import component
3. Export Hst
4. Declare content with default values
5. For the props 'variant' and 'size', create Hst.Variant
6. If beneficiary, create controls for other props
