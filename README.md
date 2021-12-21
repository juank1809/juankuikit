# Trayy

A personal component library, made 100% following a UI KIT Design from Figma Community with the goal to develop pixel-perfect React Components.

## How I worked on this project

My goal was to develop a Design System using the React Library and a CSS framework such as SASS.

- I built this Design System entirely based on a [Figma Design](<https://www.figma.com/file/GO5G1ReY3x31Wf3NOgjRd2/Browk-UI-KIT-(Community)>), striving to be pixel-perfect in order to develop a keen eye for designs.
- I used feature branches and pull requests, as well as mindful and meaningful commits.
- Built a good CSS Architecture, abstracting SASS Variables, Themes, and Components into their own folder.
- Extense deeply my CSS Knowledge in order to not rely on Libraries like Material UI or Boostrap in the future.

## How to navegate on this project

- Complex Components with utility-performance hooks (e.g useCallback) [Example code](https://github.com/juank1809/juankuikit/blob/main/src/components/ContextMenu/ContextMenu.tsx)
- BEM Methodology to help naming my CSS Classes, used in order to achieve reusable CSS components [Example code](https://github.com/juank1809/juankuikit/blob/main/src/styles/components/_drop-zone.scss)
- Display different component states (e.g, hover, active, onDrag, etc) through Storybook Stories [Example code](https://github.com/juank1809/juankuikit/blob/main/src/components/Input/Input.stories.tsx) or [Storybook Example](https://618e876ea6e72f003acdc5be-mednbqlvpw.chromatic.com/?path=/story/components-input--default-empty)

## Next future features

- Documenting extensively on how to use the components through storybook.
- Refactor some of the code especially [this part](https://github.com/juank1809/juankuikit/blob/main/src/components/DropZone/DropZone.tsx)
- Build a small App using these components.

## Available scripts

In these projects are only two scripts:

```bash
yarn storybook
```

To see the components stories in action [or go to this link](https://618e876ea6e72f003acdc5be-mednbqlvpw.chromatic.com/)

```bash
yarn start
```

To see some of the components in action (to see Context Menu just right click)
