const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.destroy,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.TiledBg,
		C3.Plugins.Audio,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.TiledBg.Acts.SetVisible,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Button.Acts.SetVisible,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{"8Direction": 0},
	{Sprite: 0},
	{DestroyOutsideLayout: 0},
	{ticket: 0},
	{Text: 0},
	{Start: 0},
	{TiledBackground: 0},
	{TiledBackground2: 0},
	{Text2: 0},
	{Score: 0},
	{TiledBackground3: 0},
	{FinalText: 0},
	{RestartButton: 0},
	{Text3: 0},
	{Audio: 0},
	{Timer: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	ticket: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Start: class extends self.IButtonInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	Text2: class extends self.ITextInstance {},
	Score: class extends self.ITextInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	FinalText: class extends self.ITextInstance {},
	RestartButton: class extends self.IButtonInstance {},
	Text3: class extends self.ITextInstance {},
	Audio: class extends self.IInstance {}
}