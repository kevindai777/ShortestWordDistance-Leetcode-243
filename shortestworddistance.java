//Java Solution

class Solution {
    public int shortestDistance(String[] words, String word1, String word2) {
        int i1 = -1;
        int i2 = -1;
        int ans = Integer.MAX_VALUE;
        
        for (int i = 0; i < words.length; i++) {
            if (words[i].equals(word1)) {
                i1 = i;
            } else if (words[i].equals(word2)) {
                i2 = i;
            }
            
            if (i1 != -1 && i2 != -1) {
                ans = Math.min(ans, Math.abs(i2 - i1));
            }
        }
        
        return ans;
    }
}