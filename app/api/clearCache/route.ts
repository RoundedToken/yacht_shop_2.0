import { NextRequest, NextResponse } from 'next/server';
import { createRedisInstance } from '../../../redis/redis';

export async function GET(req: NextRequest) {
    const params = req.nextUrl.searchParams;
    const redis = createRedisInstance();
    const password = params.get('password');

    if (password === process.env.REDIS_DELETE_PASSWORD) {
        await redis.flushall();
        await redis.quit();

        return NextResponse.json('Кэш очищен!');
    }

    await redis.quit();
    return NextResponse.json('Неверный пароль!');
}
