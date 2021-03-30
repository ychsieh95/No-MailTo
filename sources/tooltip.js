const initAnchor = (anchor) => {
    initTooltip(anchor);
    $(anchor).hover(
        function () { setTooltip(anchor, chrome.i18n.getMessage('tooltip_precopy')); },
        function () { }
    );
}

const initTooltip = (element, content) => {
    tippy(element, {
        arrow: true,
        animateFill: false,
        animation: 'perspective',
        content: content,
        theme: 'google'
    });
}

const setTooltip = (element, content) => {
    if (typeof element._tippy !== 'undefined')
        element._tippy.setContent(content);
    else
        initTooltip(element, content);
}

const fallbackMessage = (action) => {
    const actionKey = (action === 'cut' ? 'X' : 'C');
    if (/iPhone|iPad/i.test(navigator.userAgent))
        return 'No support :(';
    else if (/Mac/i.test(navigator.userAgent))
        return `Press ⌘-${actionKey} to ${action}`;
    else
        return `Press Ctrl-${actionKey} to ${action}`;
}