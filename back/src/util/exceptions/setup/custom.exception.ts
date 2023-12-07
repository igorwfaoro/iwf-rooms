export class CustomException extends Error {
    constructor(public statusCode: number, public message: string, public error?: any) {
        super();
    }
}
