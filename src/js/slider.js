function onSlide(obj){
	var instr_id = parseInt($(obj).attr("id").replace("instr_","").replace("_slider",""));
	var slider_val = $(obj).val();
	var abs_val = instrumente[instr_id].starttuning+slider_val;
	instrumente[instr_id].tuning = abs_val;
	alert(abs_val);
}