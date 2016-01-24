/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    callback(tabs[0].url);
  });
}

(function() {
    getCurrentTabUrl(function (url) {
        $('#active-tab-url').text(url);
        
        $.getJSON("https://spring.io/info", function (json) {
            $('#git-commit-id').text(json.git.commit.id);
        });
    });
})();