# QC Kinetix Clone - React

This project is a complete replica of the QC Kinetix website, converted from HTML/WordPress to React with Vite.

## 🚀 Features

- ✅ Complete header with sticky navigation and dropdown menus
- ✅ Hero section with background video
- ✅ Statistics section (10 Billion, 35,000+, 170+)
- ✅ "What is Regenerative Medicine" section
- ✅ Interactive human body map
- ✅ "QC Kinetix Difference" section
- ✅ "Benefits of Regenerative Medicine" section
- ✅ Testimonials carousel (Success Stories)
- ✅ Complete contact form
- ✅ Complete footer with location search
- ✅ Responsive design for mobile, tablet and desktop
- ✅ Animations and hover effects identical to the original

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

The project will run on `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header/          # Header with navigation
│   ├── Hero/            # Hero section with video
│   ├── Stats/           # Statistics section
│   ├── Sections/        # All content sections
│   │   ├── WhatIsRegenerative.jsx
│   │   ├── BodyPainMap.jsx
│   │   ├── QCKinetixDifference.jsx
│   │   ├── Benefits.jsx
│   │   └── Testimonials.jsx
│   ├── Forms/           # Forms
│   │   └── ContactForm.jsx
│   ├── Footer/          # Complete footer
│   └── Common/          # Common components
├── styles/
│   └── global.css       # Global styles
├── App.jsx              # Main component
└── main.jsx             # Entry point
```

## 🎨 Technologies Used

- React 19
- Vite
- Tailwind CSS
- Swiper (for testimonials carousel)
- CSS Modules

## 📝 Notes

- All images and resources are referenced from the original QC Kinetix URL
- The contact form needs backend integration to work completely
- The human body map has hover functionality to highlight body parts

## 🔧 Customization

To change colors, fonts or other styles, edit:
- `src/styles/global.css` - Global styles
- CSS variables in `:root` within `global.css`
- Each component has its own CSS file in its folder

## 📱 Responsive

The design is fully responsive and adapts to:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🐛 Troubleshooting

If you encounter issues with images:
- Verify that image URLs are accessible
- Some images may require CORS enabled

If the video doesn't play:
- Verify that the browser allows autoplay
- Some browsers require user interaction first
