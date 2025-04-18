# Stickerify

Stickerify is a web application that lets you upload an image and automatically adds a “sticker” style contour around it. Built with [Astro](https://astro.build/) and deployed on Cloudflare Workers, it provides a fast, responsive UI and client‑side processing for sticker contour generation.

## Features

- Upload any image (`png`, `jpg`, `webp`, etc.)
- Generate a customizable sticker contour
- Download the processed image
- Light & dark theme support
- Responsive design for all screen sizes

## Tech Stack

- Framework: [Astro](https://astro.build/)
- UI Components: React + [@base-ui-components/react](https://www.npmjs.com/package/@base-ui-components/react)
- Styles: Tailwind CSS
- Cloudflare Workers for hosting

## Getting Started

### Prerequisites

- Node.js ≥16
- `pnpm` (or `npm` / `yarn`)
- A Cloudflare account & API token (for deployment)

### Installation

```bash
pnpm install
```

### Development

Runs the local dev server with Astro:

```bash
pnpm run dev
```

Open your browser at `http://localhost:4321` to view the app.

### Build

Generate a production build:

```bash
pnpm run build
```

### Preview

Serve the production build locally:

```bash
pnpm run preview
```

### Deploy

Deploy to Cloudflare Workers:

```bash
pnpm run deploy
```

> For a dry‐run deploy (no production change), use:
>
> ```bash
> pnpm run check
> ```

## Usage

1. Open the app in your browser.
2. Click **Upload Image** and select a file.
3. Click **Add Sticker Contour**.
4. Download the resulting image.

## Contributing

1. Fork the repo.
2. Create a feature branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m 'feat: Add your feature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a Pull Request.

Please follow the existing code style and run `pnpm run format` before submitting.

## License

MIT © Stickerify Contributors  
See [LICENSE](LICENSE) for details.
