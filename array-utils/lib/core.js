const http = require('http');

let core = {
	sendData: function(data, pluginType, machineId) {
		// NOTE: temporary harcoded to localhost for testing purposes
		const options = {
			hostname: '127.0.0.1',
			port: 3000,
			path: '/',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Content-Length': Buffer.byteLength(data),
				'X-Plugin-Type': pluginType,
				'X-Machine-Id': machineId
			}
		};
		const req = http.request(options, (res) => {
			console.log(`STATUS: ${res.statusCode}`);
			console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
			res.setEncoding('utf8');

			res.on('data', (chunk) => {
				console.log(`BODY: ${chunk}`);
			});

			res.on('end', () => {
				console.log('No more data in response.');
			});
		});

		req.on('error', (e) => {
			console.error(`problem with request: ${e.message}`);
		});

		req.write(data);
		req.end();
	}
}

module.exports = core;
