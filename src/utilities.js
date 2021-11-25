// Define our labelmap
const labelMap = {
    1:{name:'Fresh-Unripe', color:'green'},
    2:{name:'Fresh-Ripe', color:'yellow'},
    3:{name:'Overripe', color:'orange'},
    4:{name:'Unripe', color:'green'},
    5:{name:'Ripe', color:'yellow'},
    6:{name:'Rotten', color:'red'},
}

// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            
            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 3
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'         
            
            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*(imgWidth*0.55), height*(imgHeight*0.55));
            ctx.stroke()
        }
    }
}