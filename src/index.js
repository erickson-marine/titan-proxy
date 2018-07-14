const proxy = require('redbird')({
    port: 80,
    ssl: {
        port: 443,
        http2: true,
        key: "./src/certs/private.pem",
        cert: "./src/certs/public.pem"
    },
});

const docker = require('redbird').docker;
//docker(proxy).register("hub.dbztech.com", "joxit/docker-registry-ui:static", {ssl: true});

// Route to any global ip
proxy.register("jira.ericksonmarine.net", "http://jira_jira_1:8080", {ssl: true});
proxy.register("wiki.ericksonmarine.net", "http://mediawiki_mediawiki_1:8080", {ssl: true});
