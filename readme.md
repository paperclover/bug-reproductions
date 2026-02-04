in package.json we override builder-vite to point to an alpha with this patch
https://github.com/storybookjs/storybook/pull/33740

you can verify this is correct by `npm i` then verifying `@storybook/react-vite`
points to `@storybook/vite-builder` and that the builder package contains the
correct patch.

- `npm i`
- `npm run storybook` -> you can see the button story
- `npm run build-storybook` -> missing iframe.html in build folder -> fails at runtime
