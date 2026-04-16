"use client";

import { useMemo, useState } from "react";
import {
  orderedPersonalityKeys,
  personalities,
  questions,
  type PersonalityKey,
} from "./quiz-data";

type QuizStage = "intro" | "quiz" | "results";
type Scores = Record<PersonalityKey, number>;

const emptyScores = (): Scores => ({
  boldExplorer: 0,
  smoothOperator: 0,
  cozyClassic: 0,
  wildCard: 0,
});

export default function Home() {
  const [stage, setStage] = useState<QuizStage>("intro");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Scores>(emptyScores);

  const currentQuestion = questions[questionIndex];
  const totalQuestions = questions.length;
  const progress = stage === "quiz" ? ((questionIndex + 1) / totalQuestions) * 100 : 0;

  const results = useMemo(() => {
    const totalAnswers =
      Object.values(scores).reduce((sum, value) => sum + value, 0) || 1;

    const ranked = orderedPersonalityKeys
      .map((key) => ({
        key,
        personality: personalities[key],
        count: scores[key],
        percentage: Math.round((scores[key] / totalAnswers) * 100),
      }))
      .sort((a, b) => {
        if (b.count !== a.count) {
          return b.count - a.count;
        }

        return orderedPersonalityKeys.indexOf(a.key) - orderedPersonalityKeys.indexOf(b.key);
      });

    return ranked;
  }, [scores]);

  function startQuiz() {
    setStage("quiz");
    setQuestionIndex(0);
    setScores(emptyScores());
  }

  function retakeQuiz() {
    setStage("intro");
    setQuestionIndex(0);
    setScores(emptyScores());
  }

  function handleAnswer(personality: PersonalityKey) {
    setScores((prev) => {
      const next = {
        ...prev,
        [personality]: prev[personality] + 1,
      };

      if (questionIndex === totalQuestions - 1) {
        setStage("results");
      } else {
        setQuestionIndex((index) => index + 1);
      }

      return next;
    });
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(190,156,122,0.22),_transparent_28%),linear-gradient(180deg,_#f8f3ec_0%,_#f1e8dc_48%,_#ece0d1_100%)] px-4 py-6 text-stone-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl items-center justify-center">
        <div className="grid w-full gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="overflow-hidden rounded-[34px] border border-white/50 bg-[linear-gradient(180deg,rgba(255,253,248,0.96),rgba(252,247,240,0.92))] p-6 shadow-[0_24px_90px_rgba(74,53,33,0.12)] backdrop-blur sm:p-8 lg:p-10">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#8b694c]">
              <span className="rounded-full border border-[#d9c7b4] bg-white/70 px-3 py-2">
                NovaBrew
              </span>
              <span className="rounded-full border border-[#d9c7b4] bg-white/70 px-3 py-2">
                Coffee Taste Profile Quiz
              </span>
            </div>

            {stage === "intro" ? (
              <IntroPanel onStart={startQuiz} />
            ) : null}

            {stage === "quiz" ? (
              <QuizPanel
                progress={progress}
                questionIndex={questionIndex}
                totalQuestions={totalQuestions}
                prompt={currentQuestion.prompt}
                onAnswer={handleAnswer}
                options={currentQuestion.options}
              />
            ) : null}

            {stage === "results" ? (
              <ResultsPanel results={results} onRetake={retakeQuiz} />
            ) : null}
          </section>

          <aside className="flex flex-col justify-between rounded-[34px] border border-white/40 bg-[linear-gradient(180deg,rgba(109,80,55,0.92),rgba(74,53,37,0.96))] p-6 text-[#f7eee3] shadow-[0_24px_90px_rgba(48,30,18,0.2)] sm:p-8 lg:p-10">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/8 px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#f0dbc1]">
                Designed for retention
              </div>
              <h1 className="max-w-xl text-4xl leading-[0.95] tracking-tight text-[#fff9f2] sm:text-5xl">
                Help subscribers feel like NovaBrew actually gets them.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#ead9c7] sm:text-lg">
                This quiz gives each subscriber a coffee personality, a more tailored
                recommendation, and a reason to stay engaged beyond the first bag.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <FeatureCard
                number="01"
                title="Lifestyle-led questions"
                description="Warm, human prompts that feel like a personality experience instead of a dry intake form."
              />
              <FeatureCard
                number="02"
                title="Nuanced percentage results"
                description="Subscribers see a richer taste profile, not a simplistic one-label answer."
              />
              <FeatureCard
                number="03"
                title="Coffee pairing built in"
                description="Each result naturally points toward a specific NovaBrew recommendation."
              />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function IntroPanel({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex h-full flex-col justify-between gap-8">
      <div>
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#8b694c]">
          Welcome
        </p>
        <h2 className="max-w-2xl text-4xl leading-[0.98] tracking-tight text-stone-900 sm:text-5xl">
          Discover your coffee personality.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
          Answer seven lifestyle-inspired questions and get a taste profile that
          feels personal, memorable, and actually useful for what NovaBrew should
          send you next.
        </p>
      </div>

      <div className="grid gap-4 rounded-[28px] border border-[#dbc9b8] bg-white/70 p-5 sm:grid-cols-3">
        <StatCard value="7" label="Lifestyle questions" />
        <StatCard value="4" label="Coffee personalities" />
        <StatCard value="100%" label="Tailored result mix" />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={onStart}
          className="inline-flex items-center justify-center rounded-full bg-[#8f6443] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#7b5336]"
        >
          Start Quiz
        </button>
        <p className="text-sm leading-7 text-stone-500">
          Built to feel calm, premium, and easy to complete on mobile.
        </p>
      </div>
    </div>
  );
}

function QuizPanel({
  progress,
  questionIndex,
  totalQuestions,
  prompt,
  options,
  onAnswer,
}: {
  progress: number;
  questionIndex: number;
  totalQuestions: number;
  prompt: string;
  options: {
    icon: string;
    text: string;
    personality: PersonalityKey;
  }[];
  onAnswer: (personality: PersonalityKey) => void;
}) {
  return (
    <div className="animate-[fadeIn_.35s_ease]">
      <div className="mb-5 flex items-center justify-between gap-4 text-sm font-medium text-stone-500">
        <span>
          Question {questionIndex + 1} of {totalQuestions}
        </span>
        <span>{Math.round(progress)}% complete</span>
      </div>
      <div className="mb-8 h-3 overflow-hidden rounded-full bg-[#e8ddd1]">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,#ad805d,#8f6443)] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <h2 className="max-w-3xl text-3xl leading-tight tracking-tight text-stone-900 sm:text-4xl">
        {prompt}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600">
        Pick the answer that feels most like you. There are no wrong answers here.
      </p>

      <div className="mt-8 grid gap-4">
        {options.map((option) => (
          <button
            key={`${prompt}-${option.text}`}
            type="button"
            onClick={() => onAnswer(option.personality)}
            className="group flex items-start gap-4 rounded-[24px] border border-[#dfd0c1] bg-white px-5 py-5 text-left transition duration-200 hover:-translate-y-0.5 hover:border-[#b98b66] hover:shadow-[0_20px_40px_rgba(92,64,41,0.12)]"
          >
            <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f4eadf] text-xl transition group-hover:bg-[#ead7c3]">
              {option.icon}
            </span>
            <span className="text-base leading-7 text-stone-800">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function ResultsPanel({
  results,
  onRetake,
}: {
  results: {
    key: PersonalityKey;
    personality: (typeof personalities)[PersonalityKey];
    count: number;
    percentage: number;
  }[];
  onRetake: () => void;
}) {
  const primary = results[0];
  const secondary = results[1];
  const confettiPieces = Array.from({ length: 24 }, (_, index) => ({
    id: index,
    left: `${4 + ((index * 13) % 92)}%`,
    delay: `${(index % 8) * 0.16}s`,
    duration: `${3.4 + (index % 5) * 0.35}s`,
    rotation: `${(index % 6) * 18}deg`,
    color: ["#8f6443", "#c69263", "#e7c89f", "#6f7f63"][index % 4],
  }));

  return (
    <div className="relative animate-[fadeIn_.4s_ease] overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 overflow-hidden"
      >
        {confettiPieces.map((piece) => (
          <span
            key={piece.id}
            className="absolute top-0 h-3 w-2 rounded-full animate-[confettiFall_var(--duration)_ease-in_forwards]"
            style={{
              left: piece.left,
              animationDelay: piece.delay,
              ["--duration" as string]: piece.duration,
              backgroundColor: piece.color,
              transform: `translateY(-24px) rotate(${piece.rotation})`,
            }}
          />
        ))}
      </div>
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#8b694c]">
        Your result
      </p>
      <h2 className="max-w-3xl text-4xl leading-[0.95] tracking-tight text-stone-900 sm:text-5xl">
        You are {primary.personality.name}.
      </h2>
      <p className="mt-4 text-lg leading-8 text-stone-600">
        {primary.personality.subtitle}
      </p>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="rounded-[28px] border border-[#dcccbc] bg-white p-6 shadow-[0_18px_45px_rgba(79,56,36,0.08)]">
          <div
            className="mb-5 inline-flex rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white"
            style={{ backgroundColor: primary.personality.accent }}
          >
            Primary profile
          </div>
          <p className="text-base leading-8 text-stone-700">
            {primary.personality.description}
          </p>

          <div className="mt-8 rounded-[24px] bg-[#f8f2ea] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8b694c]">
              Matched coffee
            </p>
            <h3 className="mt-2 text-2xl tracking-tight text-stone-900">
              {primary.personality.coffee.name}
            </h3>
            <p className="mt-2 text-sm font-medium text-[#8b694c]">
              {primary.personality.coffee.tastingNotes}
            </p>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              {primary.personality.coffee.description}
            </p>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#dcccbc] bg-[linear-gradient(180deg,#fffaf4,#f7efe4)] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8b694c]">
            Your full taste mix
          </p>
          <div className="mt-5 space-y-4">
            {results.map((result) => (
              <div key={result.key}>
                <div className="mb-2 flex items-center justify-between gap-4 text-sm text-stone-600">
                  <span className="font-medium text-stone-800">
                    {result.personality.name}
                  </span>
                  <span>{result.percentage}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-[#e9ddd1]">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${result.percentage}%`,
                      backgroundColor: result.personality.accent,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[22px] border border-[#ddcdbd] bg-white/80 p-4">
            <p className="text-sm font-medium text-stone-800">
              Secondary note
            </p>
            <p className="mt-2 text-sm leading-7 text-stone-600">
              You also show strong {secondary.personality.name.toLowerCase()} energy,
              which means your taste has range. That gives NovaBrew room to pair
              your main profile with occasional discovery moments.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={onRetake}
          className="inline-flex items-center justify-center rounded-full bg-[#8f6443] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#7b5336]"
        >
          Retake Quiz
        </button>
        <p className="text-sm leading-7 text-stone-500">
          Designed to feel personal now and actionable when NovaBrew turns it into a
          live subscriber experience.
        </p>
      </div>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[22px] border border-[#e2d4c5] bg-white p-4">
      <p className="text-3xl font-semibold tracking-tight text-stone-900">{value}</p>
      <p className="mt-1 text-sm leading-6 text-stone-600">{label}</p>
    </div>
  );
}

function FeatureCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/14 bg-white/8 p-5">
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f0dbc1]">
        {number}
      </div>
      <h3 className="text-xl tracking-tight text-[#fff7ef]">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-[#ead9c7]">{description}</p>
    </div>
  );
}
