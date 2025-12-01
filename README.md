# Zednine Portfolio

Minimalist portfolio website for Zednine woodworking, showcasing custom furniture, cabinets, and woodwork projects.

## Tech Stack

- **Next.js 15** (App Router) with static export
- **TypeScript**
- **Tailwind CSS**
- **yet-another-react-lightbox** for portfolio images
- **Cloudflare Workers Sites** for hosting

## Project Structure

```
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page (hero + about)
│   ├── portfolio/
│   │   └── page.tsx       # Portfolio page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   └── PortfolioGrid.tsx
├── public/
│   └── images/            # Portfolio images (23 photos)
└── wrangler.toml          # Cloudflare config
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000
```

## Build

```bash
# Create static export
npm run build

# Output will be in /out directory
```

## Deploy to Cloudflare Workers (with Assets)

### Via Command Line

1. Install Wrangler CLI (if not already installed):
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Build the site:
```bash
npm run build
```

4. Deploy:
```bash
wrangler deploy
```

### Via CI/CD (GitHub Actions, etc)

In your CI/CD workflow, use:

```bash
npm run build
npx wrangler deploy
```

Make sure to set these environment variables in your CI/CD settings:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## Pages

- **Home** (`/`): Hero section with IMG_8308.jpeg background and about section
- **Portfolio** (`/portfolio`): Grid of 23 woodwork images with lightbox

## Features

- Fully static site (no server required)
- Responsive design (mobile, tablet, desktop)
- Image lightbox for portfolio viewing
- Smooth scroll from hero to about section
- Clean, minimalist aesthetic focused on showcasing the work

## Updating Content

### Change About Text
Edit `components/About.tsx`

### Add/Remove Portfolio Images
1. Add images to `public/images/`
2. Update the images array in `components/PortfolioGrid.tsx`
3. Rebuild and redeploy

### Change Hero Image
Edit `components/Hero.tsx` to reference a different image

### Update Company Name or Tagline
Edit `components/Hero.tsx` and `components/Navbar.tsx`
