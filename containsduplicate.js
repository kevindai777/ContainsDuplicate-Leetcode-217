//Objective is to see whether an array has any duplicates

let nums = [1,1,1,3,3,4,3,2,4,2]


//O(n) solution that uses a hashmap to keep track of duplicates

let map = {}
    
for (let num of nums) {
    if (map[num] != undefined) {
        return true
    }
    map[num] = 1
}

return false