const proxy = require('redbird')({
    port: 80,
    ssl: {
        port: 443,
        http2: true,
        key: "./src/certs/private.pem",
        cert: "./src/certs/public.pem"
    },
    xfwd: false
});

const docker = require('redbird').docker;
//docker(proxy).register("hub.dbztech.com", "joxit/docker-registry-ui:static", {ssl: true});

// Route to any global ip
proxy.register("jira.ericksonmarine.net", "https://dbztech.com", {ssl: true});
