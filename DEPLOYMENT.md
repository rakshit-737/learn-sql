# Database Systems Learning App - Setup & Deployment Guide

This is a professional React-based learning application for Engineering Database Systems Lab, hosted on GitHub Pages with automated CI/CD deployment.

## 📋 Table of Contents

- [Local Development](#local-development)
- [GitHub Pages Deployment](#github-pages-deployment)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Scripts](#scripts)
- [Troubleshooting](#troubleshooting)

## 🚀 Local Development

### Prerequisites

- Node.js 16+ and npm
- Git

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/learn-sql.git
   cd learn-sql
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

4. **Hot Reload**
   - Changes to source files automatically refresh the browser
   - Errors appear in the console and in the app

### Development Workflow

1. Edit components in `src/components/`
2. Edit topics in `src/components/Topics/`
3. Save files - the app updates automatically
4. Check the browser console for any errors
5. Test all functionality before pushing

## 🌐 GitHub Pages Deployment

### Initial Setup (One-time)

1. **Update package.json Homepage**
   
   Edit `package.json` and replace `your-username` with your actual GitHub username:
   ```json
   "homepage": "https://your-username.github.io/learn-sql/",
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Settings → Pages
   - Select "Deploy from a branch"
   - Branch: `gh-pages`
   - Folder: `/ (root)`
   - Click Save

### Automated Deployment (GitHub Actions)

The `.github/workflows/deploy.yml` workflow automatically:
- Builds the React app when you push to `main` branch
- Deploys the build to the `gh-pages` branch
- Makes the app live at `https://your-username.github.io/learn-sql/`

**No manual deployment needed!** Just push to main and the workflow handles everything.

```bash
git add .
git commit -m "Add new content or features"
git push origin main
```

### Manual Deployment (If needed)

If you need to deploy manually:

```bash
npm run deploy
```

This command:
1. Builds the production app (`npm run build`)
2. Pushes the build to the `gh-pages` branch
3. GitHub Pages automatically serves from that branch

### Verifying Deployment

1. Go to https://your-username.github.io/learn-sql/
2. The app should load and be fully functional
3. Check GitHub Actions tab for workflow status
4. If deployment fails, check the workflow logs

## 📁 Project Structure

```
learn-sql/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions CI/CD
├── public/
│   └── index.html               # HTML entry point
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Navigation header
│   │   ├── Header.css
│   │   ├── Sidebar.jsx          # Topic navigation
│   │   ├── Sidebar.css
│   │   ├── ContentArea.jsx      # Main content display
│   │   ├── ContentArea.css
│   │   └── Topics/
│   │       ├── IntroTopic.jsx
│   │       ├── DMLTopic.jsx
│   │       ├── OperatorsTopic.jsx
│   │       ├── FunctionsTopic.jsx
│   │       ├── JoinsTopic.jsx
│   │       ├── SubqueriesTopic.jsx
│   │       ├── SequencesTopic.jsx
│   │       ├── PLSQLTopic.jsx
│   │       ├── ProceduresTopic.jsx
│   │       ├── TriggersTopic.jsx
│   │       ├── QuizTopic.jsx
│   │       └── QuizTopic.css
│   ├── store/
│   │   └── store.js             # Zustand global state
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # App styling
│   ├── index.js                 # React entry point
│   └── index.css                # Global styles
├── package.json                 # Dependencies & scripts
├── README.md                    # This file
└── DEPLOYMENT.md                # This deployment guide
```

## 🛠 Technologies Used

- **React 18** - UI framework
- **Zustand 4** - State management (lightweight store)
- **react-icons** - Icon library
- **react-scripts 5** - Create React App build tools
- **gh-pages 5** - GitHub Pages deployment
- **CSS3** - Styling with custom layouts

## 📜 Scripts

Available npm commands:

```bash
# Start development server (localhost:3000)
npm start

# Build for production
npm run build

# Run tests
npm run test

# Deploy to GitHub Pages
npm run deploy

# Eject from Create React App (⚠️ irreversible)
npm run eject
```

## 🔧 Troubleshooting

### App doesn't load locally

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

### GitHub Pages not updating

1. Check workflow status in GitHub Actions tab
2. Verify GitHub Pages is set to deploy from `gh-pages` branch
3. Verify `homepage` field in package.json is correct
4. Clear browser cache or use incognito mode

### White page on GitHub Pages

1. Check browser console for errors (F12)
2. Verify correct GitHub username in package.json `homepage`
3. Wait 1-2 minutes after push for deployment
4. Check Actions tab for workflow errors

### Module not found errors

```bash
# Ensure all dependencies are installed
npm install

# Clear cache
npm install --save-dev
```

### Build fails

```bash
# Check for syntax errors
npm run build

# Output shows specific errors (fix them)
# Common issue: Missing imports or typos in component names
```

## 📚 Learning Content

The app includes comprehensive lessons on:

1. **DML Commands** - SELECT, INSERT, UPDATE, DELETE
2. **Operators** - Comparison, logical, special operators
3. **Functions** - String, numeric, date, aggregate functions
4. **Joins** - INNER, LEFT, RIGHT, FULL, CROSS, SELF joins
5. **Subqueries & Views** - Nested queries and virtual tables
6. **Sequences & Synonyms** - Auto-increment and aliases
7. **PL/SQL Basics** - Variables, loops, control structures
8. **Procedures & Functions** - Reusable code blocks
9. **Triggers & Cursors** - Automated actions and row processing
10. **Quiz & Assessment** - Test your knowledge

Each topic includes:
- Detailed explanations
- Code examples
- Practice exercises
- Interactive assessment

## 🤝 Contributing

To add new content:

1. Create new topic components in `src/components/Topics/`
2. Add topic to ContentArea.jsx imports
3. Add topic to the topics list in Sidebar.jsx
4. Create corresponding CSS file with `.css` extension
5. Test locally before pushing

## 📞 Support

For issues or questions:

1. Check GitHub Issues
2. Review the browser console for error messages
3. Check GitHub Actions logs for deployment issues
4. Verify all dependencies are installed

## 📄 License

This educational project is available for learning purposes.

---

**Happy Learning! 🎓**

Last Updated: 2024
