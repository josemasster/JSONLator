import { iaPrompt } from "../utils/ia";

export default function TranslateService(){
    const data = iaPrompt();
    console.log(data)
    return data

} 