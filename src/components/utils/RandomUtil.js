export function random(start=0, end=1) {
    return Math.floor(start + (Math.random()*(end-start+1)));
}
export function shuffle(array=[]) {
    return array.sort(()=>{
        return Math.random()-0.5;
    });
}