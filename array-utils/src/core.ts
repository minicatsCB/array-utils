import {ClientRequest, IncomingMessage, request, RequestOptions } from "http";

function onData(chunk: any): void {
	console.log(`Data received in response: ${chunk}`);
}

function onEnd():void {
	console.log('No more data in response.');
}

function onResponse(res: IncomingMessage): void {
	console.log(`Response status: ${res.statusCode}`);
	console.log(`Response headers: ${JSON.stringify(res.headers)}`);

	res.setEncoding('utf8');
	
	res.on('data', onData);
	res.on('end', onEnd);
}

function onError(err: Error): void {
	console.error(`Error on HTTP request: ${err.message}`);
}

export function sendData(data: string, pluginName: string, machineId: string): void {
	const options: RequestOptions = {
		hostname: process.env.SERVER_HOST,
		port: 3000,
		path: '/data',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': Buffer.byteLength(data),
			'X-Plugin-Name': pluginName,
			'X-Machine-Id': machineId
		}
	};
	const req: ClientRequest = request(options, onResponse);

	req.on('error', onError);

	req.write(data);
	req.end();
}
