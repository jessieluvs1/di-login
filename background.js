chrome.action.onClicked.addListener(async (tab) => {
    if (!tab.id || !tab.url) {
        return;
    }

    const source = new URL(tab.url);
    if (source.protocol !== "http:" && source.protocol !== "https:") {
        return;
    }

    const destination = new URL("/wp/wp-admin/", source);
    await chrome.tabs.update(tab.id, { url: destination.href });
});