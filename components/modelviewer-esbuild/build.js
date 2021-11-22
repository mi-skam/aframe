require('esbuild').build({
	entryPoints: ['script.js'],
	bundle: true,
	minify: true,
	sourcemap: true,
	outfile: 'bundle.js',
}).catch(() => process.exit(1))
