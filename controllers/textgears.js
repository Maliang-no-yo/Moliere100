
const text="Cet dictée comporte trop de faute.\n\n Une relecture attantive permettrait de les corrigés. Malleureusement, vous n ' ête pas concentrés. Il est nécessaire de faire un plus grand efort. Si vous aviez eu à écrire le mot « anthropologue » ou le mot « misanthrope », je pourrai comprendre vos hésitation légitimes. Mais il n ' en ait rien. Votre étourderie n ' a d ' égal que votre mauvaise volonté. Avec un peut de méthode, vous pouriez réussir et comblé ainsi vos lacune. Vos notes dans la matière serait sens nul doute meilleur. Alors, ses dictées que vous avais toujours tant redouté n ' auront plus aucun secret pour vous."

const textgears = require('textgears-api');

const textgearsApi = textgears('R5ipFhPJocHgcOGY', {language: 'fr-FR'});

const checkGrammar = (req, res) => {
    var text = req.query.text;
    textgearsApi.checkGrammar(text)
    .then((data) => {
        return data.response
    }).then((response) => {
        res.render('text', {
            errors: response.errors,
            text: text
        });
    })
    .catch((err) => {
        console.log(err)
    });
}

module.exports = checkGrammar;
