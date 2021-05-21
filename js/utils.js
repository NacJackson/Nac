function InitialLoad(){
	document.body.style.background="url(img/bgPk.jpg) no-repeat";
	document.body.style.backgroundSize=getW()+"px ";//+getH()+"px";
}

function SettingPink(){
	var ind=0;
	var x =  screen.width * window.devicePixelRatio;
	var y = screen.height * window.devicePixelRatio;
	document.body.style.background="url(img/bgPk.jpg) no-repeat";
	document.body.style.backgroundSize=getW()+"px ";//+getH()+"px";
	//Upper Picture Boxes
	PicListBox(ind++,get_img_IU4b3_1(), x*0.0234375, y*0.023148, x*0.1197916, y*0.1597222, 0, 9500, 1,"img/PkHframe.png",1);	
	PicListBox(ind++,get_img_IU3b2_1(), x*0.170573, y*0.023148, x*0.134895, y*0.159722, 0, 8800, 1,"img/PkHframe.png",1);
	PicListBox(ind++,get_img_IU4b3_2(), x*0.333333, y*0.023148, x*0.119791, y*0.159722, 0, 9800, 1,"img/PkHframe.png",1);	
	PicListBox(ind++,get_img_IU1b1_3(), x*0.479166, y*0.023148, x*0.085937, y*0.152777, 0, 10500, 1,"img/PkHframe.png",1);	
	PicListBox(ind++,get_img_IU16b9_1(), x*0.59375, y*0.023148, x*0.158333, y*0.158333, 0, 9600, 1,"img/PkHframe.png",1);
	PicListBox(ind++,get_img_IU3b4_1(), x*0.78125, y*0.023148, x*0.088281, y*0.209259, 0, 9000, 1,"img/PkVframe.png",2);
	PicListBox(ind++,get_img_IU2b3_1(), x*0.895833, y*0.023148, x*0.091145, y*0.243055, 0, 8500, 1,"img/PkVframe.png",2);	
	//Corner Picture Boxes
	PicListBox(ind++,get_img_IU1b1_1(), x*0.03125, y*0.550925, x*0.104166, y*0.185185, 0, 9200, 1,"img/PkHframe.png",1);		
	PicListBox(ind++,get_img_IU1b1_2(), x*0.036458, y*0.773148, x*0.098958, y*0.175926, 0, 9400, 1,"img/PkHframe.png",1);	
	PicListBox(ind++,get_img_IU9b16_1(), x*0.1640625, y*0.560185, x*0.1171875, y*0.3703703, 0, 10200, 1,"img/PkVframe.png",2);
}

function SettingBlue(){
	var ind=0;
	var x =  screen.width * window.devicePixelRatio;
	var y = screen.height * window.devicePixelRatio;
	document.body.style.background="url(img/bgBl.jpg) no-repeat";
	document.body.style.backgroundSize=getW()+"px ";//+getH()+"px";
	//Left Upper Corner
	PicListBox(ind++,get_img_IU1b1_2(), x*0.325521, y*0.032407, x*0.091146, y*0.162037, 0, 9400, 1,"img/BlHframe.png",3);		
	PicListBox(ind++,get_img_IU4b3_2(), x*0.013021, y*0.023148, x*0.130208, y*0.173611, 0, 9800, 1,"img/BlHframe.png",3);	
	PicListBox(ind++,get_img_IU1b1_1(), x*0.15625, y*0.064815, x*0.15625, y*0.277778, 0, 9200, 1,"img/BlHframe.png",3);		
	//Right Upper Corner
	PicListBox(ind++,get_img_IU4b3_1(), x*0.572916, y*0.069444, x*0.145833, y*0.194444, 0, 9500, 1,"img/BlHframe.png",3);				
	PicListBox(ind++,get_img_IU16b9_1(), x*0.736979, y*0.018518, x*0.2375, y*0.2375, 0, 9600, 1,"img/BlHframe.png",3);	
	PicListBox(ind++,get_img_IU2b3_1(), x*0.611979, y*0.300926, x*0.09375, y*0.25, 0, 8500, 1,"img/BlVframe.png",4);		
	//Left Lower Corner
	PicListBox(ind++,get_img_IU9b16_1(), x*0.013021, y*0.222222, x*0.117188, y*0.370370, 0, 10200, 1,"img/BlVframe.png",4);	
	PicListBox(ind++,get_img_IU3b2_1(), x*0.148437, y*0.384259, x*0.171875, y*0.203704, 0, 8800, 1,"img/BlHframe.png",3);
	PicListBox(ind++,get_img_IU1b1_3(), x*0.013021, y*0.648148, x*0.104167, y*0.185185, 0, 10500, 1,"img/BlHframe.png",3);	
	PicListBox(ind++,get_img_IU3b4_1(), x*0.130208, y*0.620370, x*0.132813, y*0.314815, 0, 9000, 1,"img/BlVframe.png",4);
}

