// const point: [number, number] = [10, 20];
// console.log(point);
// point[0] = 100;
// point[1] = 200;
// console.log(point);

// const goodStatus: [number, string] = [200, "OK"]
// console.log(goodStatus);

// Tuple Label
// const point: [x: number, y: number] = [10, 20];
// console.log(point);
// point[0] = 100;
// point[1] = 200;
// console.log(point);

// const goodStatus: [code: number, status: string] = [200, "OK"];
// const notFound: [code: number, status: string] = [404, "ไม่พบข้อมูล"];
// const badRequest: [code: number, status: string] = [400, "คำขอไม่ถูกต้อง"];
// const serverError: [code: number, status: string] = [500, "Internal Server Error"];
// console.log(goodStatus);

// Tuple Type
type HttpStatusCode = [number, string]
const goodStatus: HttpStatusCode = [200, "OK"];
const notFound: HttpStatusCode = [404, "ไม่พบข้อมูล"];
const badRequest: HttpStatusCode = [400, "คำขอไม่ถูกต้อง"];
const serverError: HttpStatusCode = [500, "Internal Server Error"];
console.log(goodStatus);