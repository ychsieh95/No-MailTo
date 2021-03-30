$('a').each(function () {
    const href = String($(this).attr('href')).trim();
    if (typeof href !== 'undefined' && href.indexOf('mailto:') == 0) {
        initAnchor(this);
        $(this).addClass('mailto-anchor');
        $(this).attr(
            'data-clipboard-text',
            href.substr(href.indexOf(':') + 1).trim());
    }
});

$('a.mailto-anchor').click(function (e) {
    e.preventDefault();

    const mailtoAnchor = this;
    const clipboard = new ClipboardJS('a.mailto-anchor');
    clipboard.on('success', function(e) {
        e.clearSelection();
        setTooltip(mailtoAnchor, chrome.i18n.getMessage('tooltip_success'));
    });
    clipboard.on('error', function(e) {
        setTooltip(mailtoAnchor, fallbackMessage(e.action));
    });
});