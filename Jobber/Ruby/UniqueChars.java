    public int uniqueLetterString(String S) {
        int[][] index = new int[26][2];
        for (int i = 0; i < 26; ++i) Arrays.fill(index[i], -1);
        int res = 0, N = S.length(), mod = (int)Math.pow(10, 9) + 7;
        for (int i = 0; i < N; ++i) {
            int c = S.charAt(i) - 'A';
            res = (res + (i - index[c][1]) * (index[c][1] - index[c][0]) % mod) % mod;
            index[c] = new int[] {index[c][1], i};
        }
        for (int c = 0; c < 26; ++c)
            res = (res + (N - index[c][1]) * (index[c][1] - index[c][0]) % mod) % mod;
        return res;
    }

 public int uniqueLetterString(String password) {
        
        int sum = 0, curr = 0, n = password.length();
        
        int[] last = new int[26];
        int[] prev = new int[26];
        
        Arrays.fill(last,-1);
        Arrays.fill(prev,-1);
        
        char[] chars = password.toCharArray();
        for(int i=0;i<n;i++) {
            char c = chars[i];
            // curr = curr + q - r + 1 , where
            // q = i - lastIndex - 1
            // r  = lastIndex - previndex
            curr += (i - last[c-65] - 1) - (last[c-65] - prev[c-65]) + 1;
            sum += curr;
			
			//update indices
	        prev[c-65] = last[c-65];
            last[c-65] = i;
        }
        
        return sum;
    }