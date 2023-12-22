"use client";
import "../../styles/chatIA/index.css";
import React, {
  useEffect,
  useState,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
} from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

import { Inter } from "@next/font/google";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const IA_TYPES = { chatbot: "chatbot", discribeimage: "discribeimage" };

interface PropsResultText {
  role: string;
  parts: string;
}
interface Parts {
  prompt: string;
  images?: Array<string>;
}

interface PropsDiscribeImage {
  role: string;
  parts: Parts;
}

export default function RootLayout() {
  const [inputText, setInputText] = useState("");
  const [imageData, setImageData] = useState<FileList | null>();
  const [imageView, setImageView] = useState<string[]>([]);
  const [resultText, setResultText] = useState<PropsResultText[]>([]);
  const [maxTokens, setMaxTokens] = useState();
  const [loading, setLoading] = useState(false);
  const [chooseIA, setChooseIA] = useState(IA_TYPES.chatbot);
  const [history, setHistory] = useState<PropsResultText[]>([]);
  const [historyDiscribeImage, setHistoryDiscribeImage] = useState<
    PropsDiscribeImage[]
  >([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const API_KEY = process.env.NEXT_PUBLIC_TOKEN_GOOGLE;

  const IS_CHATBOT = chooseIA == IA_TYPES.chatbot;

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
  ];

  const generationConfig = {
    maxOutputTokens: 10000,
    temperature: 0.9,
  };

  const chatBot = async () => {
    setLoading(true);
    var messages: Array<PropsResultText> = [
      ...resultText,
      { role: "user", parts: inputText },
    ];
    let historyChat = [];
    setResultText(messages);

    const genAI = new GoogleGenerativeAI(API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
      safetySettings,
      generationConfig,
    });

    const chat = model.startChat({
      history: [...history],
      generationConfig,
    });
    const { response } = await chat.sendMessage(inputText);
    messages.push({ role: "model", parts: response.text() });
    historyChat.push({ role: "model", parts: response.text() });
    setHistory(messages);
    setResultText(messages);
    setInputText("");
    setLoading(false);
  };

  // Converts a File object to a GoogleGenerativeAI.Part object.
  const fileToGenerativePart = async (file: ChangeEvent<HTMLInputElement>) => {
    const base64EncodedDataPromise = new Promise((resolve) => {
      const reader = new FileReader();
      //@ts-ignore
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      //@ts-ignore
      reader.readAsDataURL(file);
    });
    return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
  };

  const discribeImage = async () => {
    setLoading(true);
    const prompt = inputText;
    var messages: PropsDiscribeImage[] = [
      ...historyDiscribeImage,
      { role: "user", parts: { prompt, images: imageView } },
    ];
    setHistoryDiscribeImage(messages);
    setImageView([]);
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-pro-vision",
      generationConfig,
      safetySettings,
    });

    const imageParts: any = await Promise.all(
      //@ts-ignore
      [...imageData].map(fileToGenerativePart)
    );
    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    messages.push({ role: "model", parts: { prompt: text } });
    setHistoryDiscribeImage(messages);

    setInputText("");
    setLoading(false);
  };
  useEffect(() => {
    scrollToBottom();
  }, [resultText, history, historyDiscribeImage]);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Evita a quebra de linha padrão no textarea
      handleGenerete(); // Chama a função para submeter o formulário
    }
  };

  const handleButtonClickaddImage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  // Função para lidar com a mudança no input de arquivo

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = event.target.files; // Pega os arquivos selecionados

    // Verifica se arquivos foram selecionados e se há pelo menos um arquivo
    if (files && files.length > 0) {
      const imagensArray = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImageView(imagensArray);
      setImageData(files);
    }
  };

  const handleGenerete = () => {
    if (IS_CHATBOT) {
      chatBot();
    } else {
      discribeImage();
    }
  };
  return (
    <html lang="en">
      <head />
      <body className="bg-[#7F7FD5] bg-app">
        <div className="container">
          <div className="sidebar">
            <div className="sidebar-title">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Google_Bard_logo.svg"
                id="gemin-pro-logo"
                alt="logo"
              />
              <h1>Google IA -</h1>
              <h1 id="gemini-pro-branding">Gemini Pro</h1>
            </div>
            <form className="sidebar-section">
              {!IS_CHATBOT && (
                <div className="sidebar-section">
                  <label htmlFor="safetySettings">
                    Escolha uma imagem aqui:
                  </label>
                  <div className="container-add-image">
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                      multiple
                    />
                    <button
                      className="generate-button"
                      onClick={handleButtonClickaddImage}
                    >
                      Adicionar Imagem
                    </button>
                    {
                      <div className="carrousel-images">
                        {imageView.map((item, k) => (
                          <div key={k} className="img-wrapper">
                            <Image
                              className="image-add"
                              src={item}
                              alt="image-item"
                            />
                          </div>
                        ))}
                      </div>
                    }
                  </div>
                </div>
              )}
              <textarea
                id="inputText"
                placeholder="Digite algo aqui..."
                className="prompt-field"
                value={inputText}
                onChange={(e) => setInputText(String(e.target.value))}
                onKeyDown={handleKeyDown}
              ></textarea>
              <button
                disabled={loading}
                id="generate"
                className="generate-button"
                onClick={handleGenerete}
              >
                {loading ? "Pensando..." : "Enviar"}
              </button>
            </form>

            <div className="sidebar-section">
              <h3>Configurações do IA:</h3>
              <label htmlFor="safetySettings">Escolha a IA:</label>
              <select
                id="safetySettings"
                className="input-field"
                onChange={(e) => setChooseIA(e.target.value)}
              >
                <option value="chatbot">ChatBot</option>
                <option value="descreverimagem">Descrever Imagem</option>
              </select>
            </div>
            <div className="credits-div">
              <p>Feito por Thiago Miguel</p>
              <strong>
                <Link href="/">
                  <ArrowBigLeft color="white" size={25} strokeWidth={1.75} />
                </Link>
              </strong>
            </div>
          </div>
          <div id="resultText" className="result-text">
            {!IS_CHATBOT
              ? historyDiscribeImage.map((item, k) => (
                  <div key={k}>
                    <div className="text-box">
                      <h1
                        style={{
                          color: item.role != "user" ? "#c8c8c8" : "#e4e4e4",
                        }}
                      >
                        {item.role == "user" ? "Você" : "Bot"}:
                      </h1>
                      {item.role == "user" && (
                        <div className="carrousel-images">
                          {item.parts.images?.map((item, k) => (
                            <div key={k} className="img-wrapper">
                              <Image
                                className="image-add"
                                src={item}
                                alt="image-item"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      <p
                        style={{
                          color: item.role != "user" ? "#c8c8c8" : "#e4e4e4",
                        }}
                      >
                        {item.parts.prompt}
                      </p>
                    </div>
                  </div>
                ))
              : resultText.map((item, k) => (
                  <div key={k}>
                    <div className="text-box">
                      <h1
                        style={{
                          color: item.role != "user" ? "#c8c8c8" : "#e4e4e4",
                        }}
                      >
                        {item.role == "user" ? "Você" : "Bot"}:
                      </h1>
                      <p
                        style={{
                          color: item.role != "user" ? "#c8c8c8" : "#e4e4e4",
                        }}
                      >
                        {item.parts}
                      </p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </body>
    </html>
  );
}
