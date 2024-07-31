// Solution in GO
func minHeightShelves(books [][]int, shelfWidth int) int {
    n := len(books)
    dp := make([]int, n + 1)
    for i := range dp {
        dp[i] = math.MaxInt32
    }
    dp[0] = 0

    for i := 1; i <= n; i++ {
        width, height := 0, 0
        for j := i - 1; j >= 0; j-- {
            width += books[j][0]
            height = max(height, books[j][1])

            if width > shelfWidth {
                break
            }

            dp[i] = min(dp[i], dp[j] + height)
        }
    }

    return dp[n]
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}