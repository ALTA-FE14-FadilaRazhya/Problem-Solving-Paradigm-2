function frog(jumps: number[]): number {
    const n = jumps.length;
    const dp: number[] = Array(n).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
  
    for (let i = 0; i < n; i++) {
      if (i + 1 < n) {
        dp[i + 1] = Math.min(dp[i + 1], dp[i] + Math.abs(jumps[i] - jumps[i + 1]));
      }
      if (i + 2 < n) {
        dp[i + 2] = Math.min(dp[i + 2], dp[i] + Math.abs(jumps[i] - jumps[i + 2]));
      }
    }
    return dp[n - 1];
  }
  
  console.log(frog([10,30,40,20]))
  console.log(frog([30,10,60,10,60,50]))