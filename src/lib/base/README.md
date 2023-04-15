# Base Components Guidelines
When creating base components, follow these guidelines to maintain consistency and code quality in our repository:

## General guidelines
- Refer to the provided Button.svelte component as a reference for implementing these guidelfireines.
- Refer to plugin.js for tailwind theme config to apply

## Component
### General
- Use consistent naming conventions for components and their files.
- Keep components lightweight and simple for optimal performance.
- Remember that components will be rendered statically using Astro and shipped with zero JavaScript by default.
- Use tailwindcss classes for consistent styling and theming, specified in plugin.js.
- Always import content interfaces from types.ts to ensure consistency and avoid typing errors.
- Use $$restProps to allow passing of additional attributes to the component, if needed.

### Script tag
1. Import content interface from types.ts
2. Import component dependencies
3. Only if needed, import other dependencies
4. Declare a variable called className and export it as class
5. export content prop and use the imported interface as type
6. export other component specific props
7. Add any additional variables, functions or other things

### Markup
- Wrap component in {#if} block for conditional rendering based on content prop values.
- Use dynamic expressions within class="..." for assigning attributes or classes based on component properties. For example, class="button {isActive ? 'active' : ''}".
- Export className as class and use it in class="..." for consistency with other components. For example, class="container {className}".
- Use tailwindcss classes for consistent styling and theming and avoid using a separate style-tag.

## Story
1. Import types
2. Import component
3. Export Hst
4. Declare content with default values
5. For the props 'variant' and 'size', create Hst.Variant
6. If beneficiary, create controls for other props
