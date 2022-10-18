import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-608027a5.js","imports":["_app/immutable/start-608027a5.js","_app/immutable/chunks/index-9e3cf928.js","_app/immutable/chunks/singletons-4bc9c83d.js"],"stylesheets":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "api/getPassword",
				pattern: /^\/api\/getPassword\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/getPassword/_server.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
