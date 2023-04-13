# webpack vs rspack when building web components

## The issue

Rspack changes the names of the classes, and then creates key-value pairs to map the old names to the new ones. Web-components applications cannot read these key-value pairs, and therefore cannot find the classes.

On the other hand, for example, React applications can read these key-value pairs, and therefore can find the classes.

## Contents of this repo

- `apps/webapp` - a web-components application that builds with webpack
- `apps/webapp-rspack` - a web-components application that builds with rspack
- `apps/react-rspack` - a React application that builds with rspack

### Component files

- [`apps/webapp/src/app/app.element.ts`](apps/webapp/src/app/app.element.ts): web-components main element
- [`apps/webapp-rspack/src/app/app.element.ts`](apps/webapp-rspack/src/app/app.element.ts) : web-components with rspack main element
- [`apps/react-rspack/src/app/app.tsx`](apps/react-rspack/src/app/app.tsx): React main component

## How to reproduce

### Init setup

1. Clone this repository
2. `yarn` to install dependencies

### Serving the apps

#### Serve web components app using webpack

```
npx nx serve webapp
```

App serves successfully, and we can see three squares on the page, with different colors and heights.

#### Serve web components app using rspack

```
npx nx serve webapp-rspack
```

App serves successfully, but we see nothing on the page because the classes cannot be found.

#### Serve React app using rspack

```
npx nx serve react-rspack
```

App serves successfully, and we can see three squares on the page, with different colors and heights, since the classes can be found.

### Building the apps

#### Build web components app using webpack

```
npx nx build webapp
```

#### Build web components app using rspack

```
npx nx build webapp-rspack
```

Observe the build output, the `main.<>.css` file with the changed class names, and the `main.<>.js` file with the key-value pairs.

#### Build React app using rspack

```
npx nx build react-rspack
```

Observe the build output, the `main.<>.css` file with the changed class names, and the `main.<>.js` file with the key-value pairs.
