module.exports = {
	type: "css",
	styles: new Map([
		[
			"folder",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { height: 18px; top: 6px; width: 27px; }",
				".extend::after { border-bottom: none; border-radius: 3px 3px 0px 0px; height: 3px; left: 1px; top: -5px; width: 10px; }",
				".extend::before { border: none; }"
			]
		],
		[
			"newDoc",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { border-top: 2px solid rgb(255, 204, 102); box-shadow: rgb(255, 238, 221) 0px 0px 0px 2px inset; height: 15px; top: 10px; width: 20px; }",
				".extend::after { height: 10px; right: 1px; top: -9px; width: 10px; z-index: -1; transform: rotate(45deg); }",
				".extend::before { border-bottom: none; border-right: 2px solid rgb(255, 204, 102); height: 10px; left: -2px; top: -12px; width: 11px; }"
			]
		],
		[
			"mail",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { height: 20px; top: 4px; width: 28px; }",
				".extend::after, .extend::before { border-top: none; top: 6px; width: 13px; }",
				".extend::after { left: -2px; transform: rotate(25deg); }",
				".extend::before { right: -2px; transform: rotate(-25deg); }"
			]
		],
		[
			"contacts",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { border-left-width: 6px; color: rgb(255, 204, 102); font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; font-size: 12px; line-height: 1; font-family: sans-serif; height: 25px; text-decoration: none; width: 18px; }",
				".extend::after, .extend::before { border: none; }",
				'.extend::after { content: "@"; right: 3px; top: 5px; }'
			]
		],
		[
			"calendar",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { height: 23px; top: 2px; width: 27px; }",
				".extend::after { bottom: 19px; left: -2px; right: -2px; top: -2px; }",
				".extend::before { background: none; border-bottom: 4px none; border-top: 4px none; border-right-width: 4px; border-left-width: 4px; bottom: 23px; left: 2px; right: 2px; top: -4px; }"
			]
		],
		[
			"clock",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { border-radius: 100%; height: 26px; width: 26px; }",
				".extend::after, .extend::before { border-left: none; width: 0px; }",
				".extend::after { height: 9px; left: 12px; top: 3px; }",
				".extend::before { height: 4px; left: 15px; top: 8px; transform: rotate(45deg); }"
			]
		],
		[
			"chart",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { height: 20px; margin-right: 30px; top: 5px; width: 4px; }",
				".extend::after, .extend::before { bottom: -2px; width: 4px; }",
				".extend::after { height: 25px; left: 8px; }",
				".extend::before { height: 15px; left: 18px; }"
			]
		],
		[
			"prev",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { border-radius: 100%; height: 26px; width: 26px; }",
				".extend::after, .extend::before { border-radius: 2px; height: 0px; left: 5px; width: 9px; }",
				".extend::after { bottom: 8px; transform: rotate(45deg); }",
				".extend::before { top: 8px; transform: rotate(-45deg); }"
			]
		],
		[
			"next",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { border-radius: 100%; height: 26px; width: 26px; }",
				".extend::after, .extend::before { border-radius: 2px; height: 0px; right: 5px; width: 9px; }",
				".extend::after { top: 8px; transform: rotate(45deg); }",
				".extend::before { bottom: 8px; transform: rotate(-45deg); }"
			]
		],
		[
			"flag",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { height: 25px; margin-right: 35px; width: 0px; }",
				".extend::after, .extend::before { height: 8px; left: 0px; top: -2px; width: 10px; }",
				".extend::before { left: 6px; top: 2px; }"
			]
		],
		[
			"add",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { border-radius: 100%; height: 26px; width: 26px; }",
				".extend::after { height: 16px; left: 11px; top: 3px; width: 0px; }",
				".extend::before { height: 0px; left: 3px; top: 11px; width: 16px; }"
			]
		],
		[
			"subtract",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { border-radius: 100%; height: 26px; width: 26px; }",
				".extend::after { height: 0px; left: 3px; top: 11px; width: 16px; }",
				".extend::before { border: none; }"
			]
		],
		[
			"tick",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { border-radius: 100%; height: 26px; width: 26px; }",
				".extend::after { height: 14px; left: 13px; top: 5px; width: 0px; transform: rotate(45deg); }",
				".extend::before { height: 0px; left: 4px; top: 14px; width: 2px; transform: rotate(45deg); }"
			]
		],
		[
			"cross",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { border-radius: 100%; height: 26px; width: 26px; }",
				".extend::after { height: 0px; left: 3px; top: 11px; width: 16px; transform: rotate(45deg); }",
				".extend::before { height: 0px; left: 3px; top: 11px; width: 16px; transform: rotate(-45deg); }"
			]
		],
		[
			"user",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { border-radius: 10px 10px 0px 0px; height: 6px; top: 19px; width: 26px; }",
				".extend::after { border-radius: 10px; height: 17px; left: 4px; top: -20px; width: 14px; }",
				".extend::before { border: none; height: 10px; left: 9px; top: -9px; width: 8px; z-index: 1; }"
			]
		],
		[
			"comment",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { border-radius: 4px; height: 18px; width: 26px; }",
				".extend::after, .extend::before { background: none; border-width: 6px; border-style: solid; border-color: rgb(255, 204, 102) transparent transparent; bottom: -14px; height: 0px; left: 7px; width: 0px; }",
				".extend::before { border-top-color: rgb(255, 238, 221); bottom: -11px; z-index: 1; }"
			]
		],
		[
			"heart",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { border-radius: 100%; height: 15px; margin-right: 24px; width: 15px; }",
				".extend::after { border-radius: 100%; height: 15px; left: 11px; top: -2px; width: 15px; z-index: -1; }",
				".extend::before { border-left: none; border-top: none; height: 16px; left: 5px; top: 6px; width: 16px; transform: rotate(45deg); }"
			]
		],
		[
			"home",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { height: 10px; top: 14px; width: 20px; }",
				".extend::after, .extend::before { background: none; }",
				".extend::after { border-width: 15px 16px; border-style: solid; border-color: transparent transparent rgb(255, 204, 102); height: 0px; left: -6px; top: -29px; width: 0px; }",
				".extend::before { border-width: 10px 11px; border-style: solid; border-color: transparent transparent rgb(255, 238, 221); height: 0px; left: -1px; top: -21px; width: 0px; z-index: 1; }"
			]
		],
		[
			"batFull",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { height: 22px; margin-left: 18px; margin-right: 18px; top: 3px; width: 8px; }",
				".extend::after { bottom: 2px; left: 2px; right: 2px; top: 2px; }",
				".extend::before { height: 0px; left: 1px; right: 1px; top: -4px; }"
			]
		],
		[
			"batEmpty",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { height: 22px; margin-left: 18px; margin-right: 18px; top: 3px; width: 8px; }",
				".extend::after { bottom: 2px; left: 2px; right: 2px; top: 16px; }",
				".extend::before { height: 0px; left: 1px; right: 1px; top: -4px; }"
			]
		],
		[
			"play",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { border-radius: 100%; height: 26px; width: 26px; }",
				".extend::after, .extend::before { background: none; }",
				".extend::after { border-width: 8px 13px; border-style: solid; border-color: transparent transparent transparent rgb(255, 204, 102); height: 0px; left: 8px; top: 5px; width: 0px; }",
				".extend::before { border: none; }"
			]
		],
		[
			"pause",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { border-radius: 100%; height: 26px; width: 26px; }",
				".extend::after, .extend::before { height: 10px; top: 6px; width: 0px; }",
				".extend::after { left: 7px; }",
				".extend::before { left: 15px; }"
			]
		],
		[
			"stop",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { border-radius: 100%; height: 26px; width: 26px; }",
				".extend::after { background: rgb(255, 204, 102); height: 9px; left: 7px; top: 7px; width: 8px; }",
				".extend::before { border: none; }"
			]
		],
		[
			"eject",
			[
				".extend { background-color: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); display: inline-block; position: relative; vertical-align: top; }",
				'.extend::after, .extend::before { background: rgb(255, 238, 221); border: 2px solid rgb(255, 204, 102); content: ""; position: absolute; }',
				".extend { height: 4px; top: 20px; width: 26px; }",
				".extend::after, .extend::before { background: none; }",
				".extend::after { border-width: 15px; border-style: solid; border-color: transparent transparent rgb(255, 204, 102); height: 0px; left: -2px; top: -35px; width: 0px; }",
				".extend::before { border-width: 10px; border-style: solid; border-color: transparent transparent rgb(255, 238, 221); height: 0px; left: 3px; top: -27px; width: 0px; z-index: 1; }"
			]
		]
	])
};