function SettingBlack(){
	var ind=0;
	var x =  screen.width * window.devicePixelRatio;
	var y = screen.height * window.devicePixelRatio;
	document.body.style.background="url(img/bgBk.jpg) no-repeat";
	document.body.style.backgroundSize=getW()+"px ";//+getH()+"px";
	//Left Upper	
	PicListBox(ind++,get_img_IU3b4_1(), x*0.0013021, y*0.00231481, x*0.1015625, y*0.24074074, 0, 9000, 1,"img/BkVframe.png",7);	
	PicListBox(ind++,get_img_IU4b3_2(), x*0.1041667, y*0.00231481, x*0.09375, y*0.12962963, 0, 9800, 1,"img/BkHframe.png",7);
	PicListBox(ind++,get_img_IU1b1_2(), x*0.19921875, y*0.00231481, x*0.07291667, y*0.12962963, 0, 9400, 1,"img/BkHframe.png",7);	
	PicListBox(ind++,get_img_IU9b16_1(), x*0.0013021, y*0.25462963, x*0.09140625, y*0.28888889, 0, 10200, 1,"img/BkVframe.png",7);
	//Right Upper
	PicListBox(ind++,get_img_IU2b3_1(), x*0.70703125, y*0.00462963, x*0.078125, y*0.20833333, 0, 8500, 1,"img/BkVframe.png",7);		
	//Right Lower
	PicListBox(ind++,get_img_IU1b1_3(), x*0.89453125, y*0.55555556, x*0.10416667, y*0.1851852, 0, 10500, 1,"img/BkHframe.png",7);
	PicListBox(ind++,get_img_IU1b1_1(), x*0.40104167, y*0.79166667, x*0.096354167, y*0.1712963, 0, 9200, 1,"img/BkHframe.png",7);		
	PicListBox(ind++,get_img_IU4b3_1(), x*0.5, y*0.79166667, x*0.1283854167, y*0.1712963, 0, 9500, 1,"img/BkHframe.png",7);	
	PicListBox(ind++,get_img_IU3b2_1(), x*0.6315104167, y*0.79166667, x*0.14453125, y*0.1712963, 0, 8800, 1,"img/BkHframe.png",7);		
	PicListBox(ind++,get_img_IU16b9_1(), x*0.78125, y*0.7453704, x*0.21666667, y*0.21666667, 0, 9600, 1,"img/BkHframe.png",7);	
}

