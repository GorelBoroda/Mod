
Game.GetHud = ()=>{
	return $('#Hud');
};

let panel = $.CreatePanel('Panel', Game.GetHud(), '');

panel.style.width = '200px';
panel.style.height = '200px';
panel.style.backgroundColor = '#000019';
panel.style.position = '200px 200px 0';
panel.style.zIndex = 10000;
