# Tulfa App

Tulfa App is a modern web application built with Vite and React. It showcases a responsive and interactive user interface with features like image sliders, modals, and reusable components. The app is designed to be modular, scalable, and easy to maintain.

## What i have Done

- **Responsive Design**: Built with mobile-first principles for a seamless user experience across devices.
- **Reusable Components**: Modular components like `ResponsiveImage`, `VideoPlayer`, and custom hooks for easy reuse.
- **Interactive Elements**: Hard Coded auto-sliders, manual sliders, and modals and animation.
- **Performance Optimized**: Uses lazy loading, modern image formats (WebP), and Convert the images to CDN.
- **Custom Hooks**: Includes reusable hooks like `useImageSlider`, `useModal`, and `useScrollTrigger`.
- **Higher order component**: use a advanced React design pattern like the higher order component
- **Code Refactoring concept**:that makes the component Smaller and Readable and faster (performance and maintenance) 
- **Css**: use Variables and  add a global className for animations in the app.css to minimize the code and order the css in a good structure 

## The App After the LightHouse Test:

![Furniture Image](public/lightHouse.png)

## Folder Structure
```
    └── 📁public
        └── 📁videos
            └── banner.webm
        └── vite.svg
    └── 📁src
        └── App.css
        └── App.jsx
        └── 📁assets
            └── AnimLogo.jsx
            └── CloseButtonIcon.jsx
            └── PlusIcon.jsx
            └── text.svg
            └── tuflaColorfulIcon.jsx
            └── tuflaIcon.jsx
        └── 📁Components
            └── 📁AutoSlider
                └── AutoSlider.css
                └── AutoSlider.jsx
            └── 📁BannerSection
                └── BannerSection.css
                └── BannerSection.jsx
                └── index.jsx
            └── 📁CustomizedSofas
                └── CustomizedSofas.css
                └── CustomizedSofas.jsx
                └── index.js
            └── 📁FurnitureSection
                └── FurnitureSection.css
                └── FurnitureSection.jsx
                └── index.jsx
            └── 📁GalleryImage
                └── GalleryImage.jsx
                └── index.jsx
            └── 📁ManualSlider
                └── index.jsx
                └── ManualSlider.css
                └── ManualSlider.jsx
            └── 📁Modals
                └── 📁CloserLookModal
                    └── CloserLookModal.css
                    └── CloserLookModal.jsx
                    └── index.jsx
                └── 📁RoomDetailsModal
                    └── index.jsx
                    └── RoomDetailsModal.css
                    └── RoomDetailsModal.jsx
            └── 📁OutroSection
                └── index.jsx
                └── OutroSection.css
                └── OutroSection.jsx
            └── 📁SizeOfFurnitureSection
                └── index.jsx
                └── SizeOfFurnitureSection.css
                └── SizeOfFurnitureSection.jsx
            └── 📁VideoSection
                └── index.jsx
                └── VideoSection.css
                └── VideoSection.jsx
            └── 📁WorkCard
                └── index.jsx
                └── WorkCard.css
                └── WorkCard.jsx
            └── 📁WorkPresentation
                └── index.jsx
                └── WorkPresentation.css
                └── WorkPresentation.jsx
        └── 📁CustomHooks
            └── useImageSlider.jsx
            └── useModal.jsx
            └── useScrollTrigger.jsx
        └── 📁HOC
            └── LazyLoader.jsx
        └── index.css
        └── 📁Layouts
            └── Main.jsx
            └── 📁StickySection
                └── StickySection.css
                └── StickySection.jsx
        └── main.jsx
        └── 📁ReUsableComponents
            └── 📁ResponsiveImage
                └── index.jsx
                └── ResponsiveImage.css
                └── ResponsiveImage.jsx
            └── 📁VideoPlayer
                └── index.jsx
                └── VideoPlayer.jsx
        └── 📁Shared
            └── 📁navbar
                └── index.jsx
                └── navbar.css
                └── navbar.jsx
    └── .gitignore
    └── eslint.config.js
    └── index.html
    └── package-lock.json
    └── package.json
    └── README.md
    └── vite.config.js
```