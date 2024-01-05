# Next.js 14 app directory with i18next, MUI & Storybook

- Material UI (MUI)
- Storybook
- TypeScript
- i18next locale routes
- Export static site to subfolder
- GitHub deploy workflow (App & Storybook)
- Theme switch toolbar
- Language switch toolbar
- *Storybook*
  - Themes (MUI)
  - Language switch
  - Dynamic path in app by using .env
## TODO
- MUI theme from tokens
- Images and SVG
  - Next/Image component usage
  - Also check images on Storybook
- *Storybook*
  - Viewports
  - (Figma designs embed)
  - (Accessibility addon)
- *Chromatic Story Modes*
  - Themes
  - Languages
  - Viewports

# Atomic Design System, Figma Tokens, Next.js, Storybook, Emotion, MUI, Chromatic example in TypeScript

## Tools and tech
- Next.js
- Storybook
- TypeScript
- Material UI
- i18next
- Emotion
- Chromatic
- Tokens Studio for Figma

## Development (App)
**next/image & Storybook basepath workaround:**
- Create/modify .env file and set NEXT_PUBLIC_BASE_PATH to empty/[spacebar]
- This also allows to run app in dev mode without subfolder in URL
- Open locale route http://localhost:3000/en/ because root gives 404

```bash
NEXT_PUBLIC_BASE_PATH=
```

```bash
npm install
npm run dev
```

## Development (Storybook)
```bash
npm run storybook
```

## Deployment

- Project is set to use Static Site Generation (SSG)
- No cloud application platform needed
- Run build command below and upload dist/ files to server
- Also upload *index.html* from root dir that does the locale redirecting
```bash
npm run build
```

### Deployment: GitHub Pages

- Activate workflow by uncommenting line 27 #jobs in .github\workflows\deploy.yml
- Next.js app is deployed into GitHub Pages with locale (language) routes
- Action creates copy of *index.html* in root folder that does the locale redirecting
- Action also renders static copy of Storybook into */storybook* route
- GitHub Pages most likely runs in subfolder so set .env basepath to repository name
```bash
NEXT_PUBLIC_BASE_PATH=/github-repository-name
```

### Deployment: Subdirectory project (SSG)

- When deploying app into subdirectory on server set base path in .env
- Run normal build command above
- Move contents of 'dist' folder into /anyappname/ folder on server
- Site should be visible at yourdomain.com/anyappname
```bash
NEXT_PUBLIC_BASE_PATH=/anyappname
```

## Deployment: Storybook

- Run build command blow and move storybook-static to server

```bash
npm run build-storybook
```

## Code formatting

```bash
npm run format:fix
```

## VS Code plugins (recommended)

- vscode-styled-components

## Design tokens (optional integration)

- Create Figma account
- Create design file or use template below  
  https://www.figma.com/community/file/1304079459895956066
- Use Tokens Studio to generate tokens
  - A: Link Tokens Studio to repository and push tokens.json
  - B: Copy and paste tokens.json contents manually
- Generate tokens in local repository

**Custom converter**

- Color palette, Fonts, Shadows (not implemented)
- _Note: parent element is 'Theme'_
- default args: light light_theme ./themes/tokens.json Theme
  - arg 1: palette name in json file
  - arg 2: destination json name
  - arg 3: source json path
  - arg 3: parent element

```bash
node themes/tools/muigen.mjs
node themes/tools/muigen.mjs dark
node themes/tools/muigen.mjs dark muitheme
node themes/tools/muigen.mjs dark darkmuitheme ./themes/tokens.json
node themes/tools/muigen.mjs dark darkmuitheme ./themes/tokens.json Theme
```

**Official Style Dictionary converter (not implemented in this project)**

- tokens.json produced by Tokens Studio for Figma can't be used as it is
- Official conversion tools available:
  - @tokens-studio/sd-transform
  - style-dictionary

## Chromatic visual tests (optional integration)

- Create Chromatic account
- Get your token from chromatic.com/your_app ->  
  Manage -> Configure -> Setup Chromatic with this project token

```bash
npx chromatic --project-token=your_token_goes_here
```

_or create .env file and add variable project-token=your_token_goes_here_

```bash
npm run chromatic
```

## Figma designs in Storybook (optional integration)

- Embed Figma designs into Storybook with @storybook/addon-designs
- Create Figma Access Token  
  https://www.figma.com/developers/api#access-tokens
- Create .env file to repository root
- Add variable STORYBOOK_FIGMA_ACCESS_TOKEN=your_token_goes_here

## Weather widget

- Get API key from openweathermap.org
- Create .env.local file to repository root
- Add variable NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_goes_here

## Sources
https://github.com/i18next/next-app-dir-i18next-example
https://github.com/vercel/next.js/tree/canary/examples/with-emotion-swc  
https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs-ts  
https://codesandbox.io/s/nextjs-typescript-with-mui-material-and-next-themes-04z4m9  
https://storybookjs.github.io/addon-designs/?path=/story/docs-figma-figspec-readme--page
