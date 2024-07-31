// Solution in CPP
#include <vector>

class Solution
{
public:
    int minHeightShelves(vector<vector<int>> &books, int shelfWidth)
    {
        int n = books.size();
        vector<int> dp(n + 1, INT_MAX);
        dp[0] = 0;

        for (int i = 1; i <= n; i++)
        {
            int width = 0;
            int height = 0;
            for (int j = i - 1; j >= 0; j--)
            {
                width += books[j][0];
                height = max(height, books[j][1]);

                if (width > shelfWidth)
                {
                    break;
                }

                dp[i] = min(dp[i], dp[j] + height);
            }
        }

        return dp[n];
    }
};