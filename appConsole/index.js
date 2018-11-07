const argv = require('optimist')
        .usage('Usage: $0 --controller [string] [--action [string]] [--opt [object]]')
        .demand(['controller'])
        .options('action', {
            'default' : 'index'
        })
        .options('opt', {
            alias : 'options',
            'default' : {},
            description : 'example --opt.app=mobile --opt.s=1'
        })
        .argv;

const controllers  = require(`./controllers/${argv.controller}`);

(async () => {
    await controllers[argv.action](argv.opt);
})();