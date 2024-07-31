// Solution in TS
function minHeightShelves(books: number[][], shelfWidth: number): number {
    const dp: number[] = new Array(books.length + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 0; i < books.length; i++) {
        let width = 0;
        let height = 0;
        for (let j = i; j >= 0; j--) {
            width += books[j][0];
            height = Math.max(height, books[j][1]);

            if (width > shelfWidth) {
                break;
            }

            dp[i + 1] = Math.min(dp[i + 1], dp[j] + height);
        }
    }

    return dp[books.length];
}