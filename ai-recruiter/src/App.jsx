import React, { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [input, setInput] = useState("");
  const [skills, setSkills] = useState([]);
  const [summary, setSummary] = useState("");

  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  const generateAI = () => {
    const generatedSkills = ["React", "JavaScript", "API Integration"];
    setSkills(generatedSkills);
    setSummary(`AI Summary: ${input} (structured professionally)`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-purple-600 mb-4">
          AI Recruiter
        </h1>

        {/* Progress */}
        <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
          <div
            className="bg-purple-500 h-2 rounded-full"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div>
            <h2 className="font-semibold mb-2">Tell us about yourself</h2>
            <textarea
              className="w-full border p-2 rounded mb-3"
              placeholder="I built a React project..."
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={() => {
                generateAI();
                next();
              }}
              className="bg-purple-500 text-white px-4 py-2 rounded w-full"
            >
              Generate Profile (AI)
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div>
            <h2 className="font-semibold mb-2">AI Suggested Skills</h2>
            <div className="flex flex-wrap gap-2 mb-3">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-purple-100 text-purple-600 px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
              <button onClick={prev}>Back</button>
              <button
                onClick={next}
                className="bg-purple-500 text-white px-4 py-2 rounded"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div>
            <h2 className="font-semibold mb-2">Profile Summary</h2>
            <div className="bg-gray-100 p-3 rounded mb-3">
              {summary}
            </div>
            <div className="flex justify-between">
              <button onClick={prev}>Back</button>
              <button
                onClick={next}
                className="bg-purple-500 text-white px-4 py-2 rounded"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div>
            <h2 className="font-semibold mb-2">Final Profile</h2>
            <p className="mb-2">{summary}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-600 px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
              Submit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
