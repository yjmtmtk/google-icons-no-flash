/**
 * google-icons-no-flash
 * Prevent FOUT (Flash of Unstyled Text) for Material Symbols and Material Icons
 * https://github.com/xxx/google-icons-no-flash
 */
(function () {
    // [クラス名, フォント名]
    var fonts = [
        // Material Symbols
        ['material-symbols-outlined', 'Material Symbols Outlined'],
        ['material-symbols-rounded', 'Material Symbols Rounded'],
        ['material-symbols-sharp', 'Material Symbols Sharp'],
        // Material Icons
        ['material-icons', 'Material Icons'],
        ['material-icons-outlined', 'Material Icons Outlined'],
        ['material-icons-round', 'Material Icons Round'],
        ['material-icons-sharp', 'Material Icons Sharp'],
        ['material-icons-two-tone', 'Material Icons Two Tone']
    ];

    // スタイルを即座に注入（非表示にする）
    var s = document.createElement('style');
    s.textContent = fonts.map(function (f) {
        return '.' + f[0] + '{visibility:hidden}' +
            '.' + f[0] + '-loaded .' + f[0] + '{visibility:visible}';
    }).join('');
    document.head.appendChild(s);

    // 各フォントの読み込み完了を検知
    document.fonts.ready.then(function () {
        fonts.forEach(function (f) {
            document.fonts.load('24px "' + f[1] + '"').then(function () {
                document.documentElement.classList.add(f[0] + '-loaded');
            });
        });
    });

    // フォールバック: 3秒後に強制表示
    setTimeout(function () {
        fonts.forEach(function (f) {
            document.documentElement.classList.add(f[0] + '-loaded');
        });
    }, 3000);
})();