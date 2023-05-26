const { Configuration, OpenAIApi } = require("openai");

module.exports = class openai {
    static configuration() {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
          });

        return
    }

    static textCompletion({prompt}){
        return{
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 1,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        }
    }
}
