interface OpenRouterResponse {
  choices: {
    message: {
      role: string;
      content: string;
    };
  }[];
}

export async function iaPrompt(): Promise<OpenRouterResponse | any> {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer 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",
        "HTTP-Referer": "http://localhost:3000/",
        "X-Title": "JsonLator",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "deepseek/deepseek-r1:free",
        "messages": [
          {
            "role": "user",
            "content": "Translate the following JSON object into English while maintaining the exact JSON structure. Provide only the translated JSON code without additional explanations or text: {message:hola}"
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    // Convertir la respuesta a JSON y asignarle el tipo OpenRouterResponse
    const data: OpenRouterResponse = await response.json();
    console.log(data); // Ver la respuesta en la consola

    // Acceder al contenido generado por el modelo
    const respuestaIA = data.choices[0].message.content;
    console.log("Respuesta de la IA:", respuestaIA);

    return respuestaIA;
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}