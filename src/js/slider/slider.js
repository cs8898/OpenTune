function createSlider(sliderObj,minV,maxV,stepV){
	$(sliderObj).slider({ orientation: "vertical", min: minV,max: maxV, step: stepV });
}