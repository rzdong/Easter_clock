function start(a){
	canvas.width = a;
	canvas.height= a;
	r = a/2
	second_length=a/2          //秒针长
	minute_length=(a/2)*21 / 25
	hour_lenght  =(a/2)*16 / 25
	four_kedu    =(a/2)*3  / 25//大刻度盘长度
	eight_kedu   =(a/2)*2  / 25//八个刻度盘长度
	f_eight_kedu =(a/2)*1.2/ 25//小刻度盘长度
	second_deep  =four_kedu //秒针平移
	minute_deep  =four_kedu*2/3
	hour_deep    =minute_deep
	center_weight=Math.round(a/100)
	// waper()
	drow()
}
var center_weight
var r
var second_length
var minute_length
var hour_lenght
var four_kedu
var eight_kedu
var f_eight_kedu
var second_deep
var minute_deep
var hour_deep
var canvas = document.getElementById('canvas');
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
start(500)
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
			second_y_start = r - r * second_cos + second_cos * second_deep
			second_x_start = r + r * second_sin - second_sin * second_deep
			second_y_end   = r + second_cos * second_deep
			second_x_end   = r - second_sin * second_deep
		}else if(second == 15 ){
			second_y_start = r
			second_x_start = 2*r - second_deep
			second_y_end   = r
			second_x_end   = r - second_deep
		}else if(second > 15 && second < 30){
			second_tin     = Math.tan((second-15)*6*2*Math.PI/360)
			second_cos     = Math.sqrt(1/(second_tin*second_tin+1))
			second_sin     = second_tin * second_cos
			second_y_start = r + r * second_sin - second_sin * second_deep
			second_x_start = r + r * second_cos - second_cos * second_deep
			second_y_end   = r - second_sin * second_deep
			second_x_end   = r - second_cos * second_deep
		// }else if(second == 30){
		// 	second_y_start = 470
		// 	second_x_start = r
		// 	second_y_end   = 220
		// 	second_x_end   = r
		}else if(second >= 30 && second < 45){
			second_tin     = Math.tan((second-30)*6*2*Math.PI/360)
			second_cos     = Math.sqrt(1/(second_tin*second_tin+1))
			second_sin     = second_tin * second_cos
			second_y_start = r + r * second_cos - second_cos * second_deep
			second_x_start = r - r * second_sin + second_sin * second_deep
			second_y_end   = r - second_cos * second_deep
			second_x_end   = r + second_sin * second_deep
		}else if(second == 45){
			second_y_start = r
			second_x_start = second_deep
			second_y_end   = r
			second_x_end   = r + second_deep
		}else{
			second_tin     = Math.tan((second-45)*6*2*Math.PI/360)
			second_cos     = Math.sqrt(1/(second_tin*second_tin+1))
			second_sin     = second_tin * second_cos
			second_y_start = r - r * second_sin + second_sin * second_deep
			second_x_start = r - r * second_cos + second_cos * second_deep
			second_y_end   = r + second_sin * second_deep
			second_x_end   = r + second_cos * second_deep
		}
		/*分针*/
		if(minute < 15 && minute >= 0){
			minute_tin     = Math.tan((minute + second /60)*6*2*Math.PI/360)
			minute_cos     = Math.sqrt(1/(minute_tin*minute_tin+1))
			minute_sin     = minute_tin * minute_cos
			minute_y_start = r - minute_length * minute_cos + minute_cos * minute_deep
			minute_x_start = r + minute_length * minute_sin - minute_sin * minute_deep
			minute_y_end   = r + minute_cos * minute_deep
			minute_x_end   = r - minute_sin * minute_deep
		}else if(minute == 15 ){
			minute_y_start = r
			minute_x_start = r - minute_deep
			minute_y_end   = r
			minute_x_end   = r + minute_length -minute_deep
		}else if(minute > 15 && minute < 30){
			minute_tin     = Math.tan(((minute-15) + second /60)*6*2*Math.PI/360)
			minute_cos     = Math.sqrt(1/(minute_tin*minute_tin+1))
			minute_sin     = minute_tin * minute_cos
			minute_y_start = r + minute_length * minute_sin - minute_sin * minute_deep
			minute_x_start = r + minute_length * minute_cos - minute_cos * minute_deep
			minute_y_end   = r - minute_sin * minute_deep
			minute_x_end   = r - minute_cos * minute_deep
		// }else if(minute == 30){
		// 	minute_y_start = 470
		// 	minute_x_start = r
		// 	minute_y_end   = 220
		// 	minute_x_end   = r
		}else if(minute >= 30 && minute < 45){
			minute_tin     = Math.tan(((minute-30) + second /60)*6*2*Math.PI/360)
			minute_cos     = Math.sqrt(1/(minute_tin*minute_tin+1))
			minute_sin     = minute_tin * minute_cos
			minute_y_start = r + minute_length * minute_cos - minute_cos * minute_deep
			minute_x_start = r - minute_length * minute_sin + minute_sin * minute_deep
			minute_y_end   = r - minute_cos * minute_deep
			minute_x_end   = r + minute_sin * minute_deep
		}else if(minute == 45){
			minute_y_start = r
			minute_x_start = r - minute_length + minute_deep
			minute_y_end   = r
			minute_x_end   = r +minute_deep
		}else{
			minute_tin     = Math.tan(((minute-45) + second /60)*6*2*Math.PI/360)
			minute_cos     = Math.sqrt(1/(minute_tin*minute_tin+1))
			minute_sin     = minute_tin * minute_cos
			minute_y_start = r - minute_length * minute_sin + minute_sin * minute_deep
			minute_x_start = r - minute_length * minute_cos + minute_cos * minute_deep
			minute_y_end   = r + minute_sin * minute_deep
			minute_x_end   = r + minute_cos * minute_deep
		}
		/*时针*/
		if(hour < 3 && hour >= 0){
			hour_tin     = Math.tan((hour*5 + minute/12)*6*2*Math.PI/360)
			hour_cos     = Math.sqrt(1/(hour_tin*hour_tin+1))
			hour_sin     = hour_tin * hour_cos
			hour_y_start = r - hour_lenght * hour_cos + hour_cos * hour_deep
			hour_x_start = r + hour_lenght * hour_sin - hour_sin * hour_deep
			hour_y_end   = r + hour_cos * hour_deep
			hour_x_end   = r - hour_sin * hour_deep
		// }else if(hour == 3 ){
		// 	hour_tin     = Math.tan((minute/12)*6*2*Math.PI/360)
		// 	hour_cos     = Math.sqrt(1/(hour_tin*hour_tin+1))
		// 	hour_sin     = hour_tin * hour_cos
		// 	hour_y_start = r + hour_lenght * hour_sin - hour_sin * 20
		// 	hour_x_start = r + hour_lenght * hour_cos - hour_cos * 20
		// 	hour_y_end   = r - hour_sin * 20
		// 	hour_x_end   = r - hour_cos * 20
		}else if(hour >= 3 && hour < 6){
			hour_tin     = Math.tan(((hour-3)*5 + minute/12)*6*2*Math.PI/360)
			hour_cos     = Math.sqrt(1/(hour_tin*hour_tin+1))
			hour_sin     = hour_tin * hour_cos
			hour_y_start = r + hour_lenght * hour_sin - hour_sin * hour_deep
			hour_x_start = r + hour_lenght * hour_cos - hour_cos * hour_deep
			hour_y_end   = r - hour_sin * hour_deep
			hour_x_end   = r - hour_cos * hour_deep
		// }else if(hour == 30){
		// 	hour_y_start = 470
		// 	hour_x_start = r
		// 	hour_y_end   = 220
		// 	hour_x_end   = r
		}else if(hour >= 6 && hour < 9){
			hour_tin     = Math.tan(((hour-6)*5 + minute/12)*6*2*Math.PI/360)
			hour_cos     = Math.sqrt(1/(hour_tin*hour_tin+1))
			hour_sin     = hour_tin * hour_cos
			hour_y_start = r + hour_lenght * hour_cos - hour_cos * hour_deep
			hour_x_start = r - hour_lenght * hour_sin + hour_sin * hour_deep
			hour_y_end   = r - hour_cos * hour_deep
			hour_x_end   = r + hour_sin * hour_deep
		}else if(hour == 9){
			hour_y_start = r
			hour_x_start = r - hour_lenght + hour_deep
			hour_y_end   = r
			hour_x_end   = r + hour_deep
		}else{
			hour_tin     = Math.tan(((hour-9)*5 + minute/12)*6*2*Math.PI/360)
			hour_cos     = Math.sqrt(1/(hour_tin*hour_tin+1))
			hour_sin     = hour_tin * hour_cos
			hour_y_start = r - hour_lenght * hour_sin + hour_sin * hour_deep
			hour_x_start = r - hour_lenght * hour_cos + hour_cos * hour_deep
			hour_y_end   = r + hour_sin * hour_deep
			hour_x_end   = r + hour_cos * hour_deep
		}
		init(second_x_start,second_y_start,second_x_end,second_y_end,
			minute_x_start,minute_y_start,minute_x_end,minute_y_end,
			hour_x_start,hour_y_start,hour_x_end,hour_y_end)
		drow()
	},500)
}

function init(a,b,c,d,e,f,g,h,i,j,k,l){
	ctx.clearRect(0,0,2 * r,2 * r)
	zhizheng(a,b,c,d,e,f,g,h,i,j,k,l);
	waper();
}
function zhizheng(a,b,c,d,e,f,g,h,i,j,k,l){
 	ctx.beginPath();//时针长度hour_lenght
 	ctx.moveTo(i,j)
 	ctx.lineTo(k,l)
 	ctx.lineWidth = Math.round((2 * r) /40)
 	ctx.strokeStyle = "#000000"
 	ctx.stroke()

 	ctx.beginPath();//分针长度minute_length
 	ctx.moveTo(e,f)
 	ctx.lineTo(g,h)
 	ctx.lineWidth = Math.round((2 * r) /75)
 	ctx.strokeStyle = "#dddddd"
 	ctx.stroke()

 	ctx.beginPath();//秒针长度r
	ctx.moveTo(a,b)
	ctx.lineTo(c,d)
	// ctx.moveTo(r,280)
	// ctx.lineTo(r,30)
	ctx.lineWidth = 2*r > 400 ? 2 : 1
	ctx.strokeStyle = "#dd0000"
 	ctx.stroke()
}
function waper(){
	ctx.beginPath();//外面的圈
	ctx.lineWidth = 1
	ctx.arc(r,r,r,0,2*Math.PI)
	ctx.strokeStyle = "#000000"
	ctx.closePath()
	ctx.stroke();

	ctx.beginPath();//内部的小黑点
	ctx.arc(r,r,Math.round((2 * r) /100),0,2*Math.PI)
	ctx.strokeStyle = "#000000"
	ctx.closePath()
	ctx.fill();

	ctx.beginPath(); //大刻度
	ctx.moveTo(r,0)
	ctx.lineTo(r,four_kedu)
	ctx.closePath()
	ctx.moveTo(2*r,r)
	ctx.lineTo(2*r-four_kedu,r)
	ctx.closePath()
	ctx.moveTo(r,2*r)
	ctx.lineTo(r,2*r-four_kedu)
	ctx.closePath()
	ctx.moveTo(0,r)
	ctx.lineTo(four_kedu,r)
	ctx.closePath()
	ctx.lineWidth = Math.round((2 * r) / 50) 
	ctx.strokeStyle = "#000000"
	ctx.stroke();

	
	for(var i = 1;i<15;i++){
		var tina = Math.tan(i*6*2*Math.PI/360)
		var cosa = Math.sqrt(1/(tina*tina+1))
		var sina = tina * cosa
		if(i % 5 == 0){
			
			ctx.beginPath()
			ctx.moveTo(r+r*sina,r-r*cosa)
			ctx.lineTo(r+r*sina-eight_kedu*sina,r-r*cosa+eight_kedu*cosa)
			ctx.closePath()
			ctx.lineWidth = center_weight
			ctx.strokeStyle = "#ff0000"
			ctx.stroke();
		}else{
			ctx.beginPath()
			ctx.moveTo(r+r*sina,r-r*cosa)
			ctx.lineTo(r+r*sina-f_eight_kedu*sina,r-r*cosa+f_eight_kedu*cosa)
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
			ctx.moveTo(r+r*cosa,r+r*sina)
			ctx.lineTo(r+r*cosa-eight_kedu*cosa,r+r*sina-eight_kedu*sina)
			ctx.closePath()
			ctx.lineWidth = center_weight
			ctx.strokeStyle = "#ff0000"
		}else{
			ctx.beginPath()
			ctx.moveTo(r+r*cosa,r+r*sina)
			ctx.lineTo(r+r*cosa-f_eight_kedu*cosa,r+r*sina-f_eight_kedu*sina)
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
			ctx.moveTo(r-r*sina,r+r*cosa)
			ctx.lineTo(r-r*sina+eight_kedu*sina,r+r*cosa-eight_kedu*cosa)
			ctx.closePath()
			ctx.lineWidth = center_weight
			ctx.strokeStyle = "#ff0000"
		}else{
			ctx.beginPath()
			ctx.moveTo(r-r*sina,r+r*cosa)
			ctx.lineTo(r-r*sina+f_eight_kedu*sina,r+r*cosa-f_eight_kedu*cosa)
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
			ctx.moveTo(r-r*cosa,r-r*sina)
			ctx.lineTo(r-r*cosa+eight_kedu*cosa,r-r*sina+eight_kedu*sina)
			ctx.closePath()
			ctx.lineWidth = center_weight
			ctx.strokeStyle = "#ff0000"
		}else{
			ctx.beginPath()
			ctx.moveTo(r-r*cosa,r-r*sina)
			ctx.lineTo(r-r*cosa+f_eight_kedu*cosa,r-r*sina+f_eight_kedu*sina)
			ctx.closePath()
			ctx.lineWidth = 1
			ctx.strokeStyle = "#000000"
		}
		ctx.stroke();
	}
}
// init()
