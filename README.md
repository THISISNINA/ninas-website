# Nina's portfolio

## Run it

    npm install
    npm run dev

Then open http://localhost:3000.

## Change something

All the text is in `lib/site.ts`.

Projects are in `projects`. Copy one and change it:

- `slug`: the page address, like `my-project` for /projects/my-project
- `category`: `Website & Tools` or `Data`
- `summary`: one or two lines shown in the list
- `overview`: the longer write-up on the project page
- `github`: the link to the code
- `technologies`, `year`, `link` (a live site) and `image` are optional

Project photos go in `public/projects`, and `image` points to them, like `"/projects/my-project.jpg"`.

For your own photo, put the image in `public` and set `photo` to `"/photo.jpg"`.

## Put it online

Push to `main`. GitHub Actions builds the site and publishes it to GitHub Pages at
https://ninabiancanailon.com (Settings → Pages → Source: GitHub Actions).

The domain is registered at Cloudflare. Its DNS records must stay on "DNS only" (grey cloud).
