import {scanner} from "./scanner";
import {Token} from "./token";
import {isKeyword, symbolsTable} from "./symbols";

const SOURCE_FILE_PATH = 'input/fonte.alg';

export function* lexicon(): Generator<Token> {
    const wordGenerator = scanner(SOURCE_FILE_PATH);
    let word = wordGenerator.next();
    while (!word.done) {
        const token: Token = word.value;
        if (token.class !== 'ERROR' && !isKeyword(token.lex)) {
            symbolsTable.push(word.value);
        }
        yield word.value;
        word = wordGenerator.next();
    }
}
