const textgears = require('textgears-api');

const textgearsApi = textgears('R5ipFhPJocHgcOGY', {language: 'fr-FR'});

const readFile = async (req, res) => {
    if(req.files) {
        var text = req.files.text.data.toString();
        console.log(text)
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
    } else {
        res.render('index');
    }

}

module.exports = readFile;