## Why Midnight Sun

![Intro](./public/whyMidnightSun.gif)

I was fascinated by the evening sun when I first arrived in Stockholm. It took me a little bit of time to understand why.

There are many articles explaining this, but I don't find them very intuitive.

So, I built this interactive app to help people like me to understand this phenomenon in an easier and more intuitive way.

## App Introduction

I wrote an article that reveals the core part of this app, [here](https://dirt-woodwind-424.notion.site/Why-Midnight-Sun-Dev-Notes-f6bfb29cc9af46a4b9dac9f4f5441e87?pvs=25)

### Science part behind this app

Midnight Sun is primarily observed within the Arctic and Antarctic Circles, where the sun remains visible at the local midnight around the summer solstice. The app leverages interactive 3D models and simulations to demonstrate how the sun is moving in the different time of the year at the different places. Users can manipulate variables such as time of year and geographical latitude to see how these factors influence the occurrence of the Midnight Sun, thereby gaining a deeper understanding of this.

### Tech stacks

- [TypeScript](https://www.typescriptlang.org)
- [Next.js](https://nextjs.org)
- [Three.js](https://threejs.org)
- [React Three Fiber GitHub](https://github.com/pmndrs/react-three-fiber)
- [Drei GitHub](https://github.com/pmndrs/drei)
- [React-Leaflet](https://react-leaflet.js.org)
- [NextUI](https://nextui.org)
- [TailwindCSS](https://tailwindcss.com)

## Run Locally

No envrionment variables are needed.

1. Clone the project by `git clone https://github.com/Finns841594/why_midnight_sun`
2. Install dependencies by `npm i`
3. Run locally by `npm run dev`
