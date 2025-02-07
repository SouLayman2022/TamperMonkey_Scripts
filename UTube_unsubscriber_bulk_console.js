(async function iife() {
    // Configuration: Adjust these values as needed.
    const UNSUBSCRIBE_DELAY_TIME = 2000; // Delay between unsubscribe actions (in milliseconds).
    const ACTIONS_BEFORE_SCROLL = 10;    // Number of unsubscribe actions before scrolling.
  
    // Helper function: Executes a function after a specified delay.
    const runAfterDelay = (fn, delay) =>
      new Promise((resolve) => {
        setTimeout(() => {
          fn();
          resolve();
        }, delay);
      });
  
    // Helper function: Scrolls the page by a specified distance.
    const scrollPage = (distance) =>
      new Promise((resolve) => {
        window.scrollBy(0, distance);
        setTimeout(resolve, 1000); // Wait for 1 second after scrolling.
      });
  
    let totalUnsubscribed = 0;
    let channels;
  
    do {
      // Get the list of currently loaded channels.
      channels = Array.from(document.getElementsByTagName("ytd-channel-renderer"));
      console.log(`${channels.length} channels found.`);
  
      for (let i = 0; i < channels.length; i++) {
        const channel = channels[i];
        const unsubscribeButton = channel.querySelector("[aria-label^='Unsubscribe from']");
  
        if (unsubscribeButton) {
          unsubscribeButton.click();
          await runAfterDelay(() => {
            const confirmButton = document
              .getElementsByTagName("yt-confirm-dialog-renderer")[0]
              ?.querySelector("[aria-label^='Unsubscribe']");
            if (confirmButton) {
              confirmButton.click();
              totalUnsubscribed++;
              console.log(`Unsubscribed ${totalUnsubscribed}`);
            } else {
              console.log("Confirm button not found.");
            }
          }, UNSUBSCRIBE_DELAY_TIME);
        } else {
          console.log("Unsubscribe button not found.");
        }
  
        // Scroll the page after a set number of unsubscribe actions.
        if ((i + 1) % ACTIONS_BEFORE_SCROLL === 0) {
          await scrollPage(1000); // Scroll down by 1000 pixels.
        }
      }
  
      // Scroll to load more channels.
      await scrollPage(1000);
    } while (channels.length > 0);
  
    console.log("Unsubscription process completed.");
  })();
  