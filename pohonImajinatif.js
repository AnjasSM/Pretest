let treeHeight = (x,y) => {
    if(x && y > 0) {
        let height = x
        let season = ['spring','summer','autumn','winter'];
        for(let i = 0; i < y; i++) {
            for(let j = 0; j < season.length; j++) {
                heightNow = season[j]
                if(heightNow === 'spring') {
                    height = height * 2
                } else if(heightNow === 'autumn') {
                    height = height + 1
                }
            }
        };
        return height;
    } else {
        return console.log('input harus lebih dari 0')
    };
}

console.log(treeHeight(2,3));