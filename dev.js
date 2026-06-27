const GITHUB_USERNAME = 'YOUR_GITHUB_USERNAME'; // 🔁 Replace with your GitHub username

const langColors = {
  JavaScript: '#f1e05a', HTML: '#e34c26', CSS: '#563d7c',
  Python: '#3572A5', TypeScript: '#2b7489', Java: '#b07219',
  'C++': '#f34b7d', Ruby: '#701516', Go: '#00ADD8', default: '#8b949e'
};

async function fetchGitHubData() {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`)
    ]);

    if (!userRes.ok) throw new Error('User not found');

    const user = await userRes.json();
    const repos = await reposRes.json();

    renderUser(user);
    renderRepos(repos);
    window._allRepos = repos;

  } catch (err) {
    document.getElementById('reposGrid').innerHTML =
      `<div class="error">⚠️ Could not load data. Check the username in app.js.<br><small>${err.message}</small></div>`;
  }
}

function renderUser(user) {
  document.getElementById('username').textContent = user.name || user.login;
  document.getElementById('bio').textContent = user.bio || 'No bio yet';
  document.getElementById('repoCount').textContent = user.public_repos;
  document.getElementById('followerCount').textContent = user.followers;
  document.getElementById('followingCount').textContent = user.following;

  const avatar = document.getElementById('avatar');
  avatar.innerHTML = `<img src="${user.avatar_url}" alt="${user.login}" />`;
}

function renderRepos(repos) {
  const grid = document.getElementById('reposGrid');

  if (!repos.length) {
    grid.innerHTML = '<div class="loading">No repositories found.</div>';
    return;
  }

  grid.innerHTML = repos.map(repo => `
    <div class="repo-card" onclick="window.open('${repo.html_url}', '_blank')">
      <a class="repo-name" href="${repo.html_url}" target="_blank" onclick="event.stopPropagation()">
        📁 ${repo.name}
      </a>
      <p class="repo-desc">${repo.description || 'No description provided.'}</p>
      <div class="repo-meta">
        ${repo.language ? `<span><span class="lang-dot" style="background:${langColors[repo.language] || langColors.default}"></span>${repo.language}</span>` : ''}
        <span>⭐ ${repo.stargazers_count}</span>
        <span>🍴 ${repo.forks_count}</span>
      </div>
    </div>
  `).join('');
}

document.getElementById('searchInput').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = (window._allRepos || []).filter(r =>
    r.name.toLowerCase().includes(query) ||
    (r.description || '').toLowerCase().includes(query)
  );
  renderRepos(filtered);
});

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeToggle.textContent = isDark ? '🌙 Dark Mode' : '☀️ Light Mode';
});

fetchGitHubData();

