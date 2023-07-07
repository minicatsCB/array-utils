import * as http from "http";

function onData(chunk: any): void {
	console.log(`Data received in response: ${chunk}`);
}

function onEnd():void {
	console.log('No more data in response.');
}

function onResponse(res: http.IncomingMessage): void {
	console.log(`Response status: ${res.statusCode}`);
	console.log(`Response headers: ${JSON.stringify(res.headers)}`);

	res.setEncoding('utf8');
	
	res.on('data', onData);
	res.on('end', onEnd);
}

function onError(e: Error): void {
	console.error(`Error on HTTP request: ${e.message}`);
}

export function sendData(data: string, pluginName: string, machineId: string): void {
	const options: http.RequestOptions = {
		hostname: "http://localhost",	// NOTE: temporary harcoded to localhost for testing purposes
		port: 3000,
		path: '/',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': Buffer.byteLength(data),
			'X-Plugin-Name': pluginName,
			'X-Machine-Id': machineId
		}
	};
	const req: http.ClientRequest = http.request(options, onResponse);

	req.on('error', onError);

	req.write(data);
	req.end();
}