function SettingWhite(){
	var ind=0;
	var x =  screen.width * window.devicePixelRatio;
	var y = screen.height * window.devicePixelRatio;
	document.body.style.background="url(img/bgWh.jpg) no-repeat";
	document.body.style.backgroundSize=getW()+"px ";//+getH()+"px";
	//Left Upper		
	PicListBox(ind++,get_img_IU4b3_2(), x*0.041667, y*0.009259, x*0.104167, y*0.138889, 0, 9800, 1,"img/WhHframe.png",8);	
	PicListBox(ind++,get_img_IU1b1_1(), x*0.153646, y*0.009259, x*0.078125, y*0.138889, 0, 9200, 1,"img/WhHframe.png",8);		
	PicListBox(ind++,get_img_IU3b2_1(), x*0.240885, y*0.009259, x*0.1171875, y*0.138889, 0, 8800, 1,"img/WhHframe.png",8);			
	PicListBox(ind++,get_img_IU3b4_1(), x*0.041667, y*0.166667, x*0.078125, y*0.185185, 0, 9000, 1,"img/WhVframe.png",9);	
	PicListBox(ind++,get_img_IU16b9_1(), x*0.1328125, y*0.166667, x*0.18515625, y*0.185185, 0, 9600, 1,"img/WhHframe.png",8);
	//Left Lower
	PicListBox(ind++,get_img_IU9b16_1(), x*0.041667, y*0.601852, x*0.09375, y*0.296296, 0, 10200, 1,"img/WhVframe.png",9);
	PicListBox(ind++,get_img_IU1b1_2(), x*0.145833, y*0.599537, x*0.078125, y*0.138889, 0, 9400, 1,"img/WhHframe.png",8);
	//Right Upper
	PicListBox(ind++,get_img_IU4b3_1(), x*0.890625, y*0.009259, x*0.104167, y*0.138889, 0, 9500, 1,"img/WhHframe.png",8);
	PicListBox(ind++,get_img_IU2b3_1(), x*0.891927, y*0.171296, x*0.1015625, y*0.270833, 0, 8500, 1,"img/WhVframe.png",9);		
	PicListBox(ind++,get_img_IU1b1_3(), x*0.890625, y*0.462963, x*0.104167, y*0.185185, 0, 10500, 1,"img/WhHframe.png",8);
	
}
 
function SettingCeleb(){
	var ind=0;
	var x =  screen.width * window.devicePixelRatio;
	var y = screen.height * window.devicePixelRatio;
	document.body.style.background="url(img/CelebBG.jpg) no-repeat";
	document.body.style.backgroundSize=getW()+"px ";//+getH()+"px";
	
	//Left
	PicListBox(ind++,get_img_IU4b3_2(), x*0.0078125, y*0.097222, x*0.2015625, y*0.2675, 0, 9800, 1,"img/CLHframe.png",10);
	PicListBox(ind++,get_img_IU3b4_1(), x*0.005859, y*0.394444, x*0.09375, y*0.222222, 0, 8200, 1,"img/CLVframe.png",11);
	PicListBox(ind++,get_img_IU2b3_1(), x*0.005859, y*0.645833, x*0.09375, y*0.25, 0, 10500, 1,"img/CLVframe.png",11);
	PicListBox(ind++,get_img_IU4b3_1(), x*0.107429, y*0.784722, x*0.125, y*0.166667, 0, 9500, 1,"img/CLHframe.png",10);
	PicListBox(ind++,get_img_IU1b1_1(), x*0.240234, y*0.784722, x*0.09375, y*0.166667,0, 7200, 1,"img/CLHframe.png",10);
	//Right
	PicListBox(ind++,get_img_IU9b16_1(), x*0.858203, y*0.395833, x*0.123047, y*0.388889, 0, 10000, 1,"img/CLVframe.png",11);
	PicListBox(ind++,get_img_IU16b9_1(), x*0.84375, y*0.813889, x*0.1375, y*0.1375, 0, 9600, 1,"img/CLHframe.png",10);
	PicListBox(ind++,get_img_IU3b2_1(), x*0.716797, y*0.8125, x*0.1171875,y*0.138889, 0, 8800, 1,"img/CLHframe.png",11);
	PicListBox(ind++,get_img_IU1b1_2(), x*0.630859, y*0.8125, x*0.078125,y*0.138889, 0, 6400, 1,"img/CLHframe.png",10);	
	PicListBox(ind++,get_img_IU1b1_3(), x*0.544922, y*0.8125, x*0.078125, y*0.138889, 0, 10500, 1,"img/CLHframe.png",10);	


	
}

