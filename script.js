// 動画プレーヤーの初期化
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('main-video');

    // YouTubeリンク機能
    const youtubeLinksList = document.getElementById('youtube-links');

    // 固定リンク
    const links = [
        { text: 'YouTubeチャンネル', url: 'https://www.youtube.com/channel/UCUwwgVrZwuO7GqJ9GQqUTeQ' }
    ];

    // リンクを表示する関数
    function renderLinks() {
        youtubeLinksList.innerHTML = '';
        links.forEach((link) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <svg class="youtube-icon" viewBox="0 0 24 24" fill="#ff4444">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.text}</a>
            `;
            youtubeLinksList.appendChild(li);
        });
    }

    // 初期表示
    renderLinks();
    
    // 動画読み込みエラー時の処理
    video.addEventListener('error', function() {
        const container = video.parentElement;
        container.innerHTML = `
            <div style="
                padding: 60px 20px;
                text-align: center;
                color: #888;
            ">
                <p style="font-size: 1.2rem; margin-bottom: 10px;">動画を読み込めませんでした</p>
                <p style="font-size: 0.9rem;">videoフォルダにminecraft.mp4を配置してください</p>
            </div>
        `;
    });

    // キーボードショートカット
    document.addEventListener('keydown', function(e) {
        // スペースキーで再生/一時停止
        if (e.code === 'Space' && document.activeElement !== video) {
            e.preventDefault();
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
        
        // 左右キーで10秒スキップ
        if (e.code === 'ArrowRight') {
            video.currentTime += 10;
        }
        if (e.code === 'ArrowLeft') {
            video.currentTime -= 10;
        }
        
        // Fキーでフルスクリーン
        if (e.code === 'KeyF') {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                video.requestFullscreen();
            }
        }
    });
});
