// PostCSS configuration: use the new @tailwindcss/postcss adapter plugin
// This avoids the warning about using `tailwindcss` directly as a PostCSS plugin.
module.exports = {
  plugins: [
    require('@tailwindcss/postcss')
  ]
}
