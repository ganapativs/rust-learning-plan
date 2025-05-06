# Rust Learning Plan

This directory contains the source files for the Rust Learning Plan documentation site, built with [mdBook](https://rust-lang.github.io/mdBook/).

> Note: Parts of this repository were created with the assistance of AI tools. If you notice anything that could be improved or have suggestions, please contribute via pull requests.

## Getting Started

### Prerequisites

- [Rust and Cargo](https://www.rust-lang.org/tools/install)
- mdBook: Once you have Rust installed, you can install mdBook with:
  ```bash
  cargo install mdbook
  ```

### Project Structure

```
rust-learning-plan/
├── book/                 # Generated site (don't edit directly)
├── src/                  # Source markdown files
│   ├── beginner/         # Beginner-level content (Weeks 1-6)
│   ├── intermediate/     # Intermediate-level content (Weeks 7-12)
│   ├── advanced/         # Advanced-level content (Weeks 13-23)
│   ├── expert/           # Expert-level content (Week 24)
│   ├── SUMMARY.md        # Table of contents
│   └── *.md              # Other main pages
├── .github/workflows/    # GitHub Actions workflow for deployment
└── book.toml             # mdBook configuration
```

## Development Commands

### Building the Book

To build the static site (generates in the `book/` directory):

```bash
cd rust-learning-plan
mdbook build
```

### Local Preview

To serve the book locally and watch for changes:

```bash
cd rust-learning-plan
mdbook serve
```

This will start a local server at [http://localhost:3000](http://localhost:3000)

To open the browser automatically while serving:

```bash
mdbook serve --open
```

## Adding or Modifying Content

1. **Add a new page**:

   - Create a new markdown file in the appropriate difficulty folder
   - Add the page to `src/SUMMARY.md` in the correct section

2. **Update existing content**:
   - Edit the markdown files directly
   - Run `mdbook serve` to see changes immediately

## Content Guidelines

- File naming convention: `feature_name-weekN.md` (e.g., `ecosystem-week1.md`)
- Each difficulty level has its own folder and README.md
- Maintain the weekly progression within each difficulty level

## Configuration

The `book.toml` file contains settings for the mdBook site. Key configurations:

- Theme settings
- Search functionality
- Section folding
- Math support

## Deployment

### Manual Deployment

To deploy the site manually:

1. Build the book: `mdbook build`
2. Copy the contents of the `book/` directory to your web server

### Automated Deployment with GitHub Actions

This project includes a GitHub Actions workflow for automatic deployment to GitHub Pages:

1. The workflow is defined in `.github/workflows/deploy-docs.yml`
2. It triggers on pushes to the `main` branch that affect files in the `rust-learning-plan/` directory
3. The workflow builds the mdBook and deploys it to the `gh-pages` branch
4. Your documentation will be available at `https://ganapativs.github.io/rust-learning-plan/`

To set up automated deployment:

1. Push this repository to GitHub
2. Enable GitHub Pages in your repository settings, using the `gh-pages` branch as the source
3. Ensure your repository allows GitHub Actions to create and push to the `gh-pages` branch

## Troubleshooting

- If you encounter SUMMARY.md parsing errors, check the indentation and formatting in that file
- For rendering issues, ensure all markdown follows standard syntax
- If new pages aren't appearing, verify they're correctly listed in SUMMARY.md
- For deployment issues, check the GitHub Actions logs in your repository

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
