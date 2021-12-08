(async () => {
    const db = require("./db");
    var antes1 = Date.now();
    console.log('--------------------HARDCODED--------------------');
    await db.selectHardCoded();
    var duracao1 = (Date.now() - antes1) / 1000;

    setTimeout(async () => {
        var antes = Date.now();
        console.log('--------------------SOFTCODED--------------------');
        await db.selectSoftCoded();
        var duracao = (Date.now() - antes) / 1000;
        console.log('selectHardCoded terminou em ', duracao1);
        console.log('selectSoftCoded terminou em ', duracao);
    }, 2000);
})();