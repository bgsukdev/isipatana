# Isipathana College Old Boys' Association Website

A modern, professional website for the Isipathana College Old Boys' Association, redesigned with inspiration from the Ananda College OBA website while maintaining the exact menu structure and content from the original Isipathana OBA website.

## 🌟 Features

- **Premium Design**: Modern, professional aesthetic with a **Dark Green and Light Green** color scheme
- **Exact Menu Structure**: Navigation menu matching the original Isipathana OBA website, with simplified dropdowns for key sections
- **Real Imagery**: Integrated high-quality images from the public folder across all main sections (Hero, About, Education, Sports, AGM, etc.)
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dynamic Navigation**: Multi-level dropdown menus with smooth animations
- **Hero Slider**: Engaging homepage slider with real imagery and animations
- **Comprehensive Pages**: All major sections including Education, Sports, AGM, Membership, News, Downloads, and Contact
- **SEO Optimized**: Proper meta tags, semantic HTML, and optimized structure
- **Fast Performance**: Built with Next.js 16 and Turbopack for optimal performance

## 🎨 Design System

### Color Palette
- **Primary Dark Green**: `#0D5C2F` - Main brand color
- **Accent Light Green**: `#4CAF50` - Highlight and CTA color
- **Neutral Grays**: Various shades for text and backgrounds

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-serif)

## 📋 Navigation Menu Structure

The website features the exact menu structure from the original Isipathana OBA website:

### 1. **Home**
   - Homepage with hero slider, core values, service areas, and statistics

### 2. **About Us**
   - About OBA
   - Executive Committee
   - Past Presidents
   - Constitution

### 3. **Education Projects**
   - Education Development
   - Scholarships
   - Infrastructure Projects
   - Academic Support

### 4. **Sports**
   - Sports Overview
   - Cricket
   - Rugby
   - Athletics
   - Swimming
   - Other Sports

### 5. **AGM 2024/2025**
   - AGM Information
   - Nomination Forms
   - Meeting Minutes
   - Annual Reports

### 6. **Membership**
   - Become a Member
   - Membership Benefits
   - Member Login
   - Affiliated Groups

### 7. **News & Events**
   - Latest News
   - Upcoming Events
   - Photo Gallery
   - Announcements

### 8. **Downloads**
   - Membership Form
   - Leaving Certificate Form
   - Nomination Forms
   - Documents

### 9. **Contact Us**
   - Contact Form
   - Contact Information
   - Office Hours
   - Social Media Links

## 📁 Project Structure

```
isipatana/
├── app/
│   ├── about/
│   │   └── page.tsx              # About OBA page
│   ├── education/
│   │   └── page.tsx              # Education Development page
│   ├── sports/
│   │   └── page.tsx              # Sports Management page
│   ├── affiliated/
│   │   └── page.tsx              # Affiliated Associations page
│   ├── agm/
│   │   └── page.tsx              # AGM 2024/2025 page
│   ├── membership/
│   │   └── page.tsx              # Membership page
│   ├── news/
│   │   └── page.tsx              # News & Events page
│   ├── downloads/
│   │   └── page.tsx              # Downloads page
│   ├── contact/
│   │   └── page.tsx              # Contact Us page
│   ├── globals.css               # Global styles and design system
│   ├── layout.tsx                # Root layout with Header and Footer
│   └── page.tsx                  # Homepage
├── components/
│   ├── Header.tsx                # Navigation header component
│   └── Footer.tsx                # Footer component
├── public/                       # Static assets
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd c:\Users\aaa\Desktop\isipatana
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 📄 Available Pages

- **Home** (`/`) - Homepage with hero slider, about section, core values, service areas, and statistics
- **About OBA** (`/about`) - History, mission, vision, and executive committee
- **Education Development** (`/education`) - Educational initiatives and impact
- **Sports Management** (`/sports`) - Sports programs, facilities, and achievements
- **Affiliated Associations** (`/affiliated`) - Network of affiliated groups and benefits
- **AGM 2024/2025** (`/agm`) - Annual General Meeting information and nomination forms
- **Membership** (`/membership`) - Membership application process and benefits
- **News & Events** (`/news`) - Latest news and upcoming events
- **Downloads** (`/downloads`) - Important forms and documents
- **Contact Us** (`/contact`) - Contact form and information

## 🛠️ Technologies Used

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Icons**: Heroicons (SVG)

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Core Values

The website showcases four core values:
1. **Integrity** - Upholding the highest standards
2. **Partnership** - Collaborating for common goals
3. **Excellence** - Striving for the highest quality
4. **Innovation** - Embracing new ideas and approaches

## 📊 Service Areas

Three main service areas are highlighted:
1. **Education Development** - Supporting academic excellence
2. **Sports Management & Development** - Building champions
3. **Affiliated Associations** - Global network of old boys

## 🔧 Build for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## 📝 Customization

### Updating Colors
Edit the CSS variables in `app/globals.css`:
```css
:root {
  --primary-blue: #003366;
  --accent-gold: #FFB81C;
  /* ... other colors */
}
```

### Adding New Pages
Create a new folder in the `app` directory with a `page.tsx` file:
```bash
app/new-page/page.tsx
```

### Modifying Navigation
Update the `menuItems` array in `components/Header.tsx`

## 🌐 Deployment

This Next.js application can be deployed to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## 📞 Contact Information

**Isipathana College Old Boys' Association**
- Email: info@iobauk.org
- Phone: +94 11 2 123 456
- Address: Isipathana College, Colombo 05, Sri Lanka

## 📄 License

© 2026 Isipathana College Old Boys' Association. All rights reserved.

## 🙏 Acknowledgments

- Design inspiration from Ananda College OBA website (https://www.anandacollegeoba.org/)
- Original menu structure and content from Isipathana OBA website (https://isipathanaoba.lk/)
- Built with modern web technologies for optimal performance

## ✨ Key Features Implemented

### Navigation
- ✅ Exact menu structure from original Isipathana website
- ✅ 9 main menu items with dropdown submenus
- ✅ Mobile-responsive navigation
- ✅ Smooth animations and transitions

### Pages Created
- ✅ Home - Hero slider, core values, service areas
- ✅ About Us - History, mission, vision
- ✅ Education Projects - Initiatives and impact
- ✅ Sports - Programs and achievements
- ✅ Affiliated Associations - Network and benefits
- ✅ AGM 2024/2025 - Meeting information
- ✅ Membership - Application process
- ✅ News & Events - Latest updates
- ✅ Downloads - Forms and documents
- ✅ Contact Us - Contact form and info

### Design
- ✅ Professional blue and gold color scheme
- ✅ Modern typography (Playfair Display + Inter)
- ✅ Smooth animations and hover effects
- ✅ Fully responsive design
- ✅ SEO optimized

---

**Note**: This is a redesigned website that combines the professional aesthetic of the Ananda College OBA website with the exact menu structure and content from the original Isipathana College OBA website.
# isipathanaoba