function SettingGreen(){
	var ind=0;
	var x=screen.width * window.devicePixelRatio;
	var y =screen.height * window.devicePixelRatio;
	document.body.style.background="url(img/bgGr.jpg) no-repeat";
	document.body.style.backgroundSize=getW()+"px ";//+getH()+"px";
	
	//Left Upper
	PicListBox(ind++,get_img_IU1b1_1(), x*0.014535, y*0.125, x*0.101744, y*0.243056, 0, 6200, 1,"img/GrHframe.png",5);		
	PicListBox(ind++,get_img_IU1b1_2(), x*0.139535, y*0.027778, x*0.142442, y*0.340278, 0, 9400, 1,"img/GrHframe.png",5);	
	PicListBox(ind++,get_img_IU2b3_1(), x*0.308140, y*0.027778, x*0.098837, y*0.340278, 0, 8500, 1,"img/GrVframe.png",6);
	PicListBox(ind++,get_img_IU1b1_3(), x*0.424419, y*0.034722, x*0.072674, y*0.173611, 0, 10500, 1,"img/GrHframe.png",5);	
	//Left Lower
	PicListBox(ind++,get_img_IU16b9_1(), x*0.014535, y*0.413194, x*0.148837, y*0.2, 0, 8600, 1,"img/GrHframe.png",5);	
	PicListBox(ind++,get_img_IU4b3_2(), x*0.186047, y*0.413194, x*0.116279, y*0.208333, 0, 7800, 1,"img/GrHframe.png",5);
	PicListBox(ind++,get_img_IU9b16_1(), x*0.325581, y*0.430556, x*0.099419, y*0.422222, 0, 10200, 1,"img/GrVframe.png",6);	
	//Right
	PicListBox(ind++,get_img_IU4b3_1(), x*0.732558, y*0.027778, x*0.110465, y*0.197917, 0, 9500, 1,"img/GrHframe.png",5);			
	PicListBox(ind++,get_img_IU3b4_1(), x*0.866279, y*0.034722, x*0.113372, y*0.361111, 0, 11000, 1,"img/GrVframe.png",6);
	PicListBox(ind++,get_img_IU3b2_1(), x*0.886628, y*0.4375, x*0.096802, y*0.154167, 0, 6800, 1,"img/GrHframe.png",5);
}

function SettingCeleb21(){
	var ind=0;
	var x=screen.width * window.devicePixelRatio;
	var y =screen.height * window.devicePixelRatio;
	document.body.style.background="url(img/Celeb21BG.jpg) no-repeat";
	document.body.style.backgroundSize=getW()+"px ";//+getH()+"px";
	//Top Right
	PicListBox(ind++,get_img_IU1b1_1(), x*0.732558, y*0.020833, x*0.117733, y*0.28125, 0, 6200, 1,"img/CLHframe.png",10);	
	PicListBox(ind++,get_img_IU2b3_1(), x*0.863372, y*0.029167, x*0.12907, y*0.4625, 0, 8500, 1,"img/CLVframe.png",11);
	//Right Mid
	PicListBox(ind++,get_img_IU4b3_2(), x*0.603198, y*0.588194, x*0.116279, y*0.208333, 0, 7800, 1,"img/CLHframe.png",10);
	PicListBox(ind++,get_img_IU9b16_1(), x*0.732558, y*0.347222, x*0.117733, y*0.444444, 0, 10200, 1,"img/CLVframe.png",11);
	PicListBox(ind++,get_img_IU16b9_1(), x*0.555814, y*0.336806, x*0.162791, y*0.21875, 0, 8600, 1,"img/CLHframe.png",10);	
	PicListBox(ind++,get_img_IU1b1_3(), x*0.863372, y*0.545139, x*0.12907, y*0.21875, 0, 10500, 1,"img/CLHframe.png",10);	
	//Left
	PicListBox(ind++,get_img_IU3b2_1(), x*0.008721, y*0.020833, x*0.139535,y*0.222222, 0, 6800, 1,"img/CLHframe.png",10);
	PicListBox(ind++,get_img_IU4b3_1(), x*0.008721, y*0.274306, x*0.139535, y*0.236111, 0, 9500, 1,"img/CLHframe.png",10);	
	PicListBox(ind++,get_img_IU1b1_2(), x*0.008721,y*0.545139, x*0.139535, y*0.333333, 0, 9400, 1,"img/CLHframe.png",10);	
	PicListBox(ind++,get_img_IU3b4_1(), x*0.159884, y*0.027778, x*0.104651, y*0.333333, 0, 11000, 1,"img/CLVframe.png",11);
}

