# Solution in PY
class Solution(object):
    def minHeightShelves(self, books, shelfWidth):
        n = len(books)
        dp = [float('inf')] * (n + 1)
        dp[0] = 0  # Base case: no books require 0 height
        
        # Iterate over each book
        for i in range(1, n + 1):
            total_width = 0
            max_height = 0
            # Iterate over previous books in reverse order
            for j in range(i, 0, -1):
                total_width += books[j-1][0]
                if total_width > shelfWidth:
                    break
                max_height = max(max_height, books[j-1][1])
                # Update dp[i] with the minimum height
                dp[i] = min(dp[i], dp[j-1] + max_height)
        
        return dp[n]  # Return the minimum height after placing all books