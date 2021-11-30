const BASE_URL = "https://opentdb.com/api.php?amount=";

const Api = async (endpoint) => {
    const req = await fetch(`${BASE_URL}${endpoint}`);
    const json = await req.json();
    return json;
}
 // eslint-disable-next-line
export default {
    getQuestions: async (qtdQuestions) => {
        return {
            questions: await Api(`${qtdQuestions}`)
        }
    }
}