function SetPkFrame(x, y, w, h,file) {
	var frame = document.createElement("IMG");
    frame.setAttribute("src", file);
    frame.style.position = "absolute";
    frame.style.left = x-w*0.06875+"px";
    frame.style.top = y-h*0.09166+"px";
    frame.style.width = w+w*0.1375+"px";
    frame.style.height = h+h*0.1833+"px";
    document.body.appendChild(frame);
}
function SetPkVframe(x, y, w, h,file) {
	var frame = document.createElement("IMG");
    frame.setAttribute("src", file);
    frame.style.position = "absolute";
    frame.style.left = x-w*0.09166+"px";
    frame.style.top = y-h*0.06875+"px";
    frame.style.width = w+w*0.1833+"px";
    frame.style.height = h+h*0.1375+"px";
    document.body.appendChild(frame);
}

function SetBlframe(x, y, w, h,file) {
	var frame = document.createElement("IMG");
	var sx=screen.width;
	var sy =screen.height;
    frame.setAttribute("src", file);
    frame.style.position = "absolute";
    frame.style.left = x-w*0.0211267+"px";
    frame.style.top = y-h*0.0375586+"px";
    frame.style.width = w+w*0.04225352+"px";
    frame.style.height = h+h*0.0751173+"px";
    document.body.appendChild(frame);
}
function SetBlVframe(x, y, w, h,file) {
	var frame = document.createElement("IMG");
	var sx=screen.width;
	var sy =screen.height;
    frame.setAttribute("src", file);
    frame.style.position = "absolute";
    frame.style.left = x-w*0.0375586+"px";
    frame.style.top = y-h*0.0211267+"px";
    frame.style.width = w+w*0.0751173+"px";
    frame.style.height = h+h*0.0422535+"px";
    document.body.appendChild(frame);
}

function SetGrframe(x, y, w, h,file) {
	var frame = document.createElement("IMG");
	var sx=screen.width;
	var sy =screen.height;
    frame.setAttribute("src", file);
    frame.style.position = "absolute";
    frame.style.left = x-w*0.0888888+"px";
    frame.style.top = y-h*0.0954198+"px";
    frame.style.width = w+w*0.1777778+"px";
    frame.style.height = h+h*0.1908397+"px";
    document.body.appendChild(frame);
}
function SetGrVframe(x, y, w, h,file) {
	var frame = document.createElement("IMG");
	var sx=screen.width;
	var sy =screen.height;
    frame.setAttribute("src", file);
    frame.style.position = "absolute";
    frame.style.left = x-w*0.1166667+"px";
    frame.style.top = y-h*0.0859375+"px";
    frame.style.width = w+w*0.2333333+"px";
    frame.style.height = h+h*0.171875+"px";
    document.body.appendChild(frame);
}

function SetBkframe(x, y, w, h,file) {
	var frame = document.createElement("IMG");
	var sx=screen.width;
	var sy =screen.height;
    frame.setAttribute("src", file);
    frame.style.position = "absolute";
    frame.style.left = x-w*0.0152207+"px";
    frame.style.top = y-h*0.0222222+"px";
    frame.style.width = w+w*0.0304414+"px";
    frame.style.height = h+h*0.0444444+"px";
    document.body.appendChild(frame);
}

