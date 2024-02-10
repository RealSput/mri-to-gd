const convert = require('nifti-to-mesh');
const OBJFile = require('obj-file-parser');

(async () => {
	const file = await convert({
		input: 'bet.nii.gz',
		output: 'out.obj',
		reduction: 0.005
	});

	const $obj = new OBJFile(file.toString()).parse().models[0];
	console.log('vertices:', $obj.vertices.length)
})();
