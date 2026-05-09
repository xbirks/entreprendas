const buckets = new Map();

const getIp = (req) => {
    const xff = req.headers['x-forwarded-for'];
    if (typeof xff === 'string' && xff.length > 0) return xff.split(',')[0].trim();
    return req.socket?.remoteAddress || 'unknown';
};

export function rateLimit(req, { max = 5, windowMs = 15 * 60 * 1000 } = {}) {
    const ip = getIp(req);
    const now = Date.now();
    const entry = buckets.get(ip);

    if (!entry || now > entry.resetAt) {
        buckets.set(ip, { count: 1, resetAt: now + windowMs });
        if (buckets.size > 1000) {
            for (const [k, v] of buckets) {
                if (now > v.resetAt) buckets.delete(k);
            }
        }
        return true;
    }

    if (entry.count >= max) return false;
    entry.count += 1;
    return true;
}
