# Drew's Personal Portfolio Website

A modern, responsive portfolio website showcasing photography, travel, website design, cooking, and creative projects. Built with Next.js, React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Photography Gallery** - Showcase your best shots with an elegant gallery
- **Travel Blog** - Share your adventures and travel stories
- **Website Design Portfolio** - Display your web design and development work
- **Cooking Section** - Feature recipes and food photography
- **Creative Projects** - Highlight diverse creative endeavors
- **Responsive Design** - Optimized for all devices
- **Modern Stack** - Built with Next.js 15, React 18, and TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your system
- npm, yarn, or pnpm package manager

### Installation

1. **Clone or download this project**
2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── cooking/           # Cooking & recipes section
│   ├── design/            # Website design portfolio
│   ├── photography/       # Photography gallery
│   ├── projects/          # Creative projects showcase
│   ├── travel/            # Travel blog
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable React components
public/
├── images/               # Static images and assets
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding Your Content

1. **Photography**: Add your images to `public/images/photography/`
2. **Travel**: Update content in `src/app/travel/page.tsx`
3. **Design Work**: Showcase projects in `src/app/design/page.tsx`
4. **Cooking**: Add recipes and food photos in `src/app/cooking/page.tsx`
5. **About**: Personalize `src/app/about/page.tsx` with your story

### Styling

- Built with **Tailwind CSS** for rapid styling
- Custom CSS in `src/app/globals.css`
- Responsive design out of the box
- Dark mode support included

### Adding New Sections

1. Create a new folder in `src/app/[section-name]/`
2. Add a `page.tsx` file with your content
3. Update navigation in the main layout if needed

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms
- **Netlify**: Deploy directly from Git
- **AWS**: Use AWS Amplify for easy deployment
- **Self-hosted**: Build with `npm run build` and serve the `out` folder

## 🔧 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm
- **Development**: ESLint for code quality

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and make it your own! This is designed to be a starting point for your personal portfolio.

---

**Built with ❤️ by Drew**

*Happy coding and showcasing your creative work!*