function SetWhframe(x, y, w, h,file) {
	var frame = document.createElement("IMG");
	var sx=screen.width;
	var sy =screen.height;
    frame.setAttribute("src", file);
    frame.style.position = "absolute";
    frame.style.left = x-w*0.028125+"px";
    frame.style.top = y-h*0.0375+"px";
    frame.style.width = w+w*0.05625+"px";
    frame.style.height = h+h*0.075+"px";
    document.body.appendChild(frame);
}
function SetWhVframe(x, y, w, h,file) {
	var frame = document.createElement("IMG");
	var sx=screen.width;
	var sy =screen.height;
    frame.setAttribute("src", file);
    frame.style.position = "absolute";
    frame.style.left = x-w*0.0375+"px";
    frame.style.top = y-h*0.028125+"px";
    frame.style.width = w+w*0.075+"px";
    frame.style.height = h+h*0.05625+"px";
    document.body.appendChild(frame);
}

function SetCLHframe(x, y, w, h,file) {
	var frame = document.createElement("IMG");
	var sx=screen.width;
	var sy =screen.height;
    frame.setAttribute("src", file);
    frame.style.position = "absolute";
    frame.style.left = x-w*0.018895+"px";
    frame.style.top = y-h*0.045139+"px";
    frame.style.width = w+w*0.037791+"px";
    frame.style.height = h+h*0.090277+"px";
    document.body.appendChild(frame);
}
function SetCLVframe(x, y, w, h,file) {
	var frame = document.createElement("IMG");
	var sx=screen.width;
	var sy =screen.height;
    frame.setAttribute("src", file);
    frame.style.position = "absolute";
    frame.style.left = x-w*0.018895+"px";
    frame.style.top = y-h*0.045139+"px";
    frame.style.width = w+w*0.037791+"px";
    frame.style.height = h+h*0.090277+"px";
    document.body.appendChild(frame);
}

function PicListBox(index, files, x, y, w, h, fadeinTime, showTime, blur,file,fNum) 
{
    if(files.length==0) return;
    var id = "a"+index;
    var dv = createDiv(id, x, y, w, h);
    document.body.appendChild(dv);
    var imgList = Array();
    for(var i = 0; i < files.length; i++) {
	var ig = document.createElement("img");
	ig.onload = function(ig) {
	    return function() {
		ig.onload = null;
		if(ig.width/ig.height > w/h) {			
		    ig.height = h;
		}
		else {
		    ig.width = w;
		}
	    }
	}(ig);
	dv.appendChild(ig);
	ig.id = id+i;
	ig.src = files[i];
	ig.style.display = "none";
	//ig.style.position = "absolute";
	ig.style.cssText += getBlurStr(0);
	if(fNum==1){
	SetPkFrame(x,y,w,h,file)}
	else if(fNum==2){
	SetPkVframe(x,y,w,h,file)}
	else if(fNum==3){
	SetBlframe(x,y,w,h,file)}
	else if(fNum==4){
	SetBlVframe(x,y,w,h,file)}
	else if(fNum==5){
	SetGrframe(x,y,w,h,file)}
	else if(fNum==6){
	SetGrVframe(x,y,w,h,file)}
	else if(fNum==7){
	SetBkframe(x,y,w,h,file)}
	else if(fNum==8){
	SetWhframe(x,y,w,h,file)}
	else if(fNum==9){
	SetWhVframe(x,y,w,h,file)}
	else if(fNum==10){
	SetCLHframe(x,y,w,h,file)}
	else if(fNum==11){
	SetCLVframe(x,y,w,h,file)}
    }
    $("#"+id+0).fadeIn(fadeinTime);
    if(files.length==1) return;
    var index = 0;
    setInterval(function() {
	if(files.length>2)
	{
	    var lastid;
	    if(index==0)
		var lastid = "#"+id+(files.length-1);
	    else
		var lastid = "#"+id+(index-1);
	    $(lastid).css("display", "none");
	}
	var curid = "#"+id+index;
	$(curid).css("z-index", 0);
	index=(index+1)%files.length;
	var nextid = "#"+id+index;
	$(nextid).css("display", "none");
	$(nextid).css("z-index", 1);
	$(nextid).fadeIn(fadeinTime);
    }, fadeinTime+showTime);
}

