const VERBOSE = (process.env.VERBOSE === 'true');

const log = VERBOSE ? (message => console.log(message)) : (() => {});

module.exports = { log };
