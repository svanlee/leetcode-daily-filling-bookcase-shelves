// Solution in JS
/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, shelfWidth) {
    let n = books.length;
    let dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        let width = 0;
        let height = 0;
        for (let j = i - 1; j >= 0; j--) {
            width += books[j][0];
            height = Math.max(height, books[j][1]);

            if (width > shelfWidth) {
                break;
            }

            dp[i] = Math.min(dp[i], dp[j] + height);
        }
    }

    return dp[n];
};