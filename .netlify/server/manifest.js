export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-608027a5.js","imports":["_app/immutable/start-608027a5.js","_app/immutable/chunks/index-9e3cf928.js","_app/immutable/chunks/singletons-4bc9c83d.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "api/getPassword",
				pattern: /^\/api\/getPassword\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/getPassword/_server.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
