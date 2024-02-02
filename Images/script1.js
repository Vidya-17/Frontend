let n = 5;

// Upper part of the heart
for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < 2 * n; j++) {
        if ((i + j >= n - 1 && j - i <= n - 1) || (i - j >= -n + 1 && i + j <= 3 * n - 1)) {
            line += '*';
        } else {
            line += '&nbsp; ';
        }
    }
    document.write(line + '<br>');
}

// Lower part of the heart
for (let i = n - 1; i >= 0; i--) {
    let line = '';
    for (let j = 0; j < 2 * n; j++) {
        if ((i + j >= n - 1 && j - i <= n - 1) || (i - j >= -n + 1 && i + j <= 3 * n - 1)) {
            line += '*';
        } else {
            line += '&nbsp; ';
        }
    }
    document.write(line + '<br>');
}
