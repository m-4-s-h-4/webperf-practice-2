1. Added Vite
2. Added bundle analysis
3. Added Lighthouse to build step
4. Added web vitals
5. Added cssnano
6. Added lazy loading to images
7. Added `fetchpriority="high"`
8. Added convertion images to the WebP
9. Eliminated render-blocking resources by preloading critical fonts, using crossorigin for preloaded fonts from different origins, combined Google Fonts requests and defered non-critical CSS or inline critical styles in the `<head>`
   ![alt text](<Screenshot 2024-03-21 at 11.57.11-1.png>)

# SERVER

1. Created /server folder
2. Setup basic ExpressJS app
3. Server should serve built version of the FE app
4. Add Gzip or Brotli compression
5. Add Etags headers, https://expressjs.com/en/api.html
6. Add pm2 setup to run in production `npm start`
7. Added that on the form submit entered data is saved to `reservations.txt`
