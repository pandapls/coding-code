// 最长公共子序列
let longestCommonSubsequence = (s,s2)=>{

    const m = s.length,n = s2.length;


    let dp = [new Array(n+1).fill(0)]


    for(let i = 1; i <= m; i++){

        let c1 = s[i-1];
        for(let j = 1; j<=n; j++){
            let c2 = s2[j-1];

            if(c1 === c2){
                dp[i][j] = dp[i-1][j-1]+1
            }else{
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }

    return dp[m][n]
}
