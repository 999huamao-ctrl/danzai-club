// 蛋仔乐园 - 主应用脚本

// 配置 - 需要替换为实际的 GitHub 信息
const CONFIG = {
    githubOwner: 'OWNER', // 将被替换为实际的 GitHub 用户名
    githubRepo: 'danzai-club',
    playersLabel: 'player',
    activitiesLabel: 'activity'
};

// 玩家数据（示例数据，实际从 GitHub Issues 加载）
const SAMPLE_PLAYERS = [
    {
        name: '蛋仔小可爱',
        avatar: '🐰',
        gender: '女',
        age: '11 岁',
        school: '小学五年级',
        hobby: '画画、跳舞',
        gameMode: '竞速赛、生存赛',
        rank: '鸵鸟蛋 V',
        payment: '低氪',
        playTime: '每天 2 小时',
        eggId: 'EGG123456',
        wechat: 'danzi_xxx'
    },
    {
        name: '快乐蛋仔',
        avatar: '🐼',
        gender: '男',
        age: '10 岁',
        school: '小学四年级',
        hobby: '运动、游戏',
        gameMode: '团队赛',
        rank: '鸡蛋 III',
        payment: '中氪',
        playTime: '周末 4 小时',
        eggId: 'EGG789012',
        wechat: 'happy_egg'
    },
    {
        name: '星星公主',
        avatar: '🦄',
        gender: '女',
        age: '12 岁',
        school: '初中一年级',
        hobby: '音乐、阅读',
        gameMode: '生存赛、躲猫猫',
        rank: '鹅蛋 I',
        payment: '低氪',
        playTime: '每天 1 小时',
        eggId: 'EGG345678',
        wechat: 'star_princess'
    }
];

// 活动数据（示例数据，实际从 GitHub Issues 加载）
const SAMPLE_ACTIVITIES = [
    {
        title: '🎉 3 月周末欢乐赛',
        date: '2026 年 3 月 28 日 -30 日',
        content: '本周六周日下午 3 点，组织蛋仔派对团队赛！欢迎所有段位的小伙伴参加~ 获胜队伍有神秘小礼物哦！🎁'
    },
    {
        title: '🏆 月度蛋仔竞选大赛',
        date: '2026 年 4 月 1 日 -7 日',
        content: '第一届蛋仔乐园月度竞选开始啦！展示自己的蛋仔装扮和游戏技巧，赢取"月度蛋仔王"称号！详情请关注后续公告~'
    }
];

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    loadPlayers();
    loadActivities();
});

// 加载玩家数据
async function loadPlayers() {
    const playersGrid = document.getElementById('players-grid');
    
    try {
        // 尝试从 GitHub Issues 加载
        const players = await fetchPlayersFromGitHub();
        if (players.length > 0) {
            renderPlayers(playersGrid, players);
        } else {
            renderPlayers(playersGrid, SAMPLE_PLAYERS);
        }
    } catch (error) {
        console.log('GitHub 加载失败，使用示例数据:', error);
        renderPlayers(playersGrid, SAMPLE_PLAYERS);
    }
}

// 从 GitHub 获取玩家数据
async function fetchPlayersFromGitHub() {
    const url = `https://api.github.com/repos/${CONFIG.githubOwner}/${CONFIG.githubRepo}/issues?labels=${CONFIG.playersLabel}&state=all`;
    
    const response = await fetch(url);
    if (!response.ok) throw new Error('GitHub API 请求失败');
    
    const issues = await response.json();
    return issues.map(issue => parsePlayerIssue(issue));
}

// 解析玩家 Issue
function parsePlayerIssue(issue) {
    // 从 Issue 内容中解析玩家信息
    const body = issue.body || '';
    const player = {
        name: issue.title.replace('【玩家注册】', '').trim(),
        avatar: getAvatarFromIssue(body),
        gender: extractField(body, '性别'),
        age: extractField(body, '年龄'),
        school: extractField(body, '职业/就学阶段'),
        hobby: extractField(body, '爱好'),
        gameMode: extractField(body, '爱玩的游戏模式'),
        rank: extractField(body, '游戏段位'),
        payment: extractField(body, '氪金等级'),
        playTime: extractField(body, '上线时长'),
        eggId: extractField(body, '蛋号'),
        wechat: extractField(body, '微信号')
    };
    return player;
}

// 从 Issue 内容提取字段
function extractField(body, fieldName) {
    const regex = new RegExp(`${fieldName}[:：]\\s*(.+)`, 'i');
    const match = body.match(regex);
    return match ? match[1].trim() : '未填写';
}

// 获取头像
function getAvatarFromIssue(body) {
    const avatarMatch = body.match(/头像[:：]\\s*(🐰|🐼|🦄|🐱|🐶|🦊|🐻|🐸|🐵|🦁)/i);
    return avatarMatch ? avatarMatch[1] : '🥚';
}

// 渲染玩家卡片
function renderPlayers(container, players) {
    container.innerHTML = players.map(player => `
        <div class="player-card">
            <div class="player-avatar">${player.avatar}</div>
            <h3 class="player-name">${player.name}</h3>
            <div class="player-info">
                <p><strong>性别:</strong> ${player.gender}</p>
                <p><strong>年龄:</strong> ${player.age}</p>
                <p><strong>学校:</strong> ${player.school}</p>
                <p><strong>爱好:</strong> ${player.hobby}</p>
                <p><strong>游戏模式:</strong> ${player.gameMode}</p>
                <p><strong>段位:</strong> ${player.rank}</p>
                <p><strong>氪金:</strong> ${player.payment}</p>
                <p><strong>在线:</strong> ${player.playTime}</p>
                <p><strong>蛋号:</strong> ${player.eggId}</p>
                <div style="margin-top: 10px;">
                    <span class="player-tag">🎮 蛋仔派对</span>
                </div>
            </div>
        </div>
    `).join('');
}

// 加载活动数据
async function loadActivities() {
    const activitiesList = document.getElementById('activities-list');
    
    try {
        // 尝试从 GitHub Issues 加载
        const activities = await fetchActivitiesFromGitHub();
        if (activities.length > 0) {
            renderActivities(activitiesList, activities);
        } else {
            renderActivities(activitiesList, SAMPLE_ACTIVITIES);
        }
    } catch (error) {
        console.log('GitHub 加载失败，使用示例数据:', error);
        renderActivities(activitiesList, SAMPLE_ACTIVITIES);
    }
}

// 从 GitHub 获取活动数据
async function fetchActivitiesFromGitHub() {
    const url = `https://api.github.com/repos/${CONFIG.githubOwner}/${CONFIG.githubRepo}/issues?labels=${CONFIG.activitiesLabel}&state=all`;
    
    const response = await fetch(url);
    if (!response.ok) throw new Error('GitHub API 请求失败');
    
    const issues = await response.json();
    return issues.map(issue => ({
        title: issue.title.replace('【活动公告】', '').trim(),
        date: formatDate(issue.created_at),
        content: issue.body || ''
    }));
}

// 格式化日期
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// 渲染活动卡片
function renderActivities(container, activities) {
    container.innerHTML = activities.map(activity => `
        <div class="activity-card">
            <h3 class="activity-title">${activity.title}</h3>
            <p class="activity-date">📅 ${activity.date}</p>
            <div class="activity-content">${activity.content}</div>
        </div>
    `).join('');
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
