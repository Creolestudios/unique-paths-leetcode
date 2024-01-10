var uniquePaths = function(m, n) {
let arr = []; let rows = m; let columns = n; 
for (let i = 0; i < rows; i++) { 
    arr[i] = []; 
    for (let j = 0; j < columns; j++) 
    { 
        arr[i][j] = 1;
         } 
         } ;
    
    for(let i=1;i<m;i++){
        for (let j =1; j<n;j++ ){
            arr[i][j] = Number(arr[i][j-1])+Number(arr[i-1][j])
        }
    }return(arr[m-1][n-1])
};