function setVideo(index, x, y, w, h, fadeinTime, showTime, blur,file,fNum,vidNum,vidVol) {
    var id = "a"+index;
    var dv = createDiv(id, x, y, w, h);
    document.body.appendChild(dv);
    var video = document.createElement("video");
    video.id = "videoPV";
    video.volume = vidVol;
    video.height = h;
	if (typeof vidNum === 'string' || vidNum instanceof String){
		video.src=vidNum}
	else{
		video.src = vidNum+".webm";
	}
    video.autoplay = "autoplay";
    video.loop = "loop";
    video.style.position = "absolute";
    dv.appendChild(video);
	if(fNum==1){
	SetPkFrame(x,y,w,h,file)}
	else if(fNum==2){
	SetPkVframe(x,y,w,h,file)}
	else if(fNum==3){
	SetBlframe(x,y,w,h,file)}
	else if(fNum==4){
	SetBlVframe(x,y,w,h,file)}
	else if(fNum==5){
	SetGrframe(x,y,w,h,file)}
	else if(fNum==6){
	SetGrVframe(x,y,w,h,file)}
	else if(fNum==7){
	SetBkframe(x,y,w,h,file)}
	else if(fNum==8){
	SetWhframe(x,y,w,h,file)}
	else if(fNum==9){
	SetWhVframe(x,y,w,h,file)}
	else if(fNum==10){
	SetCLHframe(x,y,w,h,file)}
	else if(fNum==11){
	SetCLVframe(x,y,w,h,file)}
}

function setLoopVideo(index, x, y, w, h, fadeinTime, showTime, blur,file,fNum,vidNum,vidVol) {
    var id = "a"+index;
    var dv = createDiv(id, x, y, w, h);
    document.body.appendChild(dv);
    var video = document.createElement("video");
    var n = 24;//Number of Video
    video.id = "videoPV";
    video.src = vidNum+".webm";
    video.volume = vidVol;
    video.height = h;
    video.autoplay = "autoplay";
    video.style.position = "absolute";
    dv.appendChild(video);
    video.addEventListener('ended', next, false);	
    function next() {
     vidNum++;
      if (vidNum<n) {
        video.src = vidNum+".webm";
      }
      else if(vidNum>=n){
	vidNum=0;
	video.src = vidNum+".webm";
      }
	video.play();
    }
    	if(fNum==1){
	SetPkFrame(x,y,w,h,file)}
	else if(fNum==2){
	SetPkVframe(x,y,w,h,file)}
	else if(fNum==3){
	SetBlframe(x,y,w,h,file)}
	else if(fNum==4){
	SetBlVframe(x,y,w,h,file)}
	else if(fNum==5){
	SetGrframe(x,y,w,h,file)}
	else if(fNum==6){
	SetGrVframe(x,y,w,h,file)}
	else if(fNum==7){
	SetBkframe(x,y,w,h,file)}
	else if(fNum==8){
	SetWhframe(x,y,w,h,file)}
	else if(fNum==9){
	SetWhVframe(x,y,w,h,file)}
	else if(fNum==10){
	SetCLHframe(x,y,w,h,file)}
	else if(fNum==11){
	SetCLVframe(x,y,w,h,file)}
	
	
}

function createDiv(id, x, y, w, h) {
    var dv = document.createElement("div");
    dv.id = id;
    dv.style.position = "absolute";
    dv.style.left = x+"px";
    dv.style.top = y+"px";
    dv.style.overflow = "hidden";
    dv.style.width = w+"px";
    dv.style.height = h+"px";
    dv.style.marginStyle = "solid";
    dv.style.marginWidth = "0px";
    dv.style.marginColor = "#333333";
    return dv;
}


function getBlurStr(blur) {
    var s = "";
    s += "-webkit-filter: blur("+blur+"px);"
    s += "-moz-filter: blur("+blur+"px);";
    s += "-ms-filter: blur("+blur+"px);";
    s += "filter: blur("+blur+"px);";
    return s;
}

function getW() {
	return screen.width * window.devicePixelRatio;
}

function getH() {
    return screen.height * window.devicePixelRatio;
}
