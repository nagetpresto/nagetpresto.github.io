function encodeBase64(data) {
    return btoa(data);
}

self.addEventListener('fetch', function(event) {
    if (event.request.method === 'POST' && event.request.url.endsWith('/encode')) {
        event.respondWith(
            event.request.text().then(function(requestBody) {
                const base64Encoded = encodeBase64(requestBody);
                return new Response(base64Encoded, {
                    headers: { 'Content-Type': 'text/plain' }
                });
            })
        );
    }
});
