# Sample "About Me" Website

A clean, modern, single-page **personal portfolio / "describe me" sample website**, built as a static site with HTML, Tailwind CSS, and vanilla JavaScript. It's meant to be used as a template — replace the placeholder name, photo, text, links and data with your own information.

## 🎯 Project Goal
Provide a ready-to-use, responsive personal profile page that showcases:
- Who the person is (About)
- What they're good at (Skills)
- Their career/education timeline (Experience)
- Selected work (Projects)
- A way to get in touch (Contact)

## ✅ Currently Completed Features
- **Responsive fixed navigation bar** with smooth-scroll links and a mobile hamburger menu
- **Hero section** with intro headline, tagline, CTA buttons, social icons, and stat highlight cards
- **About section** with bio text, quick-info grid (name, location, email, role), and 4 value/trait cards
- **Skills section** with animated progress bars (triggered on scroll) and tag pills for tools, technologies, and languages
- **Experience/education timeline** with a vertical line and dated entries
- **Projects section** with 3 sample project cards (image, title, description, tags)
- **Testimonial block** with a sample quote and author
- **Contact section** with contact info list and a front-end-only contact form (client-side validation + demo confirmation message; not wired to a backend/email service)
- **Footer** with dynamic copyright year and back-to-top link
- Scroll-reveal animations, header shadow on scroll, and full mobile responsiveness
- Uses Tailwind CSS (CDN), Font Awesome icons (CDN), and Google Fonts (Poppins + Inter)

## 🌐 Functional Entry Points
- `index.html` — the entire one-page site. In-page anchor sections (no query parameters):
  - `#hero-section`
  - `#about-section`
  - `#skills-section`
  - `#experience-section`
  - `#projects-section`
  - `#contact-section`
- `css/style.css` — custom styles supplementing Tailwind
- `js/main.js` — mobile nav toggle, scroll-reveal, skill bar animation, contact form demo handler, footer year, header scroll effect

## 🗄️ Data Models / Storage
This sample uses **no database or Table API** — all content (bio, skills, experience, projects, contact info) is static text/markup directly in `index.html`. Images are pulled from Unsplash URLs.

## 🚧 Not Yet Implemented
- Contact form does **not** actually send emails (this is a static site; wire it to a service like Formspree/EmailJS, or your own backend, to make it functional)
- No CMS or database-backed content — all text/images must be edited directly in the HTML
- No blog/articles section
- No dark/light theme toggle (currently dark theme only)
- No real personal photo/projects (Unsplash placeholders used)

## 💡 Recommended Next Steps
1. Replace placeholder name, bio, photo, skills, experience, and project data with real content
2. Swap Unsplash placeholder images for your own photos/screenshots
3. Connect the contact form to a service such as [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com) for real message delivery
4. Add real links for social icons (GitHub, LinkedIn, etc.) and project case studies
5. Optionally add a light/dark theme switch or a blog section
6. Once ready, use the **Publish tab** to deploy the site live

## 🚀 Deployment
To make this site live, go to the **Publish tab** and publish your project with one click — it will handle deployment and give you a live URL.
