import axios from "axios"

export function getJudge0LanguageId(language) {
    const languageMap = {
        "Python": 71,
        "JavaScript": 63,
        "Java": 62,
        "CPP": 54,
        "Go": 60,
    }
    return languageMap[language.toUpperCase()]
}
export async function submitBatch(submissions) {
    const { data } = await axios.post(`${process.env.JUDGE0_API_URL}/submissions/batch?base64_encoded=false`, { submissions })
    console.log("Batch submission data", data)
    return data
}

export async function pollBatchResults(tokens) {
    while (true) {
        const { data } = await axios.get(`${process.env.JUDGE0_API_URL}/submissions/batch`, {
            params: {
                tokens: tokens.join(","),
                base64_encoded: false
            }
        })
        console.log(data)
        const result = data.submissions

        const isAllDone = result.every((r) => r.status.id !== 1 && r.status.id !== 2)
        if (isAllDone) return result
        await sleep(1000)
    }
}
export const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}