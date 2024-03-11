document.querySelectorAll('button').forEach(elemento=>{
	elemento.addEventListener('click',event=>{
		if(elemento.name==='btn_cancelar_is'){
			divsPanelCredencial(elemento.name+'btnPanelCredencial')
		}else if(!(elemento.name.includes('btnPanelCredencial'))){
			divsPanelCredencial(elemento.name)
		}
	})
})

function divsPanelCredencial(argument) {
	if(argument.includes('btnPanelCredencial')){
		document.querySelector('div[name="btns_panel_credencial"]').removeAttribute('hidden')
		document.querySelector('div[name="panel_credencial"]').setAttribute('hidden','')
	}else if(argument==='alterarTema'){
	}else{
		document.querySelector('div[name="panel_credencial"]').removeAttribute('hidden')
		document.querySelectorAll('div[name="panel_credencial"] > div').forEach(elemento=>{
			elemento.setAttribute('hidden','')
		})
		document.getElementById(argument).removeAttribute('hidden')
		document.querySelector('div[name="btns_panel_credencial"]').setAttribute('hidden','')
	}
}