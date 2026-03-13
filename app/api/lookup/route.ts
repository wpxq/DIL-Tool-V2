import { NextResponse } from 'next/server';
import { spawn } from 'child_process';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    
    return new Promise((resolve) => {
        const pythonProcs = spawn('python3', ['main.py', code || '']);
        let resultData = "";
        pythonProcs.stdout.on('data', (data) => {
            resultData += data.toString();
        });
        pythonProcs.on('close', () => {
            try {
                const jsonResult = JSON.parse(resultData);
                resolve(NextResponse.json(jsonResult));
            } catch (e) {
                resolve(NextResponse.json({ error: "Failed to parse Py Output" }, { status: 500}));
            }
        });
    });
}
