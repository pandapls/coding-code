//树的子结构
var isSubStructure = function(A, B) {
    if( A==null || B==null){
        return false
    } 

    return( isSame(A,B) || isSubStructure(A.left,B) || isSubStructure(A.right,B))
};

let isSame = (a,b)=>{
   if(b==null){
        return true
    }
    if(a==null){
        return false
    }
    if(a.val !== b.val){
        return false
    }
    return  isSame(a.left,b.left) && isSame(a.right,b.right)
}
