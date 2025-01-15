import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const initializeChatCompletion = async (
  chatHistory: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = []
) => {
  /*TODO Make sure to implement storing of the user's conversation while creating the playlist.
  And use the same function checking if a conversation with this id exists in memory (e.g. localstorage)*/
  const openaiAssistant = await client.chat.completions.create({
    messages: [
      ...chatHistory,
      {
        role: "developer",
        /*TODO Refine prompt for best results and set tokens constraints */
        content: "You are given the task to create a playlist for our users.",
      },
    ],
    model: "gpt-4o-mini",
  });

  return openaiAssistant;
};

export { initializeChatCompletion };
