const { GoogleGenerativeAI } = require("@google/generative-ai");

// Load API key
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY; // Or hardcode: const apiKey = "YOUR_API_KEY";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // You can also use "gemini-pro" depending on your quota
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const generateScript = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: `write a two different script for 30 Second video on Topic: Kids Story,
* Do not add Scene description
* Do not add Anything in Braces, Just return the plain story in text
* Give me response in JSON format and follow the schema
-{
scripts:[
{
content:""
},
],
}`,
        },
      ],
    },
  ],
});

export const GenerateImageScript = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: `Generate Image prompt of {style} style with all deatils for each scene for 30 seconds video : script: {script}
- Just Give specifing image prompt depends on the story line
- do not give camera angle image prompt
- Follow the Folowing schema and ruturn JSON data (Max 4-5 Images)
- [
    {
        imagePrompt:'',
        sceneContent:' <Script Content>
    }
]`,
        },
      ],
    },
  ],
});

//   const result = await chat.sendMessage("Give me the response");
//   const responseText = result.response.text();
//   console.log("Response:", responseText);
