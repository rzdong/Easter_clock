var canvas = document.getElementById('canvas');
canvas.width = 500;
canvas.height= 500;
var ctx = canvas.getContext("2d")
var second_tin
var second_cos
var second_sin
var second_y_start
var second_x_start
var second_y_end
var second_x_end
var minute_tin
var minute_cos
var minute_sin
var minute_y_start
var minute_x_start
var minute_y_end
var minute_x_end
var hour_tin
var hour_cos
var hour_sin
var hour_y_start
var hour_x_start
var hour_y_end
var hour_x_end
function drow(){	
	setTimeout(function(){
		var time = new Date();
		var hour   = time.getHours()
		if (hour >= 12){
			hour -= 12
		}
		var minute = time.getMinutes()
		var second = time.getSeconds()
		/*秒针*/
		if(second < 15 && second >= 0){
			second_tin     = Math.tan(second*6*2*Math.PI/360)
			second_cos     = Math.sqrt(1/(second_tin*second_tin+1))
			second_sin     = second_tin * second_cos
			second_y_start = 250 - 250 * second_cos + second_cos * 30
			second_x_start = 250 + 250 * second_sin - second_sin * 30
			second_y_end   = 250 + second_cos * 30
			second_x_end   = 250 - second_sin * 30
		}else if(second == 15 ){
			second_y_start = 250
			second_x_start = 470
			second_y_end   = 250
			second_x_end   = 220
		}else if(second > 15 && second < 30){
			second_tin     = Math.tan((second-15)*6*2*Math.PI/360)
			second_cos     = Math.sqrt(1/(second_tin*second_tin+1))
			second_sin     = second_tin * second_cos
			second_y_start = 250 + 250 * second_sin - second_sin * 30
			second_x_start = 250 + 250 * second_cos - second_cos * 30
			second_y_end   = 250 - second_sin * 30
			second_x_end   = 250 - second_cos * 30
		// }else if(second == 30){
		// 	second_y_start = 470
		// 	second_x_start = 250
		// 	second_y_end   = 220
		// 	second_x_end   = 250
		}else if(second >= 30 && second < 45){
			second_tin     = Math.tan((second-30)*6*2*Math.PI/360)
			second_cos     = Math.sqrt(1/(second_tin*second_tin+1))
			second_sin     = second_tin * second_cos
			second_y_start = 250 + 250 * second_cos - second_cos * 30
			second_x_start = 250 - 250 * second_sin + second_sin * 30
			second_y_end   = 250 - second_cos * 30
			second_x_end   = 250 + second_sin * 30
		}else if(second == 45){
			second_y_start = 250
			second_x_start = 30
			second_y_end   = 250
			second_x_end   = 280
		}else{
			second_tin     = Math.tan((second-45)*6*2*Math.PI/360)
			second_cos     = Math.sqrt(1/(second_tin*second_tin+1))
			second_sin     = second_tin * second_cos
			second_y_start = 250 - 250 * second_sin + second_sin * 30
			second_x_start = 250 - 250 * second_cos + second_cos * 30
			second_y_end   = 250 + second_sin * 30
			second_x_end   = 250 + second_cos * 30
		}
		/*分针*/
		if(minute < 15 && minute >= 0){
			minute_tin     = Math.tan((minute + second /60)*6*2*Math.PI/360)
			minute_cos     = Math.sqrt(1/(minute_tin*minute_tin+1))
			minute_sin     = minute_tin * minute_cos
			minute_y_start = 250 - 210 * minute_cos + minute_cos * 20
			minute_x_start = 250 + 210 * minute_sin - minute_sin * 20
			minute_y_end   = 250 + minute_cos * 20
			minute_x_end   = 250 - minute_sin * 20
		}else if(minute == 15 ){
			minute_y_start = 250
			minute_x_start = 230
			minute_y_end   = 250
			minute_x_end   = 440
		}else if(minute > 15 && minute < 30){
			minute_tin     = Math.tan(((minute-15) + second /60)*6*2*Math.PI/360)
			minute_cos     = Math.sqrt(1/(minute_tin*minute_tin+1))
			minute_sin     = minute_tin * minute_cos
			minute_y_start = 250 + 210 * minute_sin - minute_sin * 20
			minute_x_start = 250 + 210 * minute_cos - minute_cos * 20
			minute_y_end   = 250 - minute_sin * 20
			minute_x_end   = 250 - minute_cos * 20
		// }else if(minute == 30){
		// 	minute_y_start = 470
		// 	minute_x_start = 250
		// 	minute_y_end   = 220
		// 	minute_x_end   = 250
		}else if(minute >= 30 && minute < 45){
			minute_tin     = Math.tan(((minute-30) + second /60)*6*2*Math.PI/360)
			minute_cos     = Math.sqrt(1/(minute_tin*minute_tin+1))
			minute_sin     = minute_tin * minute_cos
			minute_y_start = 250 + 210 * minute_cos - minute_cos * 20
			minute_x_start = 250 - 210 * minute_sin + minute_sin * 20
			minute_y_end   = 250 - minute_cos * 20
			minute_x_end   = 250 + minute_sin * 20
		}else if(minute == 45){
			minute_y_start = 250
			minute_x_start = 60
			minute_y_end   = 250
			minute_x_end   = 270
		}else{
			minute_tin     = Math.tan(((minute-45) + second /60)*6*2*Math.PI/360)
			minute_cos     = Math.sqrt(1/(minute_tin*minute_tin+1))
			minute_sin     = minute_tin * minute_cos
			minute_y_start = 250 - 210 * minute_sin + minute_sin * 20
			minute_x_start = 250 - 210 * minute_cos + minute_cos * 20
			minute_y_end   = 250 + minute_sin * 20
			minute_x_end   = 250 + minute_cos * 20
		}
		/*时针*/
		if(hour < 3 && hour >= 0){
			hour_tin     = Math.tan((hour*5 + minute/12)*6*2*Math.PI/360)
			hour_cos     = Math.sqrt(1/(hour_tin*hour_tin+1))
			hour_sin     = hour_tin * hour_cos
			hour_y_start = 250 - 160 * hour_cos + hour_cos * 20
			hour_x_start = 250 + 160 * hour_sin - hour_sin * 20
			hour_y_end   = 250 + hour_cos * 20
			hour_x_end   = 250 - hour_sin * 20
		// }else if(hour == 3 ){
		// 	hour_tin     = Math.tan((minute/12)*6*2*Math.PI/360)
		// 	hour_cos     = Math.sqrt(1/(hour_tin*hour_tin+1))
		// 	hour_sin     = hour_tin * hour_cos
		// 	hour_y_start = 250 + 160 * hour_sin - hour_sin * 20
		// 	hour_x_start = 250 + 160 * hour_cos - hour_cos * 20
		// 	hour_y_end   = 250 - hour_sin * 20
		// 	hour_x_end   = 250 - hour_cos * 20
		}else if(hour >= 3 && hour < 6){
			hour_tin     = Math.tan(((hour-3)*5 + minute/12)*6*2*Math.PI/360)
			hour_cos     = Math.sqrt(1/(hour_tin*hour_tin+1))
			hour_sin     = hour_tin * hour_cos
			hour_y_start = 250 + 160 * hour_sin - hour_sin * 20
			hour_x_start = 250 + 160 * hour_cos - hour_cos * 20
			hour_y_end   = 250 - hour_sin * 20
			hour_x_end   = 250 - hour_cos * 20
		// }else if(hour == 30){
		// 	hour_y_start = 470
		// 	hour_x_start = 250
		// 	hour_y_end   = 220
		// 	hour_x_end   = 250
		}else if(hour >= 6 && hour < 9){
			hour_tin     = Math.tan(((hour-6)*5 + minute/12)*6*2*Math.PI/360)
			hour_cos     = Math.sqrt(1/(hour_tin*hour_tin+1))
			hour_sin     = hour_tin * hour_cos
			hour_y_start = 250 + 160 * hour_cos - hour_cos * 20
			hour_x_start = 250 - 160 * hour_sin + hour_sin * 20
			hour_y_end   = 250 - hour_cos * 20
			hour_x_end   = 250 + hour_sin * 20
		}else if(hour == 9){
			hour_y_start = 250
			hour_x_start = 60
			hour_y_end   = 250
			hour_x_end   = 270
		}else{
			hour_tin     = Math.tan(((hour-9)*5 + minute/12)*6*2*Math.PI/360)
			hour_cos     = Math.sqrt(1/(hour_tin*hour_tin+1))
			hour_sin     = hour_tin * hour_cos
			hour_y_start = 250 - 160 * hour_sin + hour_sin * 20
			hour_x_start = 250 - 160 * hour_cos + hour_cos * 20
			hour_y_end   = 250 + hour_sin * 20
			hour_x_end   = 250 + hour_cos * 20
		}
		init(second_x_start,second_y_start,second_x_end,second_y_end,
			minute_x_start,minute_y_start,minute_x_end,minute_y_end,
			hour_x_start,hour_y_start,hour_x_end,hour_y_end)
		drow()
	},500)
}
drow()
function init(a,b,c,d,e,f,g,h,i,j,k,l){
	ctx.clearRect(0,0,500,500)
	zhizheng(a,b,c,d,e,f,g,h,i,j,k,l);
	waper();
}
function zhizheng(a,b,c,d,e,f,g,h,i,j,k,l){
 	ctx.beginPath();//时针长度160
 	ctx.moveTo(i,j)
 	ctx.lineTo(k,l)
 	ctx.lineWidth = 10
 	ctx.strokeStyle = "#000000"
 	ctx.stroke()

 	ctx.beginPath();//分针长度210
 	ctx.moveTo(e,f)
 	ctx.lineTo(g,h)
 	ctx.lineWidth = 6
 	ctx.strokeStyle = "#dddddd"
 	ctx.stroke()

 	ctx.beginPath();//秒针长度250
	ctx.moveTo(a,b)
	ctx.lineTo(c,d)
	// ctx.moveTo(250,280)
	// ctx.lineTo(250,30)
	ctx.lineWidth = 2
	ctx.strokeStyle = "#dd0000"
 	ctx.stroke()
}
function waper(){
	ctx.beginPath();//外面的圈
	ctx.lineWidth = 1
	ctx.arc(250,250,250,0,2*Math.PI)
	ctx.strokeStyle = "#000000"
	ctx.closePath()
	ctx.stroke();

	ctx.beginPath();//内部的小黑点
	ctx.arc(250,250,5,0,2*Math.PI)
	ctx.strokeStyle = "#000000"
	ctx.closePath()
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(250,0)
	ctx.lineTo(250,30)
	ctx.closePath()
	ctx.moveTo(500,250)
	ctx.lineTo(470,250)
	ctx.closePath()
	ctx.moveTo(250,500)
	ctx.lineTo(250,470)
	ctx.closePath()
	ctx.moveTo(0,250)
	ctx.lineTo(30,250)
	ctx.closePath()
	ctx.lineWidth = 8
	ctx.strokeStyle = "#000000"
	ctx.stroke();

	
	for(var i = 1;i<15;i++){
		var tina = Math.tan(i*6*2*Math.PI/360)
		var cosa = Math.sqrt(1/(tina*tina+1))
		var sina = tina * cosa
		if(i % 5 == 0){
			
			ctx.beginPath()
			ctx.moveTo(250+250*sina,250-250*cosa)//2
			ctx.lineTo(250+250*sina-20*sina,250-250*cosa+20*cosa)
			ctx.closePath()
			ctx.lineWidth = 4
			ctx.strokeStyle = "#ff0000"
			ctx.stroke();
		}else{
			ctx.beginPath()
			ctx.moveTo(250+250*sina,250-250*cosa)//2
			ctx.lineTo(250+250*sina-12*sina,250-250*cosa+12*cosa)
			ctx.closePath()
			ctx.lineWidth = 1
			ctx.strokeStyle = "#000000"
			ctx.stroke();
		}
		
		
	}
	for(var i = 1;i<15;i++){
		var tina = Math.tan(i*6*2*Math.PI/360)
		var cosa = Math.sqrt(1/(tina*tina+1))
		var sina = tina * cosa
		if(i % 5 == 0){
			ctx.beginPath()
			ctx.moveTo(250+250*cosa,250+250*sina)//2
			ctx.lineTo(250+250*cosa-20*cosa,250+250*sina-20*sina)
			ctx.closePath()
			ctx.lineWidth = 4
			ctx.strokeStyle = "#ff0000"
		}else{
			ctx.beginPath()
			ctx.moveTo(250+250*cosa,250+250*sina)//2
			ctx.lineTo(250+250*cosa-12*cosa,250+250*sina-12*sina)
			ctx.closePath()
			ctx.lineWidth = 1
			ctx.strokeStyle = "#000000"
		}
		ctx.stroke();
	}
	for(var i = 1;i<15;i++){
		var tina = Math.tan(i*6*2*Math.PI/360)
		var cosa = Math.sqrt(1/(tina*tina+1))
		var sina = tina * cosa
		if(i % 5 == 0){
			ctx.beginPath()
			ctx.moveTo(250-250*sina,250+250*cosa)//2
			ctx.lineTo(250-250*sina+20*sina,250+250*cosa-20*cosa)
			ctx.closePath()
			ctx.lineWidth = 4
			ctx.strokeStyle = "#ff0000"
		}else{
			ctx.beginPath()
			ctx.moveTo(250-250*sina,250+250*cosa)//2
			ctx.lineTo(250-250*sina+12*sina,250+250*cosa-12*cosa)
			ctx.closePath()
			ctx.lineWidth = 1
			ctx.strokeStyle = "#000000"
		}
		ctx.stroke();
	}
	for(var i = 1;i<15;i++){
		var tina = Math.tan(i*6*2*Math.PI/360)
		var cosa = Math.sqrt(1/(tina*tina+1))
		var sina = tina * cosa
		if(i % 5 == 0){
			ctx.beginPath()
			ctx.moveTo(250-250*cosa,250-250*sina)//2
			ctx.lineTo(250-250*cosa+20*cosa,250-250*sina+20*sina)
			ctx.closePath()
			ctx.lineWidth = 4
			ctx.strokeStyle = "#ff0000"
		}else{
			ctx.beginPath()
			ctx.moveTo(250-250*cosa,250-250*sina)//2
			ctx.lineTo(250-250*cosa+12*cosa,250-250*sina+12*sina)
			ctx.closePath()
			ctx.lineWidth = 1
			ctx.strokeStyle = "#000000"
		}
		ctx.stroke();
	}
}
// init()
