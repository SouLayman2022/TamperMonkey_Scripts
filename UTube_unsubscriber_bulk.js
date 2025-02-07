// ==UserScript==
// @name         YouTube Bulk Unsubscriber
// @namespace    http://example.com/
// @version      1.0
// @description  Automatically unsubscribe from all YouTube channels on the subscriptions page.
// @match        https://www.youtube.com/feed/channels*
// @grant        none
// ==/UserScript==

(async function iife() {
    'use strict';

    // This is the time delay (in milliseconds) after which the "unsubscribe" button is clicked.
    var UNSUBSCRIBE_DELAY_TIME = 2000;

    /**
     * Delay runner. Wraps `setTimeout` so it can be `await`ed on.
     * @param {Function} fn
     * @param {number} delay
     */
    var runAfterDelay = (fn, delay) =>
        new Promise((resolve) => {
            setTimeout(() => {
                fn();
                resolve();
            }, delay);
        });

    // Get the channel list; each <ytd-channel-renderer> represents a channel row.
    var channels = Array.from(document.getElementsByTagName(`ytd-channel-renderer`));
    console.log(`${channels.length} channels found.`);
    var ctr = 0;
    for (const channel of channels) {
        // Click the "Unsubscribe from" button if present
        let btn = channel.querySelector(`[aria-label^='Unsubscribe from']`);
        if (btn) {
            btn.click();
            await runAfterDelay(() => {
                // Click the confirm button in the dialog
                let confirmBtn = document.getElementsByTagName(`yt-confirm-dialog-renderer`)[0]
                    .querySelector(`[aria-label^='Unsubscribe']`);
                if (confirmBtn) {
                    confirmBtn.click();
                    console.log(`Unsubscribed ${ctr + 1}/${channels.length}`);
                } else {
                    console.warn("Confirmation button not found.");
                }
                ctr++;
            }, UNSUBSCRIBE_DELAY_TIME);
        } else {
            console.warn("Unsubscribe button not found for a channel.");
        }
    }
    console.log("Unsubscription process complete.");
})();
