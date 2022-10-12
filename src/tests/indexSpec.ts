import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint responses', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
    });
    it('gets an endpoint that doesnt exist', async () => {
        const response = await request.get('/resize');
        expect(response.status).toBe(404);
    });

    describe('Test /images endpoint responses', () => {
        it('gets /images?filename=fjord - one input', async () => {
            const response = await request.get('/api/images?filename=fjord');
            expect(response.status).toBe(200);
        });
        it('gets /images?filename=fjord&width=200&height=200 - valid inputs', async () => {
            const response = await request.get(
                '/api/images?filename=fjord&width=200&height=200'
            );
            expect(response.status).toBe(200);
        });
        it('gets /images?filename=cat - image not found', async () => {
            const response = await request.get('/api/images?filename=cat');
            expect(response.status).toBe(400);
        });
        it('gets /images - no input', async () => {
            const response = await request.get('/api/images');
            expect(response.status).toBe(400);
        });
        it('gets /images?filename=fjord&width=200&height=hundred - invalid inputs', async () => {
            const response = await request.get(
                '/api/images?filename=fjord&width=200&height=hundred'
            );
            expect(response.status).toBe(400);
        });
    });
});
