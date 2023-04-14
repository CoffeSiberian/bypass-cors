interface BodyGetTypesNull {
    url: string | null;
    body: string | null;
    headers: HeadersInit | null;
}

interface BodyGetTypes {
    url: string;
    body: string;
    headers: HeadersInit;
}

export { BodyGetTypesNull, BodyGetTypes };
