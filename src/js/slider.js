function onSlide(obj){
	var instr_id = parseInt($(obj).attr("id").replace("instr_","").replace("_slider",""));
	var slider_val = parseInt($(obj).val());
	var abs_val = instrumente[instr_id].starttuning + slider_val;
	instrumente[instr_id].tuning = abs_val;
	stopAudio(instr_id);
    generateAudio(instrumente[instr_id]);
}

function stopAudio(instr_id)
{
	instrumente[instr_id].audio.pause();
}
