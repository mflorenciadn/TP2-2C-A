const POSSIBLE = 'Possible';
const IMPOSSIBLE = 'Impossible';

function organizingContainers(containers){
    //console.log(swap(containers, 1, 0, 0,1));
    
    return verify(swap(containers, 0,2,2,0));
    (0,1,1,0)
    (1,0,0,1)
    (0,2,2,0)
    (2,0,0,2)

    //return verify(swap(containers, 1, 0, 0,1))
}

function swap(matrix, containerOrigen, containerDestino, bolaOrigen, bolaDestino){
    if(matrix[containerOrigen][bolaOrigen] === 0){
        return IMPOSSIBLE;
    } else matrix[containerOrigen][bolaOrigen]--;
    matrix[containerDestino][bolaOrigen]++;
    if(matrix[containerDestino][bolaDestino] === 0){
        return IMPOSSIBLE;
    } else matrix[containerDestino][bolaDestino]--;
    matrix[containerOrigen][bolaDestino]++;
    console.table(matrix);
    return matrix;
}

function verify(matrix){
    let resp = POSSIBLE; 
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if ( i === j && matrix[i][j] === 0) return IMPOSSIBLE;
            if ( i != j && matrix[i][j] != 0 ) return IMPOSSIBLE;
        }
    }
    console.log(resp);
    return resp;
}
 
// console.log(organizingContainers([
//     [1,1],
//     [1,1]
// ]) === POSSIBLE);
// console.log(organizingContainers([
//     [0,2],
//     [1,1]
// ]) === IMPOSSIBLE);
console.log(organizingContainers([
    [1, 3, 1],
    [2, 1, 2],
    [3, 3, 3]
]) === IMPOSSIBLE);
console.log(organizingContainers([
    [0, 2, 1],
    [1, 1, 1],
    [2, 0, 0]
]) === IMPOSSIBLE);
console.log(organizingContainers([
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 0]
]) === POSSIBLE